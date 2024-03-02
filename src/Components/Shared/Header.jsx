import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Container from './Container';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header>
      <Container>
        {/* wrapper for the header */}
        <div className='relative my-2 flex items-center justify-between rounded-full bg-[#001F3F] p-1 px-5 text-white'>
          {/* logo here */}
          <div>
            <span className='text-4xl font-black'>UK Logistic</span>
          </div>
          {/* nav show controller  */}
          <div onClick={() => setShowNav(!showNav)} className='block lg:hidden'>
            {showNav ? (
              <RxCross2 className='cursor-pointer text-4xl' />
            ) : (
              <TiThMenu className='cursor-pointer text-4xl' />
            )}
          </div>
          {/* nav here */}
          <nav
            className={`absolute right-0 top-16 origin-top scale-y-0 rounded-xl bg-blue-50 p-10 py-5 text-black transition-all lg:static lg:scale-y-100 lg:bg-transparent lg:p-0 lg:text-white ${
              showNav && 'scale-y-100'
            }`}
          >
            <ul className='flex flex-col gap-8 lg:flex-row'>
              <li className='text-xl font-medium hover:underline'>
                <Link to='/'>Home</Link>
              </li>
              <li className='text-xl font-medium hover:underline'>
                <Link to='/'>About</Link>
              </li>
              <li className='text-xl font-medium hover:underline'>
                <Link to='/'>Services</Link>
              </li>
              <li className='text-xl font-medium hover:underline'>
                <Link to='/'>Products</Link>
              </li>
              <li className='text-xl font-medium hover:underline'>
                <Link to='/'>Media</Link>
              </li>
              <li className='text-xl font-medium hover:underline'>
                <Link to='/'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
