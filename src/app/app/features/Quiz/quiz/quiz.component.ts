import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../core/services/quiz.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports:[CommonModule,RouterModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent  {

}
