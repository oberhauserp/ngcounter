import { Component, OnInit } from '@angular/core';
import {Counter} from '../counter';
import {SuperCounter} from '../super-counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  constructor() {
    this.counters = []
    this.superCounters = [];
   }
  counters: Counter[];
  superCounters: SuperCounter[];
  name = 'Counter Wall';

  ngOnInit(): void {
  }

  create(){
    if(this.counters.length === 5)
      this.counters.push(new Counter())
    else{
      const counter = new Counter();
      this.counters.push(counter);
    }
  }
  
  upgradeCounter()
  {
    this.counters =[];
    this.superCounters.push(new SuperCounter());
  }

}
