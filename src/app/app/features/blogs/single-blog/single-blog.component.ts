import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService, BlogPostDto } from '../../../core/services/blog.service';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  feedback: string;
  role: string;
}

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {
  blog?: BlogPostDto;
  loading: boolean = true;

  // Extra interactive data
  quotes: string[] = [
    "Success doesn’t come to you – you go to it.",
    "Consistency is the key to mastering any skill.",
    "Learning is a treasure that follows its owner everywhere."
  ];

  timeline: string[] = [
    "Idea conceptualized",
    "Research and writing completed",
    "First draft reviewed",
    "Final article published"
  ];

  testimonials: Testimonial[] = [
    { name: 'Ali Khan', feedback: 'This blog gave me clarity on complex topics.', role: 'Student' },
    { name: 'Sara Ahmed', feedback: 'I love how interactive and easy-to-read the posts are.', role: 'Teacher' },
    { name: 'John Doe', feedback: 'Amazing insights, very practical tips!', role: 'Developer' }
  ];

  dailyChallenge: string = "Write down one new thing you learned today and explain it in your own words.";

  faqs: FAQ[] = [
    { question: "How often is new content posted?", answer: "We aim to publish 2–3 new blogs every week." },
    { question: "Can I contribute to the blog?", answer: "Yes! You can reach out via the contact page to submit guest posts." },
    { question: "Is the content free?", answer: "Absolutely. All of our blog content is free to access and share." }
  ];

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.blogService.getById(id).subscribe({
        next: (data) => {
          this.blog = data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    }
  }
}
