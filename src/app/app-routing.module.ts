import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectRecognitionComponent } from './object-recognition/object-recognition.component';

const routes: Routes = [
  {
    path: 'object-recognition',
    pathMatch: 'full',
    component: ObjectRecognitionComponent,
  },
  {
    path: '**',
    redirectTo: '/object-recognition',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
