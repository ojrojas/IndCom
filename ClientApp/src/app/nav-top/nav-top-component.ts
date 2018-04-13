import { Component } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-nav-top',
    templateUrl: './nav-top.component.html',
    styleUrls: ['./nav-top.component.css']
})

export class NavTopComponent {

    toggle() {
        $('.ui.sidebar.transition').transition('scale');
        let div_toggle = document.getElementById('main');
        console.log(div_toggle.offsetWidth);
        if (div_toggle.offsetWidth < 1082) {
            div_toggle.removeAttribute('class');
            div_toggle.setAttribute('class', 'pusher contenido2');
            console.log(div_toggle.offsetWidth);
        } else {
            div_toggle.removeAttribute('class');
            div_toggle.setAttribute('class', 'pusher contenido1');
            console.log(div_toggle.offsetWidth,"else");
        }
    }
}