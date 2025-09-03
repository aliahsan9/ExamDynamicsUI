// UserProfileCreateDto for creating a profile
export interface UserProfileCreateDto {
  name: string;
  email: string;
  bio?: string;
}

// UserProfileUpdateDto for updating a profile
export interface UserProfileUpdateDto {
  name?: string;
  email?: string;
  bio?: string;
}

// UserProfileDto for full profile representation
export interface UserProfileDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  bio?: string;
  profilePictureUrl?: string;
  userId?: any;
}

// UserProfileReadDto for simplified read-only display
export interface UserProfileReadDto {
  id: number;
  name: string;
  email: string;
  bio?: string;
}
