export interface User {
  id: string;
  username: string;
  email: string;
  roles: string[];
}


export interface UserResponse {
  token: string;
  user: User;        // Contains id, roles, etc.
  message?: string;  // Optional success/error message
}
