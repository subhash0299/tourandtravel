import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Plane, Filter, AlertCircle, Clock, Star, ArrowRight } from 'lucide-react';
import SearchForm from '../components/shared/SearchForm';
import { format } from 'date-fns';

interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  origin: string;
  destination: string;
  duration: string;
  price: number;
  seatsAvailable: number;
  cabin: string;
}

const FlightBooking = () => {
  const [searchParams] = useSearchParams();
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [cabinType, setCabinType] = useState<string>('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  
  // Get search params
  const origin = searchParams.get('origin') || '';
  const destination = searchParams.get('destination') || '';
  const departureDate = searchParams.get('departureDate') || '';
  const returnDate = searchParams.get('returnDate') || '';
  const travelers = Number(searchParams.get('travelers') || '1');
  
  useEffect(() => {
    document.title = 'Flight Booking | Travanta';
  }, []);
  
  useEffect(() => {
    if (origin && destination && departureDate) {
      searchFlights();
    }
  }, [origin, destination, departureDate]);
  
  const searchFlights = async () => {
    try {
      setLoading(true);
      setError('');
      
      // For demo, we'll use mock data from our in-memory database
      const response = await fetch('http://localhost:8000/api/flights/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin,
          destination,
          date: departureDate,
          return_date: returnDate,
          travelers
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setFlights(data);
        
        // Set price range based on available flights
        if (data.length > 0) {
          const prices = data.map((flight: Flight) => flight.price);
          const minPrice = Math.min(...prices);
          const maxPrice = Math.max(...prices);
          setPriceRange([minPrice, maxPrice]);
        }
        
        // Get unique airlines
        const airlines = [...new Set(data.map((flight: Flight) => flight.airline))];
        setSelectedAirlines(airlines);
      } else {
        setError('Failed to fetch flights');
      }
    } catch (err) {
      setError('An error occurred while searching for flights');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  // Filter flights based on selected filters
  const filteredFlights = flights.filter(flight => {
    const matchesAirline = selectedAirlines.length === 0 || selectedAirlines.includes(flight.airline);
    const matchesCabin = cabinType === 'all' || flight.cabin === cabinType;
    const matchesPrice = flight.price >= priceRange[0] && flight.price <= priceRange[1];
    
    return matchesAirline && matchesCabin && matchesPrice;
  });
  
  // Get unique airlines for filter
  const uniqueAirlines = [...new Set(flights.map(flight => flight.airline))];
  const cabinTypes = ['all', 'Economy', 'Premium Economy', 'Business', 'First'];
  
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
            backgroundImage: "url('https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=1260')",
          }}
        ></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Flights
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Find and book the best deals on flights worldwide
          </p>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="py-8 bg-white shadow-md sticky top-16 z-20">
        <div className="container">
          <div className="bg-white p-6 rounded-lg">
            <SearchForm defaultType="flight" />
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
                
                {/* Airlines Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Airlines</h3>
                  {uniqueAirlines.map(airline => (
                    <div key={airline} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`airline-${airline}`}
                        checked={selectedAirlines.includes(airline)}
                        onChange={() => {
                          if (selectedAirlines.includes(airline)) {
                            setSelectedAirlines(selectedAirlines.filter(a => a !== airline));
                          } else {
                            setSelectedAirlines([...selectedAirlines, airline]);
                          }
                        }}
                        className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`airline-${airline}`} className="ml-2 text-sm text-gray-700">
                        {airline}
                      </label>
                    </div>
                  ))}
                </div>
                
                {/* Cabin Type Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Cabin Type</h3>
                  {cabinTypes.map(type => (
                    <div key={type} className="flex items-center mb-2">
                      <input
                        type="radio"
                        id={`cabin-${type}`}
                        name="cabinType"
                        checked={cabinType === type}
                        onChange={() => setCabinType(type)}
                        className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300 rounded-full"
                      />
                      <label htmlFor={`cabin-${type}`} className="ml-2 text-sm text-gray-700">
                        {type === 'all' ? 'All Cabin Types' : type}
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
                    min={Math.min(...flights.map(f => f.price))}
                    max={Math.max(...flights.map(f => f.price))}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
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
              ) : filteredFlights.length > 0 ? (
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-bold">{origin} to {destination}</h2>
                        <p className="text-gray-600 text-sm">{formattedDepartureDate} · {travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}</p>
                      </div>
                      <p className="text-sm text-gray-600">{filteredFlights.length} flights found</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {filteredFlights.map(flight => (
                      <div key={flight.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Flight header */}
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                          <div className="flex items-center">
                            <Plane className="h-5 w-5 text-secondary-500 mr-2" />
                            <div>
                              <p className="font-semibold">{flight.airline}</p>
                              <p className="text-sm text-gray-600">{flight.flightNumber}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-accent-500 fill-accent-500 mr-1" />
                            <span className="text-sm text-gray-700">{(Math.random() * (5 - 3.5) + 3.5).toFixed(1)}</span>
                          </div>
                        </div>
                        
                        {/* Flight details */}
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div className="flex flex-col md:flex-row md:items-center">
                              <div className="text-center mb-4 md:mb-0 md:mr-8">
                                <p className="text-2xl font-bold">{flight.departureTime}</p>
                                <p className="text-sm text-gray-600">{flight.origin}</p>
                              </div>
                              
                              <div className="hidden md:block relative w-32">
                                <div className="border-t-2 border-gray-300 absolute w-full top-1/2"></div>
                                <div className="absolute -top-2 right-0 w-2 h-2 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
                              </div>
                              
                              <div className="md:hidden flex justify-center my-2">
                                <ArrowRight className="h-5 w-5 text-gray-400" />
                              </div>
                              
                              <div className="text-center mb-4 md:mb-0 md:ml-8">
                                <p className="text-2xl font-bold">{flight.arrivalTime}</p>
                                <p className="text-sm text-gray-600">{flight.destination}</p>
                              </div>
                            </div>
                            
                            <div className="text-center md:text-right">
                              <div className="flex items-center justify-center md:justify-end mb-2">
                                <Clock className="h-4 w-4 text-gray-500 mr-1" />
                                <span className="text-sm text-gray-600">{flight.duration}</span>
                              </div>
                              <p className="text-xs text-gray-500">
                                {flight.cabin} · {flight.seatsAvailable} seats left
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-100">
                            <div className="mb-4 md:mb-0">
                              <p className="text-2xl font-bold text-primary-950">${flight.price}</p>
                              <p className="text-xs text-gray-500">per person</p>
                            </div>
                            
                            <button className="btn-primary w-full md:w-auto">
                              Select Flight
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (origin || destination || departureDate) ? (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">No flights found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any flights matching your search criteria.
                  </p>
                  <p className="text-gray-600">
                    Try adjusting your search parameters or select a different date.
                  </p>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">Search for flights</h3>
                  <p className="text-gray-600">
                    Use the search form above to find available flights.
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

export default FlightBooking;