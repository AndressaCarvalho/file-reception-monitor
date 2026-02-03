import { Component, signal, OnInit, ViewChild } from '@angular/core';
import { Api } from './services/api';
import { StatusChart } from './components/status-chart/status-chart';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [StatusChart, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  data = signal<any[]>([]);
  dataSource = new MatTableDataSource<any>([]);

  errorMessage = signal<string | null>(null);

  title = environment.interface.title;
  searchConfig = environment.interface.table.search;
  tableHeaders = environment.interface.table.headers;
  displayedColumns = this.tableHeaders.map(h => h.key);
  statusColors: Record<string, string> = environment.interface.table.statusColors;

  @ViewChild(MatPaginator)
  set matPaginator(paginator: MatPaginator) {
    if (paginator) {
      this.dataSource.paginator = paginator;
    }
  }

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.configureTableFilter();
    this.loadData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getStatusClass(statusName: string | undefined): string {
    if (!statusName) return '';
    return this.statusColors[statusName] || 'bg-secondary';
  }

  private configureTableFilter(): void {
    this.dataSource.filterPredicate = (data, filter) => {
      const searchableText = `
        ${data.id}
        ${data.fileName}
        ${data.companyName}
        ${data.statusName}
        ${data.expectedDate}
      `.toLowerCase();

      return searchableText.includes(filter);
    };
  }

  private loadData(): void {
    this.api.getAll().subscribe({
      next: (res) => this.onDataLoaded(res),
      error: () => this.onDataError()
    });
  }

  private onDataLoaded(data: any[]): void {
    const cleanedData = this.normalizeData(data);
    this.data.set(cleanedData);
    this.dataSource.data = cleanedData;
    this.errorMessage.set(null);
  }

  private onDataError(): void {
    this.errorMessage.set(environment.common.errorMessage);
  }

  private normalizeData(data: any[]): any[] {
    return data.map(item => {
      return {
        id: item.id || item.Id,
        companyName: item.companyName || item.CompanyName,
        fileName: item.fileName || item.FileName,
        expectedDate: item.expectedDate || item.ExpectedDate,
        statusName: item.statusName || item.StatusName
      };
    });
  }
}