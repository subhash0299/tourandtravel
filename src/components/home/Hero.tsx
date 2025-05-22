import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchForm from '../shared/SearchForm';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary-950 flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-950/60"></div>
      </div>
      
      <div className="container relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero content */}
          <div className="text-white max-w-2xl fade-in">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Discover The World With
              <span className="block text-secondary-500">Travanta</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Embark on unforgettable journeys to the world's most breathtaking destinations. Let us handle the details while you create memories that last a lifetime.
            </p>
            <Link 
              to="/destinations" 
              className="btn-primary group"
            >
              Explore More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
          
          {/* Search form */}
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-xl p-6 mt-8 lg:mt-0">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;