import {Component} from '@angular/core';
declare var $:any;

@Component({
    selector:'app-nav-top',
    templateUrl:'./nav-top.component.html',
    styleUrls:['./nav-top.component.css']
})

export class NavTopComponent {
    
    toggle(){
        $('.ui.sidebar').sidebar('toggle');
    }
}