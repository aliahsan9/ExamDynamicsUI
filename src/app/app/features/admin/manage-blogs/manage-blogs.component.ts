import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlogService, BlogPostDto, CreateBlogPostDto, UpdateBlogPostDto } from '../../../core/services/blog.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-blogs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.scss']
})
export class ManageBlogsComponent implements OnInit {
  blogs: BlogPostDto[] = [];
  blogForm!: FormGroup;
  editingBlogId: number | null = null;
  showForm: boolean = false;

  // ✅ Instead of storing File, store base64 string for thumbnailUrl
  thumbnailPreview: string | ArrayBuffer | null = null;
  thumbnailUrl: string = '';

  constructor(private blogService: BlogService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadBlogs();
    this.initForm();
  }

  // ================== Initialize form ==================
  initForm(): void {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  // ================== Fetch all blogs ==================
  loadBlogs(): void {
    this.blogService.getAll().subscribe({
      next: data => (this.blogs = data),
      error: err => console.error(err)
    });
  }

  // ================== Open form for create or edit ==================
  openForm(blog?: BlogPostDto): void {
    if (blog) {
      this.editingBlogId = blog.blogPostId;
      this.blogForm.patchValue({
        title: blog.title,
        content: blog.content
      });
      this.thumbnailPreview = blog.thumbnailUrl || null;
      this.thumbnailUrl = blog.thumbnailUrl || '';
    } else {
      this.editingBlogId = null;
      this.blogForm.reset();
      this.thumbnailPreview = null;
      this.thumbnailUrl = '';
    }
    this.showForm = true;
  }

  // ================== Close form ==================
  closeForm(): void {
    this.showForm = false;
    this.blogForm.reset();
    this.thumbnailPreview = null;
    this.thumbnailUrl = '';
  }

  // ================== Handle file selection ==================
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Convert to base64
      const reader = new FileReader();
      reader.onload = () => {
        this.thumbnailPreview = reader.result;
        this.thumbnailUrl = reader.result as string; // ✅ assign base64 as string
      };
      reader.readAsDataURL(file);
    }
  }

  // ================== Save blog (create or update) ==================
  saveBlog(): void {
    if (this.blogForm.invalid) return;

    const { title, content } = this.blogForm.value;

    if (this.editingBlogId) {
      const updateDto: UpdateBlogPostDto = {
        title,
        content,
        thumbnailUrl: this.thumbnailUrl // ✅ send string
      };
      this.blogService.update(this.editingBlogId, updateDto).subscribe({
        next: () => {
          this.loadBlogs();
          this.closeForm();
        },
        error: err => console.error(err)
      });
    } else {
      const createDto: CreateBlogPostDto = {
        title,
        content,
        thumbnailUrl: this.thumbnailUrl // ✅ send string
      };
      this.blogService.create(createDto).subscribe({
        next: () => {
          this.loadBlogs();
          this.closeForm();
        },
        error: err => console.error(err)
      });
    }
  }

  // ================== Delete blog ==================
  deleteBlog(id: number): void {
    if (confirm('Are you sure you want to delete this blog?')) {
      this.blogService.delete(id).subscribe({
        next: () => this.loadBlogs(),
        error: err => console.error(err)
      });
    }
  }
}
