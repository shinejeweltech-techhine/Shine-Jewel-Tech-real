import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, LogIn } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              {/* Logo Image - Make sure to add logo.png to your images folder */}
              <img 
                src="/images/logo.png" 
                alt={`${COMPANY_NAME} Logo`} 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="font-serif text-2xl font-bold tracking-wider text-gold-500">
                {COMPANY_NAME.toUpperCase()}
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-gold-500 border-b-2 border-gold-500'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Auth Buttons Desktop */}
              <div className="border-l border-slate-700 pl-8 flex items-center gap-4">
                {isAuthenticated ? (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <div className="bg-slate-800 p-1.5 rounded-full">
                        <User className="h-4 w-4 text-gold-500" />
                      </div>
                      <span className="text-sm font-medium">{user?.name}</span>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="text-gray-400 hover:text-white transition-colors"
                      title="Logout"
                    >
                      <LogOut className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Link 
                      to="/login"
                      className="text-gray-300 hover:text-white font-medium text-sm transition-colors"
                    >
                      Log in
                    </Link>
                    <Link 
                      to="/signup"
                      className="bg-gold-500 text-slate-900 hover:bg-gold-400 px-4 py-2 rounded-full text-sm font-bold transition-colors"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-gold-500 bg-slate-800'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Auth Buttons Mobile */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              {isAuthenticated ? (
                <>
                  <div className="px-3 py-2 flex items-center gap-3 text-gold-500 font-medium">
                    <User className="h-5 w-5" />
                    Hello, {user?.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-400 hover:bg-slate-800"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="space-y-2 px-3">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-2 rounded-md text-base font-medium text-slate-200 bg-slate-800 hover:bg-slate-700"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-2 rounded-md text-base font-bold text-slate-900 bg-gold-500 hover:bg-gold-400"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;