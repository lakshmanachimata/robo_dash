import {Injectable,EventEmitter} from '@angular/core';
import {Http,Response} from '@angular/http';
import {LoggerService} from './logger.service';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes,Router }  from '@angular/router';
import { Location }  from '@angular/common';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as http from 'http';
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

    constructor(private router:Router,private location:Location,private http:Http) {
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
    connectToController(ip){
        let httpOptions = this.makeRequestHeaders(ip,80,'');
        httpOptions.method = 'GET';
        var req = http.request(httpOptions, function(res) {
            res.on('data', function(data) {
                console.log(data.toString())
            });
            res.on('headers', function(data) {
                console.log(data.toString())
            });
            res.on('error',function(error){
                console.log(error)
            });
            res.on('close',function(){
            });
            res.on('end',function(){
            });
        });
        req.end();
        req.on('error', function(e) {
            console.log(e);
        });
    }

     makeRequestHeaders(ip,inport,inpath){
        let options = {
            hostname: ip,
            port: inport,
            method:'',
            path:inpath,
        }
        return options;
    }

}