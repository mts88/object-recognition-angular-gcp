import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireFunctionsModule,
  USE_EMULATOR,
} from '@angular/fire/compat/functions';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectDialogComponent } from './object-dialog/object-dialog.component';
import { ObjectRecognitionComponent } from './object-recognition/object-recognition.component';
import { SortConfidencePipe } from './sort-confidence.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ObjectRecognitionComponent,
    ObjectDialogComponent,
    SortConfidencePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
  ],
  providers: [{ provide: USE_EMULATOR, useValue: ['localhost', 5001] }],
  bootstrap: [AppComponent],
})
export class AppModule {}
