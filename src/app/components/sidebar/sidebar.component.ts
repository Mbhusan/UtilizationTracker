import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './navdata';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
 }


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0;
  collapsed = false;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
    onResize(event : any) {
      this.screenWidth = window.innerWidth;
      if(this.screenWidth <= 768) {
        this.collapsed = false;
        this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
      }
    }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

}
