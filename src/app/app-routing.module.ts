import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {C3Component} from './c3/c3.component';
import {FormularioComponent} from './formulario/formulario.component';


const routes: Routes = [
  {path: 'C3', component: C3Component},
  {path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
