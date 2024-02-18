export interface IUser {
  id?: number;
  username: string;
  email: string;
  password: string;

  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
