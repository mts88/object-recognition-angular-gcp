import { Pipe, PipeTransform } from '@angular/core';
import { LabelDetected } from './object-recognition-function.service';

@Pipe({
  name: 'sortConfidence',
})
export class SortConfidencePipe implements PipeTransform {
  transform(values: LabelDetected[], ...args: unknown[]): LabelDetected[] {
    return values.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  }
}
