import Link from 'next/link';

const Header = () => {
  return (
    <header className='px-4 py-4 flex justify-between items-center'>
      <p className='text-gray-400'>Craig Clayton</p>
      <div>
        <Link href='/about'>About Me</Link>
        <Link href='/contact'>Contact Me</Link>
      </div>
    </header>
  );
};

export default Header;
