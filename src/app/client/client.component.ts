import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { AccueilService } from '../accueil.service';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  allPizzas :Pizza[];
  constructor(private accueilService:AccueilService) { }

  ngOnInit() {
    this.allPizzas = this.accueilService.Pizzas;
    console.log(this.allPizzas);

  }

}
