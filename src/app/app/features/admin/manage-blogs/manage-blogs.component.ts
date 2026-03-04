import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { BlogService, BlogPostDto, CreateBlogPostDto, UpdateBlogPostDto } from '../../../core/services/blog.service';

@Component({
  selector: 'app-manage-blogs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, QuillModule],
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.scss']
})
export class ManageBlogsComponent implements OnInit {
  blogs: BlogPostDto[] = [];
  blogForm!: FormGroup;
  editingBlogId: number | null = null;
  showForm: boolean = false;

  thumbnailUrl: string = '';

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ header: [1, 2, 3, false] }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  constructor(private blogService: BlogService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadBlogs();
    this.initForm();
  }

  initForm(): void {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      thumbnailUrl: ['', Validators.required] // Add URL field
    });
  }

  loadBlogs(): void {
    this.blogService.getAll().subscribe({
      next: data => (this.blogs = data),
      error: err => console.error(err)
    });
  }

  openForm(blog?: BlogPostDto): void {
    if (blog) {
      this.editingBlogId = blog.blogPostId;
      this.blogForm.patchValue({
        title: blog.title,
        content: blog.content,
        thumbnailUrl: blog.thumbnailUrl || ''
      });
      this.thumbnailUrl = blog.thumbnailUrl || '';
    } else {
      this.editingBlogId = null;
      this.blogForm.reset();
      this.thumbnailUrl = '';
    }
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.blogForm.reset();
    this.thumbnailUrl = '';
  }

  saveBlog(): void {
    if (this.blogForm.invalid) return;

    const { title, content, thumbnailUrl } = this.blogForm.value;

    if (this.editingBlogId) {
      const updateDto: UpdateBlogPostDto = { title, content, thumbnailUrl };
      this.blogService.update(this.editingBlogId, updateDto).subscribe({
        next: () => {
          this.loadBlogs();
          this.closeForm();
        },
        error: err => console.error(err)
      });
    } else {
      const createDto: CreateBlogPostDto = { title, content, thumbnailUrl };
      this.blogService.create(createDto).subscribe({
        next: () => {
          this.loadBlogs();
          this.closeForm();
        },
        error: err => console.error(err)
      });
    }
  }

  deleteBlog(id: number): void {
    if (confirm('Are you sure you want to delete this blog?')) {
      this.blogService.delete(id).subscribe({
        next: () => this.loadBlogs(),
        error: err => console.error(err)
      });
    }
  }
}