import { Injectable } from '@angular/core';

export interface Employee {
  employeeId: number;
  employeeName: string;
  globalId: number;
  emailIds: string;
  localGrade: string;
  globalPractise: string;
  category: string;
  utilization: number;
  primaryAssignment: string;
  primaryAssignmentDetail: string;
  projectCategory: string;
  aging: number;
  agingGroup: string;
}
export enum TabComponent {
  CommonTable = 'CommonTable',
  Splitter = 'Splitter',
}
export enum HeaderType {
  General = 'General',
  DeploymentDetails = 'Deployment Details',
  Aging = 'Aging',
}
export interface Tab {
  header: HeaderType;
  component: TabComponent;
  headers: string[];
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  employees: Employee[] = [
    {
      employeeId: 1,
      employeeName: 'John Doe',
      globalId: 1001,
      emailIds: 'john.doe@example.com',
      localGrade: 'Senior',
      globalPractise: 'Technology',
      category: 'Software Engineer',
      utilization: 80,
      primaryAssignment: 'Project A',
      primaryAssignmentDetail: 'Backend Development',
      projectCategory: 'Internal',
      aging: 10,
      agingGroup: 'Less than 1 year',
    },
    {
      employeeId: 2,
      employeeName: 'Jane Smith',
      globalId: 1002,
      emailIds: 'jane.smith@example.com',
      localGrade: 'Mid-Level',
      globalPractise: 'Design',
      category: 'UX Designer',
      utilization: 90,
      primaryAssignment: 'Project B',
      primaryAssignmentDetail: 'UI/UX Design',
      projectCategory: 'Client Facing',
      aging: 5,
      agingGroup: 'Less than 1 year',
    },
    {
      employeeId: 2,
      employeeName: 'Jane Smith',
      globalId: 1002,
      emailIds: 'jane.smith@example.com',
      localGrade: 'Mid-Level',
      globalPractise: 'Design',
      category: 'UX Designer',
      utilization: 90,
      primaryAssignment: 'Project B',
      primaryAssignmentDetail: 'UI/UX Design',
      projectCategory: 'Client Facing',
      aging: 5,
      agingGroup: 'Less than 1 year',
    },
    {
      employeeId: 2,
      employeeName: 'Jane Smith',
      globalId: 1002,
      emailIds: 'jane.smith@example.com',
      localGrade: 'Mid-Level',
      globalPractise: 'Design',
      category: 'UX Designer',
      utilization: 90,
      primaryAssignment: 'Project B',
      primaryAssignmentDetail: 'UI/UX Design',
      projectCategory: 'Client Facing',
      aging: 5,
      agingGroup: 'Less than 1 year',
    },
    {
      employeeId: 2,
      employeeName: 'Jane Smith',
      globalId: 1002,
      emailIds: 'jane.smith@example.com',
      localGrade: 'Mid-Level',
      globalPractise: 'Design',
      category: 'UX Designer',
      utilization: 90,
      primaryAssignment: 'Project B',
      primaryAssignmentDetail: 'UI/UX Design',
      projectCategory: 'Client Facing',
      aging: 5,
      agingGroup: 'Less than 1 year',
    },
    {
      employeeId: 2,
      employeeName: 'Jane Smith',
      globalId: 1002,
      emailIds: 'jane.smith@example.com',
      localGrade: 'Mid-Level',
      globalPractise: 'Design',
      category: 'UX Designer',
      utilization: 90,
      primaryAssignment: 'Project B',
      primaryAssignmentDetail: 'UI/UX Design',
      projectCategory: 'Client Facing',
      aging: 5,
      agingGroup: 'Less than 1 year',
    },
    {
      employeeId: 2,
      employeeName: 'Jane Smith',
      globalId: 1002,
      emailIds: 'jane.smith@example.com',
      localGrade: 'Mid-Level',
      globalPractise: 'Design',
      category: 'UX Designer',
      utilization: 90,
      primaryAssignment: 'Project B',
      primaryAssignmentDetail: 'UI/UX Design',
      projectCategory: 'Client Facing',
      aging: 5,
      agingGroup: 'Less than 1 year',
    },
    {
      employeeId: 2,
      employeeName: 'Jane Smith',
      globalId: 1002,
      emailIds: 'jane.smith@example.com',
      localGrade: 'Mid-Level',
      globalPractise: 'Design',
      category: 'UX Designer',
      utilization: 90,
      primaryAssignment: 'Project B',
      primaryAssignmentDetail: 'UI/UX Design',
      projectCategory: 'Client Facing',
      aging: 5,
      agingGroup: 'Less than 1 year',
    },
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }
}
