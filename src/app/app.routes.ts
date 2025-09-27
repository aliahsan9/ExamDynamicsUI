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
import { ExamDetailComponent } from './app/features/exams/exam-detail/exam-detail.component';
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
import { AllBlogsComponent } from './app/features/blogs/all-blogs/all-blogs.component';
import { EcatQuizComponent } from './app/features/Quiz/ecat-quiz/ecat-quiz.component';
import { MdcatQuizComponent } from './app/features/Quiz/mdcat-quiz/mdcat-quiz.component';
import { NotesComponent } from './app/features/Notes/notes/notes.component';
import { GreExamsComponent } from './app/features/GRE/gre-exams/gre-exams.component';
import { GmatExamsComponent } from './app/features/GMAT/gmat-exams/gmat-exams.component';
import { IeltsExamsComponent } from './app/features/IELTS/ielts-exams/ielts-exams.component';
import { CssExamsComponent } from './app/features/CSS/css-exams/css-exams.component';
import { ManageGreChemistryComponent } from './app/features/admin/gre/manage-gre-chemistry/manage-gre-chemistry.component';
import { ManageGrePhysicsComponent } from './app/features/admin/gre/manage-gre-physics/manage-gre-physics.component';
import { ManageGreMathComponent } from './app/features/admin/gre/manage-gre-math/manage-gre-math.component';
import { ManageVerbalReasoningComponent } from './app/features/admin/gre/manage-verbal-reasoning/manage-verbal-reasoning.component';
import { ManageQuantitativeReasoningComponent } from './app/features/admin/gre/manage-quantitative-reasoning/manage-quantitative-reasoning.component';
import { ManagePsychologyComponent } from './app/features/admin/gre/manage-psychology/manage-psychology.component';
import { AllGreExamsComponent } from './app/features/admin/gre/all-gre-exams/all-gre-exams.component';
import { AllGmatExamsComponent } from './app/features/admin/gmat/all-gmat-exams/all-gmat-exams.component';
import { ManageGmatAwaConceptsComponent } from './app/features/admin/gmat/manage-gmat-awa-concepts/manage-gmat-awa-concepts.component';
import { ManageGmatIntegratedReasoningComponent } from './app/features/admin/gmat/manage-gmat-integrated-reasoning/manage-gmat-integrated-reasoning.component';
import { ManageGmatQuantitativeReasoningComponent } from './app/features/admin/gmat/manage-gmat-quantitative-reasoning/manage-gmat-quantitative-reasoning.component';
import { ManageGmatVerbalReasoningComponent } from './app/features/admin/gmat/manage-gmat-verbal-reasoning/manage-gmat-verbal-reasoning.component';
import { AllIeltsExamsComponent } from './app/features/admin/ielts/all-ielts-exams/all-ielts-exams.component';
import { ManageIeltsListeningComponent } from './app/features/admin/ielts/manage-ielts-listening/manage-ielts-listening.component';
import { ManageIeltsReadingComponent } from './app/features/admin/ielts/manage-ielts-reading/manage-ielts-reading.component';
import { ManageIeltsWritingComponent } from './app/features/admin/ielts/manage-ielts-writing/manage-ielts-writing.component';
import { ManageIeltsSpeakingComponent } from './app/features/admin/ielts/manage-ielts-speaking/manage-ielts-speaking.component';
import { AllCssExamsComponent } from './app/features/admin/css/all-css-exams/all-css-exams.component';
import { ManageCssCurrentAffairsComponent } from './app/features/admin/css/manage-css-current-affairs/manage-css-current-affairs.component';
import { ManageCssEnglishPrecisAndCompositionComponent } from './app/features/admin/css/manage-css-english-precis-and-composition/manage-css-english-precis-and-composition.component';
import { ManageCssEnglishEssayComponent } from './app/features/admin/css/manage-css-english-essay/manage-css-english-essay.component';
import { ManageCssGeneralScienceComponent } from './app/features/admin/css/manage-css-general-science/manage-css-general-science.component';
import { ManageCssInternationalRelationsComponent } from './app/features/admin/css/manage-css-international-relations/manage-css-international-relations.component';
import { ManageCssPakistanAffairsComponent } from './app/features/admin/css/manage-css-pakistan-affairs/manage-css-pakistan-affairs.component';
import { ManageCssPoliticalScienceComponent } from './app/features/admin/css/manage-css-political-science/manage-css-political-science.component';
import { ManageCssIslamicStudiesComponent } from './app/features/admin/css/manage-css-islamic-studies/manage-css-islamic-studies.component';
import { ProgressComponent } from './app/features/dashboard/progress/progress.component';
import { ScholarshipsComponent } from './app/features/dashboard/scholarships/scholarships.component';
import { ChatComponent } from './app/features/chat/chat.component';
import { SingleBlogComponent } from './app/features/blogs/single-blog/single-blog.component';
import { LoaderComponent } from './app/shared/components/loader/loader.component';

export const routes: Routes = [
  // ✅ Public routes
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'loader', component: LoaderComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-setting', component: ProfileSettingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'scholarships', component: ScholarshipsComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'subscribe', component: SubscriptionListComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'blogs', component: AllBlogsComponent },
  { path: 'notes', component: NotesComponent },
    { path: 'blog/:id', component: SingleBlogComponent },
    { path: 'exams', component: ExamDetailComponent },
    { path: 'exam/:id', component: SingleExamComponent },
    { path: 'ecat-quiz', component: EcatQuizComponent },
    { path: 'mdcat-quiz', component: MdcatQuizComponent },
    { path: 'gre-exams', component: GreExamsComponent },
    { path: 'gmat-exams', component: GmatExamsComponent },
    { path: 'ielts-exams', component: IeltsExamsComponent },
    { path: 'css-exams', component: CssExamsComponent },

  //Admin paths
  {path: 'manage-exams', component: ManageExamsComponent},
  {path: 'manage-blogs', component: ManageBlogsComponent},
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

  // Admin GRE Paths
  {path: 'all-gre-exams', component: AllGreExamsComponent},
  {path: 'manage-gre-chemistry', component: ManageGreChemistryComponent},
  {path: 'manage-gre-physics', component: ManageGrePhysicsComponent},
  {path: 'manage-gre-math', component: ManageGreMathComponent},
  {path: 'manage-gre-psychology', component: ManagePsychologyComponent}, 
  {path: 'manage-gre-verbal-reasoning', component: ManageVerbalReasoningComponent},
  {path: 'manage-gre-quantitative-reasoning', component: ManageQuantitativeReasoningComponent},

  //Admin GMAT Paths
  {path: 'all-gmat-exams', component: AllGmatExamsComponent},
  {path: 'manage-gmat-awa-concepts', component: ManageGmatAwaConceptsComponent},
  {path: 'manage-gmat-integrated-reasoning', component: ManageGmatIntegratedReasoningComponent},
  {path: 'manage-gmat-quantitative-reasoning', component: ManageGmatQuantitativeReasoningComponent},
  {path: 'manage-gmat-verbal-reasoning', component: ManageGmatVerbalReasoningComponent},

  //Admin IELTS Paths
  {path: 'all-ielts-exams', component: AllIeltsExamsComponent},
  {path: 'manage-ielts-listening', component: ManageIeltsListeningComponent},
  {path: 'manage-ielts-reading', component: ManageIeltsReadingComponent},
  {path: 'manage-ielts-writing', component: ManageIeltsWritingComponent},
  {path: 'manage-ielts-speaking', component: ManageIeltsSpeakingComponent},

  //Admin CSS Paths
   {path: 'all-css-exams', component: AllCssExamsComponent},
   {path: 'manage-css-current-affairs', component: ManageCssCurrentAffairsComponent},
   {path: 'manage-css-english-composition', component: ManageCssEnglishPrecisAndCompositionComponent},
   {path: 'manage-css-english-essay', component: ManageCssEnglishEssayComponent},
   {path: 'manage-css-general-science', component: ManageCssGeneralScienceComponent},
   {path: 'manage-css-international-relations', component: ManageCssInternationalRelationsComponent},
   {path: 'manage-css-pakistan-affairs', component: ManageCssPakistanAffairsComponent},
   {path: 'manage-css-political-science', component: ManageCssPoliticalScienceComponent},
   {path: 'manage-css-islamic-studies', component: ManageCssIslamicStudiesComponent},
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
