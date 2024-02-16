import { navBarList } from '../../data';
import NavItem from './components/NavItem';

export default function NavList() {
  return (
    <nav className="ml-36">
      <ul className="flex items-center gap-3">
        {navBarList.map((item, index) => (
          <NavItem key={index} menu={item} />
        ))}
      </ul>
    </nav>
  );
}
