import { Component , Injectable, trigger, state, animate, transition, style,OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,ViewChild } from '@angular/core';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';
import { RouterModule, Routes,Router }  from '@angular/router';
import { Location }  from '@angular/common';

import { Modal,ModalModule  } from 'ngx-modal';

@Component({
  selector: 'screen0-root',
  templateUrl: './screen0.component.html',
  styleUrls: ['./screen0.component.css']
})
export class Screen0Component implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  selectedSortType = 'modelType';
  sortUITypes = ["sort by : System name","System name","Date added","Controller id","IP address"];
  ctrlUnits = [
    new ControllerUnit("1","W4A4_R11","10.140.50.100","Controller A"),
    new ControllerUnit("2","W4A4_R14","10.140.50.104","Controller D"),
    new ControllerUnit("3","W4A4_R119","10.140.50.130","Controller AB"),
    new ControllerUnit("4","W4A4_R12","10.140.50.101","Controller B"),
    new ControllerUnit("5","W4A4_R121","10.140.50.141","Controller H"),
    new ControllerUnit("6","W4A4_R171","10.140.50.131","Controller N"),
    new ControllerUnit("7","W4A4_R13","10.140.50.102","Controller C"),
    new ControllerUnit("8","W4A4_R131","10.140.50.200","Controller J"),
    new ControllerUnit("9","W4A4_R161","10.140.50.132","Controller I")
  ];

  @ViewChild('loginModal') loginModalItem:Modal; 

  constructor(private logger: LoggerService,private data: DataService,private router:Router,
  private location:Location,modal:ModalModule) {
    this.data.setShowTopMenu(false);
    this.data.setShowLeftMenu(false);
    this.data.setShowBottomMenu(false);
    this.data.setShowRightMenu(false);
    this.selectedSortType = this.sortUITypes[0];
  }

  controllerSelected(_ctrl){
      this.data.setSelectedControllerID(_ctrl.id);
  }
  sortControllers(){
    return this.sortUITypes;
  }

  login(){
      //do some authentication here
      this.location.replaceState("/")
      this.router.navigateByUrl('screen1');
  }
  cancelLogin(){
    this.loginModalItem.close();
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
    this.data.setScreen(1);
  }
  ngOnDestroy() {
  }


}

export class ControllerUnit{
    
    constructor(public id:string,public name:string,public ipaddress:string,public displayName:string){

    }
}