import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared/shared.module'
import { Screen0Component } from './screen0.component';
import { RouterModule, Routes,Router }  from '@angular/router';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';

import { ModalModule } from 'ngx-modal';

const Screen1Routes: Routes = [
  { path: '', component: Screen0Component },
];


@NgModule({
  declarations: [
    Screen0Component,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    ModalModule,
    RouterModule.forChild(Screen1Routes)
  ],
  providers: [],
})
export class Screen0Module {
   constructor() {
      console.log("S1Module Loaded")
      }
 }
