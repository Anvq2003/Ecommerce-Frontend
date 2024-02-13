import { navBarList } from '../../data';
import { INavItem } from '../../types';
import NavItem from './components/NavItem';
interface INavListProps {
  navBarList: INavItem[];
}

export default function NavList({ navBarList }: INavListProps) {
  return (
    <nav className="">
      <ul className="flex items-center gap-main">
        {navBarList.map((item, index) => (
          <NavItem key={index} menu={item} />
        ))}
      </ul>
    </nav>
  );
}
