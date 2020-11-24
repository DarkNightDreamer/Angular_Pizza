import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { InfoComponent } from './info/info.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { ShowPizzaComponent } from './show-pizza/show-pizza.component';
import { LoginComponent } from './login/login.component';
import { OrdPizzaOriginComponent } from './ord-pizza-origin/ord-pizza-origin.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'info', component:InfoComponent},
  {path:'add-pizza', component:AddPizzaComponent},
  {path:'show-pizza', component:ShowPizzaComponent},
  {path:'ord-pizza-origin',component:OrdPizzaOriginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,AccueilComponent,AddPizzaComponent,InfoComponent,ShowPizzaComponent,OrdPizzaOriginComponent];
