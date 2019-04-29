import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartelera: any [];
  populares : any [];
  popularesKids: any [];
  pelis: any [];
  constructor(public _ps:PeliculasService) {
    this._ps.getCartelera().subscribe(data=>{
      this.cartelera = data;
    });
    this._ps.getPopulares().subscribe(data =>this.populares = data);
    this._ps.getPopularesKids().subscribe(data=>this.popularesKids= data);
  }

  ngOnInit() {

  }
  getImage(tamanio:number,link:string){
    let url:string = `image.tmdb.org/t/p/w${tamanio}/${link}`;
    return url;
  }
}
