import { Component , Injectable, trigger, state, animate, transition, style,OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';
import { RouterModule, Routes,Router }  from '@angular/router';
import { Location }  from '@angular/common';
@Component({
  selector: 'screen4-root',
  templateUrl: './screen4.component.html',
  styleUrls: ['../screens.component.css',
              '../screen4/screen4.component.css']
})
export class Screen4Component implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  constructor(private logger: LoggerService,public data: DataService,private router:Router,private location:Location) {
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
    this.data.setScreen(4);
  }
  ngOnDestroy() {
  }
    
  menuItemClick(item) {
    this.location.replaceState("/");
    this.router.navigateByUrl(item);
  }
}
