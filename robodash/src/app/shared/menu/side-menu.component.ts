import { Component , Injectable, trigger, state, animate, transition, style,OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';
import { RouterModule, Routes ,Router,RouterStateSnapshot} from '@angular/router';
import { Location }  from '@angular/common';
@Component({
  selector: 'side-menu-root',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class SideMenuComponent implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  constructor(private logger: LoggerService,public data: DataService,
  private router:Router, private location: Location) {
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
  public menuItemClick(item) {
    this.location.replaceState("/");
    this.router.navigateByUrl(item);
  }
}

