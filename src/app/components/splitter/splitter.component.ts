import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../dashboard/dashboard.component.service';

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.css']
})
export class SplitterComponent implements OnInit {
  public panelSizes: number[] = [17, 70];
  @Input() headers: string[] = [];
  @Input() data: Employee[] = [];
  public leftheader: string[] = [];
  public rightheader: string[] = [];
  public tableHeader: string[][] = [[]];

  constructor() { }

  ngOnInit() {
    this.leftheader = this.headers.slice(0, 2);
    this.rightheader = this.headers.slice(2);
    this.tableHeader = [this.leftheader, this.rightheader];
  }
}
