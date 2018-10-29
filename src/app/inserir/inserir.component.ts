import { Component, OnInit } from '@angular/core';
import { Livro } from '../Livro';
import { LivrariaService } from '../livraria.service';
import { Autor } from '../Autor';
import { Categoria } from '../Categoria';
@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css']
})
export class InserirComponent implements OnInit {

  livro:Livro; 
  livros:Array<Livro>;
  autores:Array<Autor>;
  autor:Autor;
  categoria:Categoria;
  categorias:Array<Categoria>;
  ida : string;
  idc : string;
  constructor(private service:LivrariaService) { }

  ngOnInit() {
    this.autor = new Autor();
    this.autores = new Array<Autor>();
    this.categoria = new Categoria();
    this.categorias = new Array<Categoria>();
    this.livro = new Livro();
    this.livros = new Array<Livro>();
    this.service.buscarAutor().subscribe(resp => this.autores = resp);
    this.service.buscarCategoria().subscribe(resp => this.categorias = resp);
  }

  salvar(){
    this.service.inserir(this.ida,this.idc,this.livro).subscribe();
  }

}
