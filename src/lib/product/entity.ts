import dayjs from 'dayjs';

export default class ProductEntity {
  id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  stock: number = 0;
  image: string = '';

  createdAt: string = '';
  updatedAt: string = '';

  constructor(product: Partial<ProductEntity>) {
    if (!product) return;
    Object.assign(this, product);
    this.createdAt = dayjs(this.createdAt).format('YYYY-MM-DD HH:mm:ss');
    this.updatedAt = dayjs(this.updatedAt).format('YYYY-MM-DD HH:mm:ss');
  }

  static createList(list: Partial<ProductEntity>[]) {
    if (!Array.isArray(list)) return [];
    return list.map((product) => new ProductEntity(product));
  }
}
