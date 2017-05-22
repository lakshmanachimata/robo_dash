import { Component , Injectable, trigger, state, animate, transition, style,OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';
import { RouterModule, Routes,Router }  from '@angular/router';
import { Location }  from '@angular/common';
@Component({
  selector: 'screen2-root',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  constructor(private logger: LoggerService,public data: DataService,private router:Router) {
        this.data.setShowTopMenu(true);
    this.data.setShowLeftMenu(true);
    this.data.setShowBottomMenu(true);
    this.data.setShowRightMenu(true);
  }
  ngOnChanges(Changes) { 
  }
  ngDoCheck() { 
  }
  ngAfterContentInit() { 
  }
  ngAfterContentChecked() { 
  }
  ngAfterViewInit() { 
  }
  ngAfterViewChecked() { 
  }
  ngOnInit() { 
    this.data.setScreen(2);
  }
  ngOnDestroy() {
  }
}