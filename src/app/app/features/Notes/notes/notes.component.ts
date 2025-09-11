import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes',
  imports:[CommonModule,RouterModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  exams = [
    {
      title: 'MDCAT',
      description: 'Get well-structured notes for MDCAT to boost your medical entrance exam preparation.',
      icon: 'bi bi-journal-medical',
      link: '#'
    },
    {
      title: 'ECAT',
      description: 'Comprehensive notes for ECAT covering Physics, Chemistry, and Mathematics.',
      icon: 'bi bi-calculator',
      link: '#'
    },
    {
      title: 'SAT',
      description: 'High-quality SAT exam notes for compulsory and optional subjects.',
      icon: 'bi bi-globe',
      link: '#'
    },
    {
      title: 'CSS',
      description: 'High-quality CSS exam notes for compulsory and optional subjects.',
      icon: 'bi bi-award',
      link: '#'
    },
    {
      title: 'IELTS',
      description: 'Improve your IELTS preparation with expert notes on Listening, Reading, Writing & Speaking.',
      icon: 'bi bi-translate',
      link: '#'
    },
    {
      title: 'GRE',
      description: 'Get structured GRE notes including Verbal, Quantitative, and Analytical Writing.',
      icon: 'bi bi-book',
      link: '#'
    },
    {
      title: 'GMAT',
      description: 'Professional GMAT notes covering Quantitative, Verbal, and Analytical sections.',
      icon: 'bi bi-graph-up',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
