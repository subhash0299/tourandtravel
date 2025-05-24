import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-950/70"></div>
      </div>
      
      <div className="container relative z-10">
        {/* Logo at the top of the Hero section */}
        <img
          src="/whitelogo.PNG"
          alt="Travanta Logo"
          className="h-32 w-32 mb-8 rounded-full object-cover"
        />
              <div className="max-w-3xl fade-in">
          <span className="inline-block text-secondary-500 text-lg md:text-xl font-medium mb-4">
            Your Journey Begins Here
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Explore the World's Most
            <span className="block mt-2 text-secondary-500">Breathtaking Destinations</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
            From ancient temples to pristine beaches, Travanta will guide you through unforgettable experiences. Create memories that last a lifetime with our expertly crafted journeys.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/destinations" 
              className="btn-primary group"
            >
              Explore Destinations
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            {/*
            <Link 
              to="/about" 
              className="btn-secondary"
            >
              Learn More
            </Link>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;