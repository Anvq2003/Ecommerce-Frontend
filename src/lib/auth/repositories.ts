import { AxiosInstance } from 'axios';
import axiosInstance from '../http/axiosInstance';
import { IUser } from './entity';

type IUserRepository = {
  create: (user: IUser) => Promise<void>;
};

export function UserRepository(axios: AxiosInstance): IUserRepository {
  return {
    create: async (user: IUser) => {
      await axios.post('/users', user);
    },
  };
}

export default UserRepository(axiosInstance);
