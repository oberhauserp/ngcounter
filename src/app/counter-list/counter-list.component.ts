import { Component, OnInit } from '@angular/core';
import {Counter} from '../counter';
import {SuperCounter} from '../super-counter';

@Component({
  selector: 'counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: Counter[];
  superCounters: SuperCounter[];
  name = 'Counter Wall';

  constructor() {
    this.counters = []
    this.superCounters = [];
   }
 
  ngOnInit(): void {
  }

  create(){
    if(this.counters.length === 5)
      this.upgradeCounter();
    else{
      this.counters.push(new Counter());
    }
  }
  
  upgradeCounter()
  {
    this.counters =[];
    this.superCounters.push(new SuperCounter());
  }

}
