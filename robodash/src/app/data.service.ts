import {Injectable,EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import {LoggerService} from './logger.service';

import { RouterModule, Routes,Router }  from '@angular/router';
import { Location }  from '@angular/common';


export class UIParams {
    showTopMenu = false;
    showLeftMenu = false;
    showBottomMenu = false;
    showRightMenu = false;
    screenNumber = -1;
}
export class DeviceParams {
    selectedControllerID = ""
}
@Injectable()
export class DataService {
    
    uiParams:UIParams   =  new UIParams();
    deviceParams:DeviceParams   =  new DeviceParams();

    constructor(private router:Router,private location:Location) {

    }

    getSelectedControllerID(){
        return this.deviceParams.selectedControllerID;
    }
    setSelectedControllerID(_controllerID){
        this.deviceParams.selectedControllerID = _controllerID;
    }

    getShowTopMenu() {
        return this.uiParams.showTopMenu;
    }
    setShowTopMenu(showmenu){
        this.uiParams.showTopMenu =  showmenu;
    }
    getShowLeftMenu() {
            return this.uiParams.showLeftMenu;
    }
    setShowLeftMenu(showmenu){
            this.uiParams.showLeftMenu =  showmenu;
    }
    getShowBottomMenu() {
            return this.uiParams.showBottomMenu;
    }
    setShowBottomMenu(showmenu){
            this.uiParams.showBottomMenu =  showmenu;
    }
    getShowRightMenu() {
            return this.uiParams.showRightMenu;
    }
    setShowRightMenu(showmenu){
        this.uiParams.showRightMenu =  showmenu;
    }
    getScreen(){
        return this.uiParams.screenNumber;
    }
    setScreen(number) {
        this.uiParams.screenNumber = number;
    }
}