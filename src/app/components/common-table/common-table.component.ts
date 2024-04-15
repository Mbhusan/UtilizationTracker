import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../dashboard/dashboard.component.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() data: Employee[] = [];
  public tableHeaders: string[] = [];
  value: string | undefined;

  ngOnInit(): void {
    this.tableHeaders = this.convertHeaders(this.headers);
  }

  convertHeaders(headers: string[]): string[] {
    return headers.map(header => {
      // Split header where the word is capitalized
      return header.split(/(?=[A-Z])/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    });
  }
}
