import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Bus, Filter, AlertCircle, Clock, Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import SearchForm from '../components/shared/SearchForm';
import { format } from 'date-fns';

interface BusData {
  id: string;
  operator: string;
  busNumber: string;
  departureTime: string;
  arrivalTime: string;
  origin: string;
  destination: string;
  duration: string;
  price: number;
  seatsAvailable: number;
  busType: string;
}

const generateRandomBuses = (origin: string, destination: string, count: number = 8): BusData[] => {
  const operators = ['RedBus', 'Volvo Travels', 'SRS Travels', 'VRL Travels', 'KPN Travels'];
  const busTypes = ['Seater', 'Sleeper', 'Semi-Sleeper', 'AC', 'Non-AC'];
  const buses: BusData[] = [];

  for (let i = 0; i < count; i++) {
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const busNumber = `${operator.substring(0, 2).toUpperCase()}${100 + Math.floor(Math.random() * 900)}`;
    
    // Generate random departure time between 6 PM and 11 PM (common for overnight buses)
    const hour = 18 + Math.floor(Math.random() * 5);
    const minute = Math.floor(Math.random() * 60);
    const departureTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    
    // Random duration between 4-12 hours
    const durationHours = 4 + Math.floor(Math.random() * 8);
    const durationMinutes = Math.floor(Math.random() * 60);
    
    // Calculate arrival time
    const arrivalHour = (hour + durationHours) % 24;
    const arrivalMinute = (minute + durationMinutes) % 60;
    const arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:${arrivalMinute.toString().padStart(2, '0')}`;
    
    const busType = busTypes[Math.floor(Math.random() * busTypes.length)];
    
    // Base price between 500-2500
    let price = 500 + Math.floor(Math.random() * 2000);
    if (busType === 'Sleeper') price *= 1.3;
    if (busType === 'AC') price *= 1.5;

    buses.push({
      id: `bus-${i}`,
      operator,
      busNumber,
      departureTime,
      arrivalTime,
      origin,
      destination,
      duration: `${durationHours}h ${durationMinutes}m`,
      price: Math.round(price / 10) * 10,
      seatsAvailable: 5 + Math.floor(Math.random() * 35),
      busType
    });
  }

  return buses;
};

const BusBooking = () => {
  const [searchParams] = useSearchParams();
  const [buses, setBuses] = useState<BusData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOperators, setSelectedOperators] = useState<string[]>([]);
  const [busType, setBusType] = useState<string>('all');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [showSearchForm, setShowSearchForm] = useState(true);
  
  // Get search params
  const origin = searchParams.get('origin') || '';
  const destination = searchParams.get('destination') || '';
  const departureDate = searchParams.get('departureDate') || '';
  const travelers = Number(searchParams.get('travelers') || '1');
  
  useEffect(() => {
    document.title = 'Bus Booking | Travanta';
  }, []);
  
  useEffect(() => {
    if (origin && destination && departureDate) {
      searchBuses();
      setShowSearchForm(false);
    }
  }, [origin, destination, departureDate]);
  
  const searchBuses = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Generate random buses instead of API call
      const randomBuses = generateRandomBuses(origin, destination);
      setBuses(randomBuses);
      
      // Set price range based on available buses
      if (randomBuses.length > 0) {
        const prices = randomBuses.map(bus => bus.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        setPriceRange([minPrice, maxPrice]);
      }
      
      // Get unique operators
      const operators = [...new Set(randomBuses.map(bus => bus.operator))];
      setSelectedOperators(operators);
      
    } catch (err) {
      setError('An error occurred while searching for buses');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  // Filter buses based on selected filters
  const filteredBuses = buses.filter(bus => {
    const matchesOperator = selectedOperators.length === 0 || selectedOperators.includes(bus.operator);
    const matchesType = busType === 'all' || bus.busType === busType;
    const matchesPrice = bus.price >= priceRange[0] && bus.price <= priceRange[1];
    
    return matchesOperator && matchesType && matchesPrice;
  });
  
  // Get unique operators for filter
  const uniqueOperators = [...new Set(buses.map(bus => bus.operator))];
  const busTypes = ['all', 'Seater', 'Sleeper', 'Semi-Sleeper', 'AC', 'Non-AC'];
  
  // Format departure date for display
  const formattedDepartureDate = departureDate 
    ? format(new Date(departureDate), 'EEE, MMM d, yyyy')
    : '';
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260')",
          }}
        ></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Bus Tickets
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Convenient and comfortable bus travel across India
          </p>
        </div>
      </section>

      {/* Search Form Section */}
      <section className={`py-8 bg-white shadow-md sticky top-16 z-20 transition-all duration-300 ${showSearchForm ? 'h-auto' : 'h-16 overflow-hidden'}`}>
        <div className="container">
          <div className="flex justify-between items-center mb-4">
            {!showSearchForm && (
              <div className="text-sm text-gray-600">
                {origin} → {destination} · {formattedDepartureDate} · {travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}
              </div>
            )}
            <button
              onClick={() => setShowSearchForm(!showSearchForm)}
              className="btn-secondary ml-auto"
            >
              {showSearchForm ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className={`transition-all duration-300 ${showSearchForm ? 'opacity-100' : 'opacity-0'}`}>
            <SearchForm defaultType="bus" />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {/* Mobile filter toggle */}
          <div className="mb-6 md:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary w-full"
            >
              <Filter size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block md:col-span-1`}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Filter Results</h2>
                
                {/* Operators Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Bus Operators</h3>
                  {uniqueOperators.map(operator => (
                    <div key={operator} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`operator-${operator}`}
                        checked={selectedOperators.includes(operator)}
                        onChange={() => {
                          if (selectedOperators.includes(operator)) {
                            setSelectedOperators(selectedOperators.filter(o => o !== operator));
                          } else {
                            setSelectedOperators([...selectedOperators, operator]);
                          }
                        }}
                        className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`operator-${operator}`} className="ml-2 text-sm text-gray-700">
                        {operator}
                      </label>
                    </div>
                  ))}
                </div>
                
                {/* Bus Type Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Bus Type</h3>
                  {busTypes.map(type => (
                    <div key={type} className="flex items-center mb-2">
                      <input
                        type="radio"
                        id={`type-${type}`}
                        name="busType"
                        checked={busType === type}
                        onChange={() => setBusType(type)}
                        className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300 rounded-full"
                      />
                      <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                        {type === 'all' ? 'All Bus Types' : type}
                      </label>
                    </div>
                  ))}
                </div>
                
                {/* Price Range Filter */}
                <div>
                  <h3 className="font-semibold mb-2">Price Range</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-700">${priceRange[0]}</span>
                    <span className="text-sm text-gray-700">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min={Math.min(...buses.map(b => b.price))}
                    max={Math.max(...buses.map(b => b.price))}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0],
                    parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="md:col-span-3">
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
                </div>
              ) : error ? (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-start">
                  <AlertCircle size={20} className="mr-2 mt-0.5" />
                  <p>{error}</p>
                </div>
              ) : filteredBuses.length > 0 ? (
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-bold">{origin} to {destination}</h2>
                        <p className="text-gray-600 text-sm">{formattedDepartureDate} · {travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}</p>
                      </div>
                      <p className="text-sm text-gray-600">{filteredBuses.length} buses found</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {filteredBuses.map(bus => (
                      <div key={bus.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Bus header */}
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                          <div className="flex items-center">
                            <Bus className="h-5 w-5 text-secondary-500 mr-2" />
                            <div>
                              <p className="font-semibold">{bus.operator}</p>
                              <p className="text-sm text-gray-600">{bus.busNumber}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-accent-500 fill-accent-500 mr-1" />
                            <span className="text-sm text-gray-700">{(Math.random() * (5 - 3.5) + 3.5).toFixed(1)}</span>
                          </div>
                        </div>
                        
                        {/* Bus details */}
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div className="flex flex-col md:flex-row md:items-center">
                              <div className="text-center mb-4 md:mb-0 md:mr-8">
                                <p className="text-2xl font-bold">{bus.departureTime}</p>
                                <p className="text-sm text-gray-600">{bus.origin}</p>
                              </div>
                              
                              <div className="hidden md:block relative w-32">
                                <div className="border-t-2 border-gray-300 absolute w-full top-1/2"></div>
                                <div className="absolute -top-2 right-0 w-2 h-2 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
                              </div>
                              
                              <div className="md:hidden flex justify-center my-2">
                                <ArrowRight className="h-5 w-5 text-gray-400" />
                              </div>
                              
                              <div className="text-center mb-4 md:mb-0 md:ml-8">
                                <p className="text-2xl font-bold">{bus.arrivalTime}</p>
                                <p className="text-sm text-gray-600">{bus.destination}</p>
                              </div>
                            </div>
                            
                            <div className="text-center md:text-right">
                              <div className="flex items-center justify-center md:justify-end mb-2">
                                <Clock className="h-4 w-4 text-gray-500 mr-1" />
                                <span className="text-sm text-gray-600">{bus.duration}</span>
                              </div>
                              <p className="text-xs text-gray-500">
                                {bus.busType} · {bus.seatsAvailable} seats left
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-100">
                            <div className="mb-4 md:mb-0">
                              <p className="text-2xl font-bold text-primary-950">₹{bus.price}</p>
                              <p className="text-xs text-gray-500">per person</p>
                            </div>
                            
                            <button className="btn-primary w-full md:w-auto">
                              Select Bus
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (origin || destination || departureDate) ? (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">No buses found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any buses matching your search criteria.
                  </p>
                  <p className="text-gray-600">
                    Try adjusting your search parameters or select a different date.
                  </p>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">Search for buses</h3>
                  <p className="text-gray-600">
                    Use the search form above to find available buses.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusBooking;