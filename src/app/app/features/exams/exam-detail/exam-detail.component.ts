import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-exam-detail',
  imports:[CommonModule,RouterModule],
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent implements OnInit {

  exams = [
    { title: 'MDCAT', desc: 'Pakistan medical students', link: '/quiz', icon: 'bi-heart-pulse' },
    { title: 'ECAT', desc: 'Pakistan engineering students', link: '/quiz', icon: 'bi-tools' },
    { title: 'SAT', desc: 'High school students (US colleges)', link: '/sat-detail', icon: 'bi-mortarboard' },
    { title: 'GRE', desc: 'Graduate students (Masters/PhD)', link: '/gre', icon: 'bi-book' },
    { title: 'GMAT', desc: 'MBA aspirants', link: '/gmat', icon: 'bi-graph-up' },
    { title: 'IELTS', desc: 'Students + Immigrants (UK, Canada, Australia)', link: '/ielts', icon: 'bi-globe' },
    { title: 'CSS', desc: 'Pakistan civil service aspirants', link: '/css', icon: 'bi-building' }
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }

}
