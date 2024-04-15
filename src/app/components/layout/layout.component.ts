import { Component } from '@angular/core';
import { DashboardService,Employee,Tab,TabComponent,HeaderType } from '../dashboard/dashboard.component.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
 public employees: Employee[] = [];
  public generalHeaders: string[] = [];
  public deploymentHeaders: string[] = [];
  public agingHeaders: string[] = [];
  protected tabs: Tab[] = []; 
  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.employees = this.dashboardService.getEmployees();
    const allKeys: string[] = this.employees.length > 0 ? 
                           Object.keys(this.employees[0]) : 
                           [];
    this.generalHeaders = allKeys.slice(0, 7);
    this.deploymentHeaders = allKeys.slice(0,11);
    this.agingHeaders = [...allKeys.slice(0, 7), ...allKeys.slice(-2)];
    this.tabs = [
      { header: HeaderType.General, component: TabComponent.CommonTable, headers: this.generalHeaders },
      { header: HeaderType.DeploymentDetails, component: TabComponent.Splitter, headers: this.deploymentHeaders },
      { header: HeaderType.Aging, component: TabComponent.Splitter, headers: this.agingHeaders }
    ]; 
  }
 

}
