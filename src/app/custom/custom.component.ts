import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  meklas = ['sauce', 'thon',
  'esclope', 'farine'];

model = new Pizza ('Good luck for your choice', 'Dr IQ', this.meklas[0], 55,'544');

submitted = false;

onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
