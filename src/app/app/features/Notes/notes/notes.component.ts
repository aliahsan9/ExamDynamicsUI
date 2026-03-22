import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes',
  imports: [CommonModule, RouterModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  exams = [
    {
      title: 'MDCAT',
      badge: 'Medical',
      description: 'Well-structured notes for MDCAT to boost your medical entrance exam preparation.',
      icon: 'bi bi-journal-medical',
      link: '#'
    },
    {
      title: 'ECAT',
      badge: 'Engineering',
      description: 'Comprehensive notes for ECAT covering Physics, Chemistry, and Mathematics.',
      icon: 'bi bi-calculator',
      link: '#'
    },
    {
      title: 'SAT',
      badge: 'International',
      description: 'High-quality SAT notes for Evidence-Based Reading, Writing, and Math.',
      icon: 'bi bi-globe',
      link: '#'
    },
    {
      title: 'CSS',
      badge: 'Civil Service',
      description: 'High-quality CSS exam notes for compulsory and optional subjects.',
      icon: 'bi bi-award',
      link: '#'
    },
    {
      title: 'IELTS',
      badge: 'Language',
      description: 'Improve your IELTS prep with expert notes on Listening, Reading, Writing & Speaking.',
      icon: 'bi bi-translate',
      link: '#'
    },
    {
      title: 'GRE',
      badge: 'Graduate',
      description: 'Structured GRE notes including Verbal, Quantitative, and Analytical Writing.',
      icon: 'bi bi-book',
      link: '#'
    },
    {
      title: 'GMAT',
      badge: 'Business',
      description: 'Professional GMAT notes covering Quantitative, Verbal, and Analytical sections.',
      icon: 'bi bi-graph-up',
      link: '#'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}