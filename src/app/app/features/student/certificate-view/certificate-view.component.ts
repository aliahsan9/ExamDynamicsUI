import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentPerformanceService } from '../../../core/services/student-performance.service';
import { CertificateData } from '../../../../models/student-performance.model';

@Component({
  selector: 'app-certificate-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './certificate-view.component.html',
  styleUrls: ['./certificate-view.component.scss']
})
export class CertificateViewComponent implements OnInit {
  data: CertificateData | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private performance: StudentPerformanceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('attemptId'));
    if (!id) {
      this.error = 'Invalid certificate.';
      this.loading = false;
      return;
    }
    this.performance.getCertificate(id).subscribe({
      next: (d) => {
        this.data = d;
        this.loading = false;
      },
      error: () => {
        this.error = 'Certificate not found or you do not have access.';
        this.loading = false;
      }
    });
  }

  print(): void {
    window.print();
  }
}
