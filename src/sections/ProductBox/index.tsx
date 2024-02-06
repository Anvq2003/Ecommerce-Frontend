import productImage from '@/assets/images/product.png';
import ProductList from '@/components/ProductList';
import { IProductItem } from '@/components/ProductList/components/ProductItem';
import { IBaseSection, IGrid } from '@/shared/types';

import FilterBox from './components/FilterBox';

interface IProductBoxProps {
  title: string;
  grid: IGrid;
  href?: any;
  filter: boolean;
}

export default function ProductBox({ value }: IBaseSection<IProductBoxProps>) {
  const { title, grid, filter } = value;
  const array: IProductItem[] = [
    {
      urlImage: productImage,
      name: 'name product 1  name product 1  name product 1name product 1  name product 1  name product 1 name product 1  name product 1  name product 1  ',
      category: 'category',
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: 'name product 2 ',
      category: 'category',
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: 'name product 3 ',
      category: 'category',
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: 'name product4 ',
      category: 'category',
      price: 123,
      star: 4,
    },
    {
      urlImage: productImage,
      name: 'name product 5 ',
      category: 'category',
      price: 123,
      star: 4,
    },
  ];

  return (
    <section aria-label="Product Box">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        {filter && <FilterBox />}
      </div>
      <ProductList products={array} grid={grid} />
    </section>
  );
}
