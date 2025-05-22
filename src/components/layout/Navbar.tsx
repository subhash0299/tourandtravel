import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  // Handle scroll events to change navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const navbarClass = isScrolled
    ? 'bg-white shadow-md py-3'
    : 'bg-transparent py-4';

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-secondary-500' 
        : isScrolled 
          ? 'text-gray-700 hover:text-secondary-500' 
          : 'text-white hover:text-secondary-300'
    }`;

  const logoClass = isScrolled
    ? 'text-gray-700'
    : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Globe className={`h-8 w-8 ${logoClass}`} />
          <span className={`text-xl font-bold ${logoClass}`}>Travanta</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/destinations" className={navLinkClass}>Destinations</NavLink>
          <NavLink to="/flights" className={navLinkClass}>Flights</NavLink>
          <NavLink to="/buses" className={navLinkClass}>Buses</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/bookings" className="btn-primary">
            My Bookings
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-blue'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <NavLink to="/" className="font-medium text-gray-700 hover:text-secondary-500" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/destinations" className="font-medium text-gray-700 hover:text-secondary-500" onClick={closeMenu}>Destinations</NavLink>
            <NavLink to="/flights" className="font-medium text-gray-700 hover:text-secondary-500" onClick={closeMenu}>Flights</NavLink>
            <NavLink to="/buses" className="font-medium text-gray-700 hover:text-secondary-500" onClick={closeMenu}>Buses</NavLink>
            <NavLink to="/about" className="font-medium text-gray-700 hover:text-secondary-500" onClick={closeMenu}>About</NavLink>
            <NavLink to="/contact" className="font-medium text-gray-700 hover:text-secondary-500" onClick={closeMenu}>Contact</NavLink>
            <Link to="/bookings" className="btn-primary w-full text-center" onClick={closeMenu}>My Bookings</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;