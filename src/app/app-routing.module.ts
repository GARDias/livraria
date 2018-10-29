import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { InserirComponent } from './inserir/inserir.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  {path: 'lista', component: ListaComponent},
  {path: 'inserir', component: InserirComponent},
  {path: '', component:InicioComponent},
  {path: 'alterar', component:AlterarComponent},
  {path: 'excluir/:id', component:ExcluirComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
