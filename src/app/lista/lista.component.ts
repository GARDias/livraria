import { Component, OnInit } from '@angular/core';
import { Livro } from '../Livro';
import { LivrariaService } from '../livraria.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  livro : Livro;
  livros : Array<Livro>;
  constructor(private service : LivrariaService) { }

  ngOnInit() {
    this.livro = new Livro();
    this.livros = new Array<Livro>();
    this.service.buscarTodos().subscribe(resp => this.livros = resp);
  }

}
