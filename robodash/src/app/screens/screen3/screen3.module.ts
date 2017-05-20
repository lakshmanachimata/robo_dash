import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Screen3Component } from './screen3.component';
import { RouterModule, Routes,Router }  from '@angular/router';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';

const Screen3Routes: Routes = [
  { path: '', component: Screen3Component },
];


@NgModule({
  declarations: [
    Screen3Component,
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forChild(Screen3Routes)
  ],
  providers: [],
})
export class Screen3Module { 
  constructor() {
      console.log("S3Module Loaded")
      }
}
