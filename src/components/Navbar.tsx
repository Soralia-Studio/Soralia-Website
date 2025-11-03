'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Soralia
        </Link>
        <div className="flex space-x-6">
          <NavLink href="/" active={pathname === '/'}>
            Home
          </NavLink>
          <NavLink href="/tournaments" active={pathname.startsWith('/tournaments')}>
            Tournaments
          </NavLink>
          <NavLink href="/staff" active={pathname === '/staff'}>
            Staff
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

type NavLinkProps = {
  href: string;
  active: boolean;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, active, children }) => {
  return (
    <Link
      href={href}
      className={`transition duration-200 px-3 py-2 rounded-md ${active
          ? 'bg-blue-800 font-medium'
          : 'hover:bg-blue-800'
        }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
