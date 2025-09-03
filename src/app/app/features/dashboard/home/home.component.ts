import { Component } from '@angular/core';
import { ExamDetailComponent } from "../../exams/exam-detail/exam-detail.component";
import { AboutComponent } from "../about/about.component";
import { BlogDetailComponent } from "../../blogs/blog-detail/blog-detail.component";
import { SubscriptionListComponent } from "../../subscriptions/subscription-list/subscription-list.component";
import { AiAssistantRoutingModule } from "../../ai-assistant/ai-assistant/ai-assistant-routing.module";
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../contact/contact.component";


@Component({
  selector: 'app-home',
  imports: [ExamDetailComponent, AboutComponent, BlogDetailComponent, SubscriptionListComponent, AiAssistantRoutingModule, CommonModule, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
