import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-exam-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent implements OnInit {

  exams = [
    { 
      title: 'MDCAT', 
      desc: 'Pakistan medical students preparing for medical colleges', 
      link: '/mdcat-quiz', 
      image: 'assets/images/mdcat.png',
      tip: 'Practice past papers daily for best results!' 
    },
    { 
      title: 'ECAT', 
      desc: 'Pakistan engineering students aiming for top universities', 
      link: '/ecat-quiz', 
      image: 'assets/images/ecat.png',
      tip: 'Solve math & physics questions consistently!' 
    },
    { 
      title: 'SAT', 
      desc: 'High school students aiming for US colleges', 
      link: '/sat-detail', 
      image: 'assets/images/sat.png',
      tip: 'Work on vocabulary & problem-solving daily!' 
    },
    { 
      title: 'GRE', 
      desc: 'Graduate students preparing for Masters/PhD', 
      link: '/gre-exams', 
      image: 'assets/images/gre.jpg',
      tip: 'Focus on verbal & quantitative sections equally!' 
    },
    { 
      title: 'GMAT', 
      desc: 'MBA aspirants preparing for global business schools', 
      link: '/gmat-exams', 
      image: 'assets/images/gmat.jpg',
      tip: 'Time management is the key for GMAT success!' 
    },
    { 
      title: 'IELTS', 
      desc: 'Students & immigrants aiming for UK, Canada, Australia', 
      link: '/ielts-exams', 
      image: 'assets/images/ilets.jpg',
      tip: 'Practice listening & speaking daily!' 
    },
    { 
      title: 'CSS', 
      desc: 'Pakistan civil service aspirants', 
      link: '/css-exams', 
      image: 'assets/images/css.jpg',
      tip: 'Read current affairs and practice essays!' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }

}
