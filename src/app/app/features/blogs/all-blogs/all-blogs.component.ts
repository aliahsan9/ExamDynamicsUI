import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-blogs',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss'],
})
export class AllBlogsComponent {
  searchTerm: string = '';

  blogs = [
    {
      title: 'How to Prepare for MDCAT',
      date: 'Aug 15, 2025',
      excerpt: 'A complete guide to MDCAT preparation, tips, and tricks...',
      image: 'assets/images/medical1.jpg',
      link: '/blog/1', 
    },
    {
      title: 'Ace Your ECAT Exam',
      date: 'Aug 20, 2025',
      excerpt: 'Learn how to tackle ECAT with smart strategies...',
      image: 'assets/images/ecat.jpg',
      link: '/blog/2',
    },
    {
      title: 'SAT Preparation Strategies',
      date: 'Aug 25, 2025',
      excerpt: 'Boost your SAT score with proven methods...',
      image: 'assets/images/about1.jpg',
      link: '/blog/3',
    },
   
    {
      title: 'IELTS Success Formula',
      date: 'Sep 5, 2025',
      excerpt: 'Step-by-step preparation plan for IELTS...',
      image: 'assets/images/blog1.jpg',
      link: '/blog/4',
    },
    {
      title: 'GMAT Made Easy',
      date: 'Sep 10, 2025',
      excerpt: 'Everything you need to know about GMAT prep...',
      image: 'assets/images/blog2.jpg',
      link: '/blog/5',
    },
    {
      title: 'GRE Preparation Guide',
      date: 'Sep 15, 2025',
      excerpt: 'Crack GRE with expert strategies...',
      image: 'assets/images/students.jpg',
      link: '/blog/6',
    }, 
  ];

  // ✅ Filter blogs dynamically based on search
  filteredBlogs() {
    if (!this.searchTerm) {
      return this.blogs;
    }
    return this.blogs.filter((blog) =>
      blog.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
