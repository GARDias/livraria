import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaComponent } from './lista/lista.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { InserirComponent } from './inserir/inserir.component';
import { AppRoutingModule } from './app-routing.module';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaComponent,
    AlterarComponent,
    ExcluirComponent,
    InserirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
