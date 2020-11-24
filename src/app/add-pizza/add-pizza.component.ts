import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccueilService } from '../accueil.service';
import { Pizza } from '../pizza';


@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {

  submitted:boolean = false;
  constructor(private accueilService:AccueilService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    this.submitted = true;
    this.accueilService.Pizzas.push(new Pizza(f.value['name'],
    f.value['ingredients'],
    f.value['img'],
    f.value['price'],
    f.value['descPizza']));
  }

}
