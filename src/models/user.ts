export interface User {
  id: string;
  name?: string;
  email?: string;
}

export interface AdminUser extends User {
  password?: string;
}
