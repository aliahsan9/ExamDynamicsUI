import { Component } from '@angular/core';
import { ExamDetailComponent } from "../../exams/exam-detail/exam-detail.component";
import { AboutComponent } from "../about/about.component";
import { BlogDetailComponent } from "../../blogs/blog-detail/blog-detail.component";
import { SubscriptionListComponent } from "../../subscriptions/subscription-list/subscription-list.component";


@Component({
  selector: 'app-home',
  imports: [ExamDetailComponent, AboutComponent, BlogDetailComponent, SubscriptionListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
