import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pizza } from '../pizza';
import { AccueilService } from '../accueil.service';
import { viewClassName } from '@angular/compiler';
@Component({
  selector: 'app-show-pizza',
  templateUrl: './show-pizza.component.html',
  styleUrls: ['./show-pizza.component.css']
})
export class ShowPizzaComponent implements OnInit {
  allPizzas :Pizza[];
  display='none';
  // @ViewChild('img') img:ElementRef;
  constructor(private accueilService:AccueilService) { }

  ngOnInit() {
    this.allPizzas = this.accueilService.Pizzas;
    console.log(this.allPizzas);
  }

  onCloseHandled(){
    this.display = 'none';
  }

  // openModal(x:string){
  //   this.img.nativeElement.source = x;
  //   console.log(this.img.nativeElement.source);
  //   this.display = 'block';
  // }

}
