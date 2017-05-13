import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared/shared.module'
import { Screen2Component } from './screen2.component';
import { RouterModule, Routes,Router }  from '@angular/router';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';

const Screen2Routes: Routes = [
  { path: '', component: Screen2Component },
];


@NgModule({
  declarations: [
    Screen2Component,
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forChild(Screen2Routes)
  ],
  providers: [],
})
export class Screen2Module { 
  constructor() {
      console.log("S2Module Loaded")
      }
}
