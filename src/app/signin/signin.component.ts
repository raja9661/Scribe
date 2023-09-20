import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {  FormGroup,FormControl  } from '@angular/forms';
import {  Validators  } from '@angular/forms';

import * as firebase from "firebase/app";
import 'firebase/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  title="signin form";
  signform:FormGroup;
  message:string="";
  userError:any;
  displaySuccess:string="congurates you have singn-up successfully"
  ngOnInit(){
    this.signform=new FormGroup({
      firstname:new FormControl(null,[Validators.required]),
      lastname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)])
    });
  }
  onsubmit()
  {
    // console.log(this.loginform);
    let email:string=this.signform.value.email;
    let password:string=this.signform.value.password;
    let firstname:string=this.signform.value.firstname;
    let lastname:string=this.signform.value.lastname;

    firebase.default.auth().createUserWithEmailAndPassword(email,password)
    .then((response)=>{
      console.log(response);
      response.user.updateProfile({
       displayName:firstname+" "+lastname,
       photoURL:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F12%2FUser_icon_2.svg%2F1200px-User_icon_2.svg.png&tbnid=lrHykjGhIn52_M&vet=12ahUKEwjjitqggv2AAxW87jgGHQioCtgQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUser_(computing)&docid=atclW7KF7OcQ7M&w=1200&h=1200&q=user&ved=2ahUKEwjjitqggv2AAxW87jgGHQioCtgQMygAegQIARB0"
      }).then(()=>{
        this.message="You have been signed up successfully.please login"
      })
    }).catch((error)=>{
      console.log(error);
      this.userError=error;
    })
  }
  }
