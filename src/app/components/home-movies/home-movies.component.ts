import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styles: []
})
export class HomeMoviesComponent implements OnInit {
  @Input () nombre:string;
  @Input () peliculas: any [];
  constructor(private _ps:PeliculasService,private router:Router) { }

  ngOnInit() {
  }
  entrar (id:number){
  this.router.navigate(['/movie',id,'home'])
  }
}
