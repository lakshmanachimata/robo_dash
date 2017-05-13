import { Component , Injectable, trigger, state, animate, transition, style,OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';
import { RouterModule, Routes,Router }  from '@angular/router';
import { Location }  from '@angular/common';
@Component({
  selector: 'screen3-root',
  templateUrl: './screen3.component.html',
  styleUrls: ['../screens.component.css',
              '../screen3/screen3.component.css']
})
export class Screen3Component implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  constructor(private logger: LoggerService,private data: DataService, private location:Location,private router:Router) {
        this.data.setShowTopMenu(true);
    this.data.setShowLeftMenu(true);
    this.data.setShowBottomMenu(true);
    this.data.setShowRightMenu(true);
  }
  ngOnChanges() { 
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
    this.data.setScreen(3);
  }
  ngOnDestroy() {
  }
  menuItemClick(item) {
    this.location.replaceState("/");
    this.router.navigateByUrl(item);
  }
}
