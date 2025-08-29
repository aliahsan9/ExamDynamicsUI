import { Routes } from '@angular/router';
import { HomeComponent } from './app/features/dashboard/home/home.component';
import { LoginComponent } from './app/features/auth/login/login.component';
import { AdminComponent } from './app/features/admin/admin/admin.component';
import { RegisterComponent } from './app/features/auth/register/register.component';
import { authGuard } from './app/core/guards/auth.guard';
import { adminGuard } from './app/core/guards/admin.guard';
import { AboutComponent } from './app/features/dashboard/about/about.component';
import { BlogDetailComponent } from './app/features/blogs/blog-detail/blog-detail.component';
import { ManageExamsComponent } from './app/features/admin/manage-exams/manage-exams.component';
import { ManageBlogsComponent } from './app/features/admin/manage-blogs/manage-blogs.component';
import { SingleBlogComponent } from './app/features/blogs/single-blog/single-blog.component';
import { ExamDetailComponent } from './app/features/exams/exam-detail/exam-detail.component';
import { QuizComponent } from './app/features/Quiz/quiz/quiz.component';
import { ManageQuizComponent } from './app/features/admin/manage-quiz/manage-quiz.component';

export const routes: Routes = [
  // ✅ Public routes
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blogs', component: BlogDetailComponent },
    { path: 'blog/:id', component: SingleBlogComponent },
    { path: 'exams', component: ExamDetailComponent },
    { path: 'quiz', component: QuizComponent },


  //Admin paths
  {path: 'manage-exams', component: ManageExamsComponent},
  {path: 'manage-blogs', component: ManageBlogsComponent},
  {path: 'manage-quiz', component: ManageQuizComponent},
  

  // ✅ Normal user dashboard (any logged-in user)
  { path: 'dashboard', component: HomeComponent, canActivate: [authGuard] },

  // ✅ Admin-only dashboard
  // { path: 'admin', component: AdminComponent, canActivate: [authGuard, adminGuard] },
  { path: 'admin', component: AdminComponent},

  // ✅ Wildcard redirect for unknown routes
  { path: '**', redirectTo: '' }
];
