import { useState } from 'react';
import { MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import StarRating from '../ui/StarRating';
import { destinations } from '../../data/destinations';

type CategoryType = 'all' | 'adventure' | 'beach' | 'city' | 'cultural' | 'mountain' | 'spiritual';

const FeaturedDestinations = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  
  const filteredDestinations = destinations.filter(destination => 
    activeCategory === 'all' || destination.category === activeCategory
  ).slice(0, 6);
  
  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'beach', label: 'Beach' },
    { id: 'city', label: 'City' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'mountain', label: 'Mountain' },
    { id: 'spiritual', label: 'Spiritual' },
  ];
  
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="Featured Tour Packages" 
          subtitle="Explore our handpicked selection of extraordinary destinations across the globe. Each package is designed to deliver unforgettable experiences."
          centered
        />
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-950 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Destinations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="card group">
              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-secondary-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded">
                  {destination.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <StarRating rating={destination.rating} />
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-primary-950">
                    <span className="text-xl font-bold">₹{destination.price}</span>
                    <span className="text-sm text-gray-500"> / person</span>
                  </div>
                  <Link 
                    to={`/destinations/${destination.id}`} 
                    className="btn-outline text-sm py-1"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all button */}
        <div className="text-center mt-12">
          <Link to="/destinations" className="btn-primary">
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;