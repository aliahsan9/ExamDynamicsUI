import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { StudentPerformanceService } from '../../../core/services/student-performance.service';
import {
  ExamAttemptResponse,
  PerformanceChartPoint,
  PerformanceSummary,
  UserActivityItem
} from '../../../../models/student-performance.model';

Chart.register(...registerables);

@Component({
  selector: 'app-performance-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './performance-dashboard.component.html',
  styleUrls: ['./performance-dashboard.component.scss']
})
export class PerformanceDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('lineCanvas') lineCanvas?: ElementRef<HTMLCanvasElement>;

  summary: PerformanceSummary | null = null;
  attempts: ExamAttemptResponse[] = [];
  activity: UserActivityItem[] = [];
  chartPoints: PerformanceChartPoint[] = [];
  loading = true;
  chartLoading = true;
  error = '';
  lastSynced: Date | null = null;

  private chart: Chart | null = null;
  private refreshHandle: ReturnType<typeof setInterval> | null = null;

  constructor(private performance: StudentPerformanceService) {}

  ngOnInit(): void {
    this.loadAll();
    this.refreshHandle = setInterval(() => this.loadAll(), 30_000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.buildOrUpdateChart(), 0);
  }

  ngOnDestroy(): void {
    if (this.refreshHandle) clearInterval(this.refreshHandle);
    this.chart?.destroy();
  }

  refreshNow(): void {
    this.loadAll();
  }

  private loadAll(): void {
    this.performance.getSummary().subscribe({
      next: (s) => (this.summary = s),
      error: () => (this.error = 'Could not load summary.')
    });

    this.performance.getAttempts(25).subscribe({
      next: (a) => (this.attempts = a),
      error: () => {}
    });

    this.performance.getActivity(20).subscribe({
      next: (x) => (this.activity = x),
      error: () => {}
    });

    this.performance.getChart(30).subscribe({
      next: (pts) => {
        this.chartPoints = pts;
        this.chartLoading = false;
        this.lastSynced = new Date();
        this.loading = false;
        this.buildOrUpdateChart();
      },
      error: () => {
        this.chartLoading = false;
        this.loading = false;
      }
    });
  }

  private buildOrUpdateChart(): void {
    const canvas = this.lineCanvas?.nativeElement;
    if (!canvas) return;

    const labels = this.chartPoints.map((p) => p.dateLabel);
    const data = this.chartPoints.map((p) => p.averagePercentage);

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Avg. score % (per day)',
            data,
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.12)',
            fill: true,
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: '#4f46e5'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true },
          tooltip: {
            callbacks: {
              afterLabel: (ctx) => {
                const i = ctx.dataIndex;
                const p = this.chartPoints[i];
                return p ? `Attempts: ${p.attemptCount}` : '';
              }
            }
          }
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: { callback: (v) => `${v}%` }
          }
        }
      }
    };

    if (this.chart) {
      this.chart.data.labels = labels;
      const ds = this.chart.data.datasets[0];
      if (ds) ds.data = data;
      this.chart.update();
      return;
    }

    this.chart = new Chart(canvas, config);
  }
}
