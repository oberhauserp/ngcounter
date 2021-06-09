import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CounterDetailComponentComponent } from './counter-detail-component/counter-detail-component.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    CounterDetailComponentComponent,
    SuperCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
