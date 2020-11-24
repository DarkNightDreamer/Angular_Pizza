import { Component, OnInit } from '@angular/core';
interface Country {
  name: string;
  flag: string;
  pizza: string;
  nb: number;
}

const COUNTRIES: Country[] = [ {
  name: 'China',
  flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
  pizza: 'pepperoni',
  nb: 1409517397
},
{
  name: 'United States',
  flag: 'a/a4/Flag_of_the_United_States.svg',
  pizza: 'tunisienne',
  nb: 324459463
}, 
{
  name: 'Russia',
  flag: 'f/f3/Flag_of_Russia.svg',
  pizza: 'Siscilien',
  nb: 146989754
},


{
  name: 'Canada',
  flag: 'c/cf/Flag_of_Canada.svg',
  pizza: 'neptune',
  nb: 36624199
} 

];
@Component({
  selector: 'app-ord-pizza-origin',
  templateUrl: './ord-pizza-origin.component.html',
  styleUrls: ['./ord-pizza-origin.component.css']
})
export class OrdPizzaOriginComponent implements OnInit {
  countries = COUNTRIES;

  constructor() { }

  ngOnInit() {
  }

}
