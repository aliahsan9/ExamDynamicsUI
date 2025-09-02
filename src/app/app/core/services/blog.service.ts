import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

// ================== DTO Models ==================
export interface BlogPostDto {
  blogPostId: number;
  title: string;
  content: string;
  publishedAt: string; // ISO string
}

export interface CreateBlogPostDto {
  title: string;
  content: string;
}

export interface UpdateBlogPostDto {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = `${environment.apiUrl}/blogpost`;

  constructor(private http: HttpClient) {}

  // ================== GET ALL BLOGS ==================
  getAll(): Observable<BlogPostDto[]> {
    return this.http.get<BlogPostDto[]>(this.apiUrl);
  }

  // ================== GET BLOG BY ID ==================
  getById(id: number): Observable<BlogPostDto> {
    return this.http.get<BlogPostDto>(`${this.apiUrl}/${id}`);
  }

  // ================== GET PUBLISHED BLOGS ==================
  getPublished(): Observable<BlogPostDto[]> {
    return this.http.get<BlogPostDto[]>(`${this.apiUrl}/published`);
  }

  // ================== GET BLOGS BY AUTHOR ==================
  getByAuthor(authorId: number): Observable<BlogPostDto[]> {
    return this.http.get<BlogPostDto[]>(`${this.apiUrl}/author/${authorId}`);
  }

  // ================== CREATE BLOG ==================
  create(dto: CreateBlogPostDto): Observable<BlogPostDto> {
    return this.http.post<BlogPostDto>(this.apiUrl, dto);
  }

  // ================== UPDATE BLOG ==================
  update(id: number, dto: UpdateBlogPostDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, dto);
  }

  // ================== DELETE BLOG ==================
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
