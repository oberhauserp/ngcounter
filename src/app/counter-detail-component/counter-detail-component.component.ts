import { Component, OnInit } from '@angular/core';
import {Counter} from '../counter';

@Component({
  selector: 'counter',
  templateUrl: './counter-detail-component.component.html',
  styleUrls: ['./counter-detail-component.component.css']
})
export class CounterDetailComponentComponent implements OnInit {
  counter: Counter
  constructor() {}

  ngOnInit(): void {
  }

  increment()
  {
    this.counter.value++;
  }

  decrement()
  {
    this.counter.value--;
  }

  

}
