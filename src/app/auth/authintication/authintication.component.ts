import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as  AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-authintication',
  standalone: false,
  templateUrl: './authintication.component.html',
  styleUrl: './authintication.component.css'
})
export class AuthinticationComponent implements OnInit, OnDestroy{
 isloggedin: boolean= true;
 isLoading : boolean = false;
 error : string =null;
 SubStore : Subscription;


 constructor(
 private store : Store<fromApp.AppState>
 ){}
 

 ngOnInit() {
  this.SubStore = this.store.select('auth').subscribe(authData=>{
    this.isLoading=authData.isLoading;
    this.error=authData.authError;
    
   })
 }

 onSwitchMode(){
  this.isloggedin= !this.isloggedin;
 }

 onSubmit(form : NgForm){  
  if(form.invalid)
    return;
  else{
      const email= form.value.email;
      const password= form.value.password;

      
    if(this.isloggedin){
      this.store.dispatch(new AuthActions.LoginStart({
        email: email,
        password: password
      }));
    }else {
       this.store.dispatch(new AuthActions.SignupStart({ 
        email : email,
        password : password
      }));
    }
     form.reset();
  }
 }
 onErrorHandle(){
  this.store.dispatch(new AuthActions.CleanError());
 }
  ngOnDestroy(): void {
    this.SubStore.unsubscribe();
  }
}
