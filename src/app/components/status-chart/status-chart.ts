import { Api } from '../../services/api';
import { Component, signal, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-status-chart',
  imports: [BaseChartDirective],
  templateUrl: './status-chart.html',
  styleUrl: './status-chart.css',
})
export class StatusChart {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  errorMessage = signal<string | null>(null);

  title = environment.interface.chart.title;
  lastDays = environment.interface.chart.lastDays;

  chartType: ChartType = 'bar';

  chartData: ChartConfiguration['data'] = {
    labels: environment.interface.chart.labels,
    datasets: [
      {
        label: environment.interface.chart.datasetLabel.replace('X', this.lastDays.toString()),
        data: [],
        backgroundColor: environment.interface.chart.colors
      }
    ]
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { 
        display: true,
        labels: {
          boxWidth: 0
        }
      }
    }
  };

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.loadChartData(this.lastDays);
  }

  private loadChartData(days: number) {
    this.api.getReport(days).subscribe({
      next: (res: any) => this.onDataLoaded(res),
      error: () => this.onDataError()
    });
  }

  private onDataLoaded(data: any): void {
    const labels = environment.interface.chart.labels;

    const chartValues = labels.map(label => data[label] || 0);

    this.chartData.datasets[0].data = chartValues;

    this.errorMessage.set(null);

    this.chart?.update();
  }

  private onDataError(): void {
    this.errorMessage.set(environment.common.errorMessage);
  }
}
