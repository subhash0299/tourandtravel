import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import { destinations } from '../data/destinations';
import Card from '../components/ui/Card';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating';
type CategoryType = 'all' | 'adventure' | 'beach' | 'city' | 'cultural' | 'mountain';

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    document.title = 'Destinations | Travanta';
  }, []);
  
  // Filter destinations based on search, category, price
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = searchQuery
      ? destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
      
    const matchesCategory = activeCategory === 'all' || destination.category === activeCategory;
    const matchesPrice = destination.price >= priceRange[0] && destination.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  // Sort destinations
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured - keep original order
  });
  
  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'beach', label: 'Beach' },
    { id: 'city', label: 'City' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'mountain', label: 'Mountain' },
  ];
  
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=1260')",
          }}
        ></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Amazing Destinations
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our carefully curated selection of travel experiences
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-md sticky top-16 z-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search */}
            <form onSubmit={handleSearch} className="w-full md:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="input pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </form>
            
            {/* Sort and Filter for mobile */}
            <div className="flex gap-4 md:hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-secondary flex-1"
              >
                <Filter size={18} className="mr-2" />
                Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="input flex-1"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Desktop filters */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ₹{
                      activeCategory === category.id
                        ? 'bg-primary-950 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              
              <div className="ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="input"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Mobile filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg md:hidden">
              <div className="mb-4">
                <p className="font-medium mb-2">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ₹{
                        activeCategory === category.id
                          ? 'bg-primary-950 text-white'
                          : 'bg-white text-gray-700 border border-gray-300'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">Price Range</p>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <span className="whitespace-nowrap">
                    Up to ₹{priceRange[1]}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {sortedDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedDestinations.map(destination => (
                <Card
                  key={destination.id}
                  id={destination.id}
                  image={destination.image}
                  title={destination.name}
                  location={destination.location}
                  description={destination.description}
                  price={destination.price}
                  badge={destination.category}
                  rating={destination.rating}
                  type="destination"
                  additionalInfo={
                    <div className="text-sm text-gray-600">
                      <p>Duration: {destination.duration}</p>
                    </div>
                  }
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or browse our featured destinations.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;