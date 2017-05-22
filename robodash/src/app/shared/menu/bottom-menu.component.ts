import { Component , Injectable, trigger, state, animate, transition, style,OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';
import {LoggerService} from '../../logger.service';
import { DataService } from '../../data.service';
import { RouterModule, Routes ,Router,RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'bottom-menu-root',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class BottomMenuComponent implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  constructor(private logger: LoggerService,public data: DataService,private router:Router) {
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
  }
  ngOnDestroy() {
  }
  menuItemClick(item) {
  }
  getScreen(){
      return this.data.getScreen();
  }
}
