import { Component } from '@angular/core';
declare var $: any;
declare var jQuery:any;
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  usuario: string = "Oscar Rojas"
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  toogleBar() {
    
    $('#myModal').modal('show');
  }

}
