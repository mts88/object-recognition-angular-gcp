import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileInputComponent } from 'ngx-material-file-input';
import { ObjectDialogComponent } from './../object-dialog/object-dialog.component';

@Component({
  selector: 'app-object-recognition',
  templateUrl: './object-recognition.component.html',
  styleUrls: ['./object-recognition.component.scss'],
})
export class ObjectRecognitionComponent {
  results: string[] = [];

  image: string | null = null;

  @ViewChild('removableInput') removableInput!: FileInputComponent;

  constructor(private dialog: MatDialog) {}

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
  }

  /**
   * Start object recognizion, reading from uploaded {@link image}
   */
  recognizeObjects() {
    // TODO: implement here connector with Object Detection service
    this.dialog.open(ObjectDialogComponent, {
      width: '450px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '500ms',
    });
  }
}
