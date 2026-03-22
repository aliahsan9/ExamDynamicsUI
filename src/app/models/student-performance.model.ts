export interface SubmitExamAttempt {
  examId: number;
  examTitle: string;
  score: number;
  totalQuestions: number;
}

export interface ExamAttemptResponse {
  id: number;
  examId: number;
  examTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAtUtc: string;
  certificateCode: string;
}

export interface PerformanceSummary {
  totalExamsCompleted: number;
  averagePercentage: number;
  bestScore: number;
  lastCompletedAtUtc: string | null;
}

export interface PerformanceChartPoint {
  dateLabel: string;
  isoDate: string;
  averagePercentage: number;
  attemptCount: number;
}

export interface UserActivityItem {
  activityType: string;
  description: string | null;
  createdAtUtc: string;
}

export interface CertificateData {
  studentName: string;
  examTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAtUtc: string;
  certificateCode: string;
}
