import { Component, OnInit } from '@angular/core';
import { DashboardService, Employee } from './dashboard.component.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  options: string[] = ['Utilization Tracker', 'Ageing Report', 'Deployment Summary'];
  selectedOption: string = 'Utilization Tracker';
  isDropdownOpen: boolean = false;
  selectedList: any;
  employees: Employee[] = [];
  constructor(private dashboardService: DashboardService) { }
  ngOnInit(): void {
    this.employees = this.dashboardService.getEmployees();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(event: any) {
    console.log(event);
    this.selectedOption = event ?? 'Utilization Tracker';
    this.isDropdownOpen = false;
  }
  // openMenuList(menulist: any) {
  //   this.selectedList = menulist;
  // }
}
