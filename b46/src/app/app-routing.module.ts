import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirComponent } from './dir/dir.component';
import { PipeComponent } from './pipe/pipe.component';
import {FormsComponent} from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'intro', component: IntroComponent},
  {path:'varrrrrrrr', component:VarComponent},
  {path:'dir', component:DirComponent},
  {path:'pipes', component:PipeComponent},
  {path:'forms', component:FormsComponent},
  {path:'obj-forms', component:ObjFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
