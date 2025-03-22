import Link from 'next/link';
import NavLink from './NavLink';

const Header: React.FC = () => {
  return (
    <header className='px-4 py-4 flex justify-between items-center'>
      <p className='text-gray-400'>Craig Clayton</p>
      <div>
        <NavLink
          href='/about'
          activeClassName='bg-blue-500 text-white'
          nonActiveClassName='text-gray-600 hover:text-blue-500'
          className='px-4 py-2 rounded-md transition-all duration-200'
        >
          About Me
        </NavLink>

        <NavLink
          href='/contact'
          activeClassName='bg-blue-500 text-white'
          nonActiveClassName='text-gray-600 hover:text-blue-500'
          className='px-4 py-2 rounded-md transition-all duration-200'
        >
          Contact Me
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
