import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileInputComponent } from 'ngx-material-file-input';
import { first } from 'rxjs';
import {
  LabelDetected,
  ObjectRecognitionFunctionService,
} from '../object-recognition-function.service';
import { ObjectDialogComponent } from './../object-dialog/object-dialog.component';

@Component({
  selector: 'app-object-recognition',
  templateUrl: './object-recognition.component.html',
  styleUrls: ['./object-recognition.component.scss'],
})
export class ObjectRecognitionComponent {
  results: LabelDetected[] = [];

  image: string | null = null;

  @ViewChild('removableInput') removableInput!: FileInputComponent;

  constructor(
    private dialog: MatDialog,
    private objectRecognitionFunctionService: ObjectRecognitionFunctionService
  ) {}

  /**
   * Handle file selection change
   * @param $event Event of change from DOM
   */
  onFileSelectionChange($event: Event) {
    const element = $event.target as HTMLInputElement;
    const fileList: FileList | null = element.files;
    if (fileList) {
      const reader = new FileReader();
      reader.readAsDataURL(fileList[0]);
      reader.onload = () => {
        this.image = reader.result as string;
      };
    } else {
      this.image = null;
    }
  }

  /**
   * Cleanup file input and previous image selected
   *
   * @param $event Event of click from DOM
   */
  clearRemovableInput($event: Event) {
    if (this.removableInput) {
      this.removableInput.clear($event);
    }
    this.image = null;
    this.results = [];
  }

  /**
   * Start object recognizion, reading from uploaded {@link image}
   */
  recognizeObjects() {
    if (this.image !== null) {
      this.objectRecognitionFunctionService
        .recognizeObjectInImage(this.image)
        .pipe(first())
        .subscribe((results) => {
          this.results = results;
        });
    } else {
      this.dialog.open(ObjectDialogComponent, {
        width: '450px',
        enterAnimationDuration: '0ms',
        exitAnimationDuration: '500ms',
      });
    }
  }
}
