import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared/shared.module'
import { Screen1Component } from './screen1.component';
import { RouterModule, Routes,Router }  from '@angular/router';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';

const Screen1Routes: Routes = [
  { path: '', component: Screen1Component },
];


@NgModule({
  declarations: [
    Screen1Component,
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forChild(Screen1Routes)
  ],
  providers: [],
})
export class Screen1Module {
   constructor() {
      console.log("S1Module Loaded")
      }
 }
