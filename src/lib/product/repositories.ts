import axiosInstance from '../http/axiosInstance';
import ProductEntity from './entity';

type IUserRepository = {
  getAll: () => Promise<ProductEntity[]>;
  getById: (id: string) => Promise<ProductEntity>;
};

export const UserRepository: IUserRepository = {
  getAll: async () => {
    const { data } = await axiosInstance.get('/products');
    return ProductEntity.createList(data);
  },
  getById: async (id: string) => {
    const { data } = await axiosInstance.get(`/products/${id}`);
    return new ProductEntity(data);
  },
};
