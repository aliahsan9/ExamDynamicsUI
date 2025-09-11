import { Routes } from '@angular/router';
import { HomeComponent } from './app/features/dashboard/home/home.component';
import { LoginComponent } from './app/features/auth/login/login.component';
import { AdminComponent } from './app/features/admin/admin/admin.component';
import { RegisterComponent } from './app/features/auth/register/register.component';
import { authGuard } from './app/core/guards/auth.guard';
import { adminGuard } from './app/core/guards/admin.guard';
import { AboutComponent } from './app/features/dashboard/about/about.component';
import { ManageExamsComponent } from './app/features/admin/manage-exams/manage-exams.component';
import { ManageBlogsComponent } from './app/features/admin/manage-blogs/manage-blogs.component';
import { SingleBlogComponent } from './app/features/blogs/single-blog/single-blog.component';
import { ExamDetailComponent } from './app/features/exams/exam-detail/exam-detail.component';
import { ManageQuizComponent } from './app/features/admin/manage-quiz/manage-quiz.component';
import { ManageQuestionsComponent } from './app/features/admin/manage-questions/manage-questions.component';
import { ManageChemistryComponent } from './app/features/admin/manage-chemistry/manage-chemistry.component';
import { ManageMathComponent } from './app/features/admin/manage-math/manage-math.component';
import { ManagePhysicsComponent } from './app/features/admin/manage-physics/manage-physics.component';
import { ManageBiologyComponent } from './app/features/admin/manage-biology/manage-biology.component';
import { ContactComponent } from './app/features/dashboard/contact/contact.component';
import { ManageDataAnalysisComponent } from './app/features/admin/sat/manage-data-analysis/manage-data-analysis.component';
import { ManageGrammerComponent } from './app/features/admin/sat/manage-grammer/manage-grammer.component';
import { ManageAlgebraComponent } from './app/features/admin/sat/manage-algebra/manage-algebra.component';
import { ManageGeometryComponent } from './app/features/admin/sat/manage-geometry/manage-geometry.component';
import { ManageReadingWritingComponent } from './app/features/admin/sat/manage-reading-writing/manage-reading-writing.component';
import { SatDetailComponent } from './app/features/sat/sat-detail/sat-detail.component';
import { ProfileComponent } from './app/features/dashboard/profile/profile.component';
import { ProfileSettingComponent } from './app/features/dashboard/profile-setting/profile-setting.component';
import { PrivacyPolicyComponent } from './app/features/dashboard/privacy-policy/privacy-policy.component';
import { FaqComponent } from './app/features/dashboard/faq/faq.component';
import { SubscriptionListComponent } from './app/features/subscriptions/subscription-list/subscription-list.component';
import { SingleExamComponent } from './app/features/exams/single-exam/single-exam.component';
import { MdcatComponent } from './app/features/blogs/mdcat/mdcat.component';
import { EcatComponent } from './app/features/blogs/ecat/ecat.component';
import { SatComponent } from './app/features/blogs/sat/sat.component';
import { IletsComponent } from './app/features/blogs/ilets/ilets.component';
import { GreComponent } from './app/features/blogs/gre/gre.component';
import { GmatComponent } from './app/features/blogs/gmat/gmat.component';
import { CssComponent } from './app/features/blogs/css/css.component';
import { AllBlogsComponent } from './app/features/blogs/all-blogs/all-blogs.component';
import { EcatQuizComponent } from './app/features/Quiz/ecat-quiz/ecat-quiz.component';
import { MdcatQuizComponent } from './app/features/Quiz/mdcat-quiz/mdcat-quiz.component';
import { NotesComponent } from './app/features/Notes/notes/notes.component';

export const routes: Routes = [
  // ✅ Public routes
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-setting', component: ProfileSettingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'subscribe', component: SubscriptionListComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'blogs', component: AllBlogsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'mdcat-blog', component: MdcatComponent },
  { path: 'ecat-blog', component: EcatComponent },
  { path: 'sat-blog', component: SatComponent },
  { path: 'ilets-blog', component: IletsComponent },
  { path: 'gre-blog', component: GreComponent },
  { path: 'gmat-blog', component: GmatComponent },
  { path: 'css-blog', component: CssComponent },
    { path: 'blog/:id', component: SingleBlogComponent },
    { path: 'exams', component: ExamDetailComponent },
    { path: 'exam/:id', component: SingleExamComponent },
    { path: 'ecat-quiz', component: EcatQuizComponent },
    { path: 'mdcat-quiz', component: MdcatQuizComponent },

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

  //Users SAT router
  {path: 'sat-detail', component:SatDetailComponent},

  // ✅ Normal user dashboard (any logged-in user)
  { path: 'dashboard', component: HomeComponent, canActivate: [authGuard] },

  // ✅ Admin-only dashboard
  // { path: 'admin', component: AdminComponent, canActivate: [authGuard, adminGuard] },
  { path: 'admin', component: AdminComponent},

  // ✅ Wildcard redirect for unknown routes
  { path: '**', redirectTo: '' }
];
