import { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import URL from '../../URL'

export default function Navbar() {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (isMenuOpen && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleMenuButtonClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + `/auth/logout`, { withCredentials: true });
      console.log(res)
      setUser(null);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='sticky top-0 bg-gray-100 z-50 md:px-4 shadow'>
      <div className='flex md:justify-around justify-between px-4 py-2'>
        <h2 className='md:text-3xl text-xl pt-2 font-semibold font-titleFont text-bodyColor px-2'>
          <Link to='/'>Caffeine Chronicles</Link>
        </h2>
        <div ref={menuRef}>
          <button
            className='block md:hidden pt-2 text-bodyColor'
            onClick={handleMenuButtonClick}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>

          {isMenuOpen && (
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-12 left-0 w-full bg-gray-100`}>
              <ul className='flex flex-col items-center font-titleFont gap-4 px-8 py-8 text-bodyColor cursor-pointer'>
                {!user ? <li><Link to='/login' onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                  : <li><Link to='/coffeeshops' onClick={() => setIsMenuOpen(false)}>Coffee Shops</Link></li>}

                {!user ? <li><Link to='/register' onClick={() => setIsMenuOpen(false)}>Register</Link></li>
                  : <li><Link to='/create' onClick={() => setIsMenuOpen(false)}>Create a Listing</Link></li>}
                {user && <li onClick={handleLogout}>Logout</li>}

              </ul>
            </div>
          )}
        </div>

        <ul className='hidden md:flex justify-center gap-6 text-bodyColor text-[18px] font-titleFont pt-4 '>
          {!user ? <li><Link to='/login' className='cursor-pointer font-titleFont transition-all hover:text-gray-600  '>Login</Link></li>
            : <li><Link to='/coffeeshops' className='cursor-pointer font-titleFont transition-all hover:text-gray-600  '>Coffee Shops</Link></li>}

          {!user ? <li><Link to='/register' className='cursor-pointer font-titleFont transition-all hover:text-gray-600  '>Register</Link></li>
            : <li><Link to='/create' className='cursor-pointer font-titleFont transition-all hover:text-gray-600'>Create a Listing</Link></li>}
          {user && <li onClick={handleLogout} className='cursor-pointer font-titleFont transition-all hover:text-gray-600'>Logout</li>}
        </ul>
      </div>
    </div>
  );
}