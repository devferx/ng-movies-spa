import { Injectable } from "@angular/core";
import { Jsonp } from "@angular/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  private apikey: string = "e06ba0a47302109b467d6b002d52bef2";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp: Jsonp) {}

  urlGenerator (link:string){
    let url= `${this.urlMoviedb}${link}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map(res => res.json().results));
  }
  getPopulares() {
    return this.urlGenerator("/discover/movie?sort_by=popularity.desc")
  }

  getPopularesKids (){
    return this.urlGenerator ("/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc");
  }

  buscarPelicula( texto:string ){
    return this.urlGenerator(`/search/movie?query=${ texto }&sort_by=popularity.desc`)
}
  getCartelera (){
    let desde = new Date ();
    let hasta = new Date ();
    hasta.setDate(hasta.getDate()+7);
    let desdestr= `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`
    let hastastr= `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`
    return this.urlGenerator(`/discover/movie?primary_release_date.gte=${desdestr}&primary_release_date.lte=${hastastr}`)
  }
  getMovie (id:number){
    let url= `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(map(res => res.json()));
  }
}
