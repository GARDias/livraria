import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './Livro';
import { Autor } from './Autor';
import { Categoria } from './Categoria';

@Injectable({
  providedIn: 'root'
})
export class LivrariaService {
  URL = 'http://localhost:8080/livraria/';
  constructor(private http:HttpClient) { }

  buscarAutor():Observable<Autor[]>{
    let requisicao = 'TodosAutores';
    return this.http.get<Autor[]>(this.URL + requisicao);
    
  }

  buscarCategoria():Observable<Categoria[]>{
    let requisicao = 'TodasCategorias';
    return this.http.get<Categoria[]>(this.URL + requisicao);
    
  }

  inserir(ida : string, idc : string, livro : Livro):Observable<Livro>{
    
    let requisicao = 'inserir?ida=' + ida + '&idc='+idc;
    return this.http.post<Livro>(this.URL + requisicao, livro);
    
  }
}
