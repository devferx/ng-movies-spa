import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(pelicula: any): any {
    let url = 'http://image.tmdb.org/t/p/w500'
      if (pelicula.poster_path){
        return url+pelicula.poster_path;
      }else{
        return 'http://www.gladessheriff.org/media/images/most%20wanted/No%20image%20available.jpg';
      }
    }
}
