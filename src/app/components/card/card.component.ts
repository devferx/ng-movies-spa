import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input () pelicula: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  entrar (id:number){
    this.router.navigate(['/movie',id,'search'])
    }
}
