import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';
import { MovieComponent } from './views/movie/movie.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'home', component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'search/:id', component:SearchComponent},
  {path:'movie/:idx/:place', component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
