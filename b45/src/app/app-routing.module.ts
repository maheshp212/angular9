import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';


const routes: Routes = [
  {path:'homeeeeeeeeeeee', component: HomeComponent},
  {path:'intro', component: IntroComponent},
  {path:'var', component: VariablesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
