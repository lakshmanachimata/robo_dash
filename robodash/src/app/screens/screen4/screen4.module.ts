import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Screen4Component } from './screen4.component';

import { RouterModule, Routes,Router }  from '@angular/router';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';

const Screen4Routes: Routes = [
  { path: '', component: Screen4Component },
];

@NgModule({
  declarations: [
    Screen4Component,
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forChild(Screen4Routes)
  ],
  providers: [],
})
export class Screen4Module { 
  constructor() {
      console.log("S4Module Loaded")
      }
}
