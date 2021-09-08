import { BrowserModule } from'@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileUploadComponent } from	'./file-upload/file-upload.component';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FileUploadService } from './file-upload.service';

@NgModule({
declarations: [
	AppComponent,
	FileUploadComponent,

],
imports: [
	BrowserModule,
	HttpClientModule,
	
],
providers: [FileUploadService],
bootstrap: [AppComponent]
})
export class AppModule { }
