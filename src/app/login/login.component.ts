import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router'
import { User } from '../user';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email:string = "";
  pwd:string = "";
  password: HTMLElement = (<HTMLInputElement>document.getElementById("password"));
  items:Observable<any[]>;
  // constructor(public db:AngularFireDatabase) {
  //   this.items = this.db.list('items').valueChanges();
  // }
  constructor(public afAuth:AngularFireAuth,public router:Router,public ngZone:NgZone) {
  }

  ngOnInit() {
  }

  onSubmit(formLogin:FormGroup){
    this.email = formLogin.value['email'];
    this.pwd = formLogin.value['password'];
    // this.db.list('items').push({name:this.email,content:new User(this.email,this.pwd)});
    return this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.pwd).then((result)=>{
      this.ngZone.run(() => {
        this.router.navigate(['accueil']);
    });
  }).catch((error) => {
    window.alert(error.message);
  })
}
  
  onShow(){
    console.log(this.password);
  }
}
