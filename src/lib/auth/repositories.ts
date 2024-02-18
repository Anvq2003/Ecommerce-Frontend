import axiosInstance from '../http/axiosInstance';
import { IUser } from './entity';

type IUserRepository = {
  create: (user: IUser) => Promise<IUser>;
};

export const UserRepository: IUserRepository = {
  create: async (user: IUser) => {
    const response = await axiosInstance.post('/auth/local/register', user);
    return response.data;
  },
};
