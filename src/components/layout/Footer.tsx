import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div>
            {/*}
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6" />
              <span className="text-xl font-bold">Travanta</span>
            </Link>
            */}

           
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logos/whitelogo.PNG"
                alt="Travanta Logo"
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Travanta</span>
            </Link>


            <p className="text-gray-300 mb-6">
              Travel with us and experience the joy of discovery. Our expert team crafts unforgettable journeys customized to your preferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-white transition-colors">Tour Packages</Link>
              </li>
              <li>
                <Link to="/flights" className="text-gray-300 hover:text-white transition-colors">Flights</Link>
              </li>
              <li>
                <Link to="/buses" className="text-gray-300 hover:text-white transition-colors">Buses</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Travel Street, Manhattan Tower<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-secondary-500 flex-shrink-0" />
                <a href="tel:+12345678901" className="text-gray-300 hover:text-white transition-colors">+1 (234) 567-8901</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-secondary-500 flex-shrink-0" />
                <a href="mailto:info@travanta.com" className="text-gray-300 hover:text-white transition-colors">info@travanta.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for travel tips and offers</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                required
              />
              <button 
                type="submit" 
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Travanta. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;