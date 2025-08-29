export interface RegisterDto {
  username: string;
  email: string;
  fullName: string;
  password: string;
  role?: string; // default 'Student'
}
