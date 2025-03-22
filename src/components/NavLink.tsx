'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  activeClassName: string;
  nonActiveClassName: string;
  className?: string;
  rest?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const NavLink = ({
  children,
  href,
  activeClassName,
  nonActiveClassName,
  className = '',
  ...rest
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const newClassName = `${
    isActive ? activeClassName : nonActiveClassName
  } ${className}`;

  return (
    <Link href={href} className={newClassName} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
