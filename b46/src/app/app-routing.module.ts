import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirComponent } from './dir/dir.component';
import { PipeComponent } from './pipe/pipe.component';
import {FormsComponent} from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import {LifeCycleComponent} from './life-cycle/life-cycle.component'
import { ApisComponent } from './apis/apis.component';
import {NotfoundComponent} from './notfound/notfound.component'
import { ViewUserComponent } from './view-user/view-user.component';
import {MultiselectComponent} from './multiselect/multiselect.component'

const routes: Routes = [
  {path:'', component: HomeComponent}, // home or landing page
  {path:'intro', component: IntroComponent},
  {path:'varrrrrrrr', component:VarComponent},
  {path:'dir', component:DirComponent},
  {path:'pipes/:id/:name/:age', component:PipeComponent},
  {path:'forms', component:FormsComponent},
  {path:'obj-forms', component:ObjFormsComponent},
  {path:'life-cycle', component:LifeCycleComponent},
  {path:'apis', component:ApisComponent},
  {path:'multi-select', component:MultiselectComponent},
  {path:'view-user/:id', component:ViewUserComponent},
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
