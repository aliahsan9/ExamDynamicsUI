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
import { QuestionComponent } from './app/features/questions/question/question.component';
import { ManageQuestionsComponent } from './app/features/admin/manage-questions/manage-questions.component';
import { SingleQuizComponent } from './app/features/Quiz/single-quiz/single-quiz.component';
import { ExamBioComponent } from './app/features/exams/exam-bio/exam-bio.component';
import { ManageChemistryComponent } from './app/features/admin/manage-chemistry/manage-chemistry.component';
import { ManageMathComponent } from './app/features/admin/manage-math/manage-math.component';
import { ManagePhysicsComponent } from './app/features/admin/manage-physics/manage-physics.component';
import { ExamPhysicsComponent } from './app/features/exams/exam-physics/exam-physics.component';
import { ExamMathComponent } from './app/features/exams/exam-math/exam-math.component';
import { ExamChemistryComponent } from './app/features/exams/exam-chemistry/exam-chemistry.component';
import { ManageBiologyComponent } from './app/features/admin/manage-biology/manage-biology.component';
import { ContactComponent } from './app/features/dashboard/contact/contact.component';
import { ManageDataAnalysisComponent } from './app/features/admin/sat/manage-data-analysis/manage-data-analysis.component';
import { ManageGrammerComponent } from './app/features/admin/sat/manage-grammer/manage-grammer.component';
import { ManageAlgebraComponent } from './app/features/admin/sat/manage-algebra/manage-algebra.component';
import { ManageGeometryComponent } from './app/features/admin/sat/manage-geometry/manage-geometry.component';
import { ManageReadingWritingComponent } from './app/features/admin/sat/manage-reading-writing/manage-reading-writing.component';
import { GrammerExamComponent } from './app/features/sat/grammer-exam/grammer-exam.component';
import { ReadingWritingExamComponent } from './app/features/sat/reading-writing-exam/reading-writing-exam.component';
import { GeometryExamComponent } from './app/features/sat/geometry-exam/geometry-exam.component';
import { DataAnalysisExamComponent } from './app/features/sat/data-analysis-exam/data-analysis-exam.component';
import { AlgebraExamComponent } from './app/features/sat/algebra-exam/algebra-exam.component';
import { SatDetailComponent } from './app/features/sat/sat-detail/sat-detail.component';

export const routes: Routes = [
  // ✅ Public routes
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs', component: BlogDetailComponent },
    { path: 'blog/:id', component: SingleBlogComponent },
    { path: 'exams', component: ExamDetailComponent },
    { path: 'exam-bio', component: ExamBioComponent },
    { path: 'exam-chemistry', component: ExamChemistryComponent },
    { path: 'exam-math', component: ExamMathComponent },
    { path: 'exam-physics', component: ExamPhysicsComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'question', component: QuestionComponent },
      { path: 'quiz/:examId', component: ExamBioComponent },

      //Public SAT routes
      {path: 'sat-detail', component: SatDetailComponent},
      {path: 'grammer', component: GrammerExamComponent},
      {path: 'reading-writing', component: ReadingWritingExamComponent},
      {path: 'geometry', component: GeometryExamComponent},
      {path: 'algebra', component: AlgebraExamComponent},
      {path: 'data-analysis', component: DataAnalysisExamComponent},

  //Admin paths
  {path: 'manage-exams', component: ManageExamsComponent},
  {path: 'manage-blogs', component: ManageBlogsComponent},
  {path: 'manage-quiz', component: ManageQuizComponent},
  {path: 'manage-questions', component: ManageQuestionsComponent},
  {path: 'manage-biology', component: ManageBiologyComponent},
  {path: 'manage-chemistry', component: ManageChemistryComponent},
  {path: 'manage-math', component: ManageMathComponent},
  {path: 'manage-physics', component: ManagePhysicsComponent},

  //Admin SAT paths
  {path: 'manage-data-analysis', component: ManageDataAnalysisComponent},
  {path: 'manage-grammer', component: ManageGrammerComponent},
  {path: 'manage-algebra', component: ManageAlgebraComponent},
  {path: 'manage-geometry', component: ManageGeometryComponent},
  {path: 'manage-reading-writing', component: ManageReadingWritingComponent},
  

  // ✅ Normal user dashboard (any logged-in user)
  { path: 'dashboard', component: HomeComponent, canActivate: [authGuard] },

  // ✅ Admin-only dashboard
  // { path: 'admin', component: AdminComponent, canActivate: [authGuard, adminGuard] },
  { path: 'admin', component: AdminComponent},

  // ✅ Wildcard redirect for unknown routes
  { path: '**', redirectTo: '' }
];
