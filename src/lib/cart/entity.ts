import dayjs from 'dayjs';
import ProductEntity from '../product/entity';

export default class CartEntity {
  product: ProductEntity = new ProductEntity({});
  quantity: number = 1;

  createdAt: string = '';
  updatedAt: string = '';

  constructor(product: ProductEntity) {
    if (!product) return;
    Object.assign(this, product);
    this.product = new ProductEntity(product);
    const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
    this.createdAt = now;
    this.updatedAt = now;
  }
}
