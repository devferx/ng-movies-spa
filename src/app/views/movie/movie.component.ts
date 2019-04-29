import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  ruta:string;
  id:number;
  pelicula:any;
  constructor(public _ps:PeliculasService, private router:Router, private activedRoute:ActivatedRoute) {
    this.activedRoute.params.subscribe(params =>{
      this.ruta = params['place']
      this.id= params['idx']
    })
    // this._ps.getMovie().subscribe(data=>console.log(data));
   }

  ngOnInit() {
    this._ps.getMovie(this.id).subscribe(data=>{
      this.pelicula = data;
    })
  }
  salir (){
    this.router.navigate([this.ruta])
  }
}
