import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gre-exams',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './gre-exams.component.html',
  styleUrl: './gre-exams.component.scss'
})
export class GreExamsComponent {

}
