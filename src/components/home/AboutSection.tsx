import { Ship, Users, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Happy Travelers', value: '50k+' },
    { label: 'Tour Destinations', value: '100+' },
    { label: 'Customer Support', value: '24/7' },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1482927/pexels-photo-1482927.jpeg?auto=compress&cs=tinysrgb&w=1260"
              alt="Person skiing on snowy mountain" 
              className="rounded-lg shadow-lg object-cover h-[600px] w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-lg shadow-xl hidden md:block">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-primary-950">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About Wanderlust</h2>
            <p className="text-gray-600 mb-6">
              Since 2010, Travanta has been crafting unforgettable travel experiences for adventurers from around the world. What started as a passion project has grown into a company that serves thousands of travelers each year.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is simple: to transform ordinary trips into extraordinary experiences. We believe in creating meaningful connections with diverse cultures, cuisines, landscapes, and traditions.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                  <Ship className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Safe and Secure</h3>
                  <p className="text-gray-600 text-sm">Travel with complete peace of mind, with thoroughly vetted accommodations and transportation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Guides</h3>
                  <p className="text-gray-600 text-sm">Our knowledgeable guides bring destinations to life with insider knowledge.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personalized Service</h3>
                  <p className="text-gray-600 text-sm">Every itinerary is tailored to your travel needs for a truly personalized experience.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Best Price Guarantee</h3>
                  <p className="text-gray-600 text-sm">Found a better price? We'll match it and give you 5% off your next booking.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;