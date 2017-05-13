import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { DataService } from '../data.service';
import { RouterModule, Routes,Router }  from '@angular/router';
import { Location }  from '@angular/common';

@Component({
  selector: 'screens-root',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent {
  constructor(private logger:LoggerService, private data:DataService,private router:Router,private location:Location) {
      }
  ngOnInit() {
    this.location.replaceState("/")
    this.router.navigateByUrl('screen0');
  }

}
