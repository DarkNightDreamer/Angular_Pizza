import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { ShowPizzaComponent } from './show-pizza/show-pizza.component';
// import { environment } from 'src/environments/environment.prod';
import { environment } from 'src/environments/environment';
import { ClientComponent } from './client/client.component';
import { OrdPizzaOriginComponent } from './ord-pizza-origin/ord-pizza-origin.component';
import { CustomComponent } from './custom/custom.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    AddPizzaComponent,
    ShowPizzaComponent,
    ClientComponent,
    OrdPizzaOriginComponent,
    CustomComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
