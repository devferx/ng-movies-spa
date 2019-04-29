import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';
import { MovieComponent } from './views/movie/movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagePipe } from './pipes/image.pipe';
import { HomeMoviesComponent } from './components/home-movies/home-movies.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from "@angular/forms";
import { PosterPipe } from './pipes/poster.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    NavbarComponent,
    ImagePipe,
    HomeMoviesComponent,
    CardComponent,
    PosterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
