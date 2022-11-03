import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Observable } from 'rxjs';

type AnnotatePayload = {
  image: string;
};

export type LabelDetected = {
  description: string;
  score?: number | null;
};

@Injectable({
  providedIn: 'root',
})
export class ObjectRecognitionFunctionService {
  private callable = this.angularFunction.httpsCallable<
    AnnotatePayload,
    LabelDetected[]
  >('annotateImage');

  constructor(private angularFunction: AngularFireFunctions) {}

  recognizeObjectInImage(image: string): Observable<LabelDetected[]> {
    return this.callable({ image: image.split(',')[1] });
  }
}
