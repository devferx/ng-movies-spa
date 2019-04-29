import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  resultados : any []= [];
  constructor(public _ps:PeliculasService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data=> this.buscar(data['id']))
  }
  buscar (nombre:string){
    this._ps.buscarPelicula(nombre).subscribe(data=>{
    this.resultados= data;
    });
  }
}
