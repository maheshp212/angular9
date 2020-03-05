import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import {PipesComponent} from './pipes/pipes.component'
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ApisComponent } from './apis/apis.component';
import {NotfoundComponent} from './notfound/notfound.component'
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'intro', component: IntroComponent},
  {path:'var', component: VariablesComponent},
  {path:'dir', component: DirectivesComponent},
  {path:'forms', component: FormsComponent},
  {path:'obj-forms/:id/:name/:age', component: ObjFormsComponent},
  {path:'pipes', component: PipesComponent},
  {path:'life-cycle', component: LifeCycleComponent},
  {path:'apis', component: ApisComponent},

  {path:'**', component: NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
