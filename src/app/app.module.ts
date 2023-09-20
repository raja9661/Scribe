import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as firebase from 'firebase/app'
import 'firebase/auth'

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let Config = {
  apiKey: "AIzaSyCLZIBzXJ_qkNMscK44Phto3IRsKOd84QY",
  authDomain: "loginform-6b73f.firebaseapp.com",
  projectId: "loginform-6b73f",
  storageBucket: "loginform-6b73f.appspot.com",
  messagingSenderId: "405898023279",
  appId: "1:405898023279:web:08f1f3da8ac8f844a7589a",
  measurementId: "G-KD7P7YXYJ7"
};

firebase.default.initializeApp(Config);
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
