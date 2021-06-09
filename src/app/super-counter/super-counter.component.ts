import { Component, Input, OnInit } from '@angular/core';
import {SuperCounter} from '../super-counter';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() counter: SuperCounter = new SuperCounter();
  constructor() { }

  ngOnInit(): void {
  }

  increment()
  {
    this.counter.value += 3;
  }

  decrement()
  {
    if(this.counter.value > 0)
      this.counter.value -= 3;
  }
}
