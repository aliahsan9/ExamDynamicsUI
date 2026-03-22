export interface StudentProfile {
  id: number;
  userName: string;
  email: string;
  fullName: string;
  bio: string | null;
  institution: string | null;
  country: string | null;
  createdAt: string;
}

export interface UpdateStudentProfile {
  fullName: string;
  bio?: string | null;
  institution?: string | null;
  country?: string | null;
}
