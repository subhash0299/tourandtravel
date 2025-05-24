import { useState } from 'react';
import { Calendar, MapPin, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

type SearchType = 'destination' | 'flight' | 'bus';
type FlightType = 'one-way' | 'round-trip';

const popularCities = [
  'Delhi',
  'Mumbai', 
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Ahmedabad',
  'Pune',
  'Jaipur',
  'Goa'
];

const SearchForm = ({ defaultType = 'destination' }: { defaultType?: SearchType }) => {
  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [flightType, setFlightType] = useState<FlightType>('one-way');
  
  const navigate = useNavigate();

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = format(new Date(), 'yyyy-MM-dd');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create query params
    const params = new URLSearchParams();
    
    if (defaultType === 'destination') {
      params.append('query', destination);
      navigate(`/destinations?${params.toString()}`);
    } else if (defaultType === 'flight') {
      params.append('origin', origin);
      params.append('destination', destination);
      params.append('departureDate', departureDate);
      params.append('returnDate', returnDate || '');
      params.append('travelers', travelers.toString());
      params.append('flightType', flightType);
      navigate(`/flights?${params.toString()}`);
    } else if (defaultType === 'bus') {
      params.append('origin', origin);
      params.append('destination', destination);
      params.append('departureDate', departureDate);
      params.append('travelers', travelers.toString());
      navigate(`/buses?${params.toString()}`);
    }
  };

  const handleCitySelect = (city: string, type: 'origin' | 'destination') => {
    if (type === 'origin') {
      setOrigin(city);
      setShowOriginDropdown(false);
    } else {
      setDestination(city);
      setShowDestinationDropdown(false);
    }
  };
  
  // Close dropdowns when clicking outside
  const handleClickOutside = () => {
    setShowOriginDropdown(false);
    setShowDestinationDropdown(false);
  };

  // Handle departure date change
  const handleDepartureDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDepartureDate = e.target.value;
    setDepartureDate(newDepartureDate);
    
    // If return date is before new departure date, reset it
    if (returnDate && returnDate < newDepartureDate) {
      setReturnDate('');
    }
  };
  
  return (
    <div onClick={handleClickOutside}>
      <form onSubmit={handleSubmit}>
        {defaultType === 'destination' ? (
          <div className="mb-4">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
              Where to?
            </label>
            <div className="relative">
              <input 
                type="text"
                id="destination"
                className="input pl-10"
                placeholder="Search destinations..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onFocus={(e) => {
                  e.stopPropagation();
                  setShowDestinationDropdown(true);
                }}
                required
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              {showDestinationDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                  {popularCities.map((city) => (
                    <button
                      key={city}
                      type="button"
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCitySelect(city, 'destination');
                      }}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {defaultType === 'flight' && (
              <div className="mb-4">
                <div className="flex bg-gray-100 p-1 rounded-lg w-fit">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      flightType === 'one-way'
                        ? 'bg-white text-primary-950 shadow-sm'
                        : 'text-gray-600 hover:text-primary-950'
                    }`}
                    onClick={() => setFlightType('one-way')}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      flightType === 'round-trip'
                        ? 'bg-white text-primary-950 shadow-sm'
                        : 'text-gray-600 hover:text-primary-950'
                    }`}
                    onClick={() => setFlightType('round-trip')}
                  >
                    Round Trip
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
                  From
                </label>
                <div className="relative">
                  <input 
                    type="text"
                    id="origin"
                    className="input pl-10"
                    placeholder="City or airport"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    onFocus={(e) => {
                      e.stopPropagation();
                      setShowOriginDropdown(true);
                    }}
                    required
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  {showOriginDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                      {popularCities.map((city) => (
                        <button
                          key={city}
                          type="button"
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCitySelect(city, 'origin');
                          }}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  To
                </label>
                <div className="relative">
                  <input 
                    type="text"
                    id="destination"
                    className="input pl-10"
                    placeholder="City or airport"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    onFocus={(e) => {
                      e.stopPropagation();
                      setShowDestinationDropdown(true);
                    }}
                    required
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  {showDestinationDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
                      {popularCities.map((city) => (
                        <button
                          key={city}
                          type="button"
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCitySelect(city, 'destination');
                          }}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Departure
                </label>
                <div className="relative">
                  <input 
                    type="date"
                    id="departureDate"
                    className="input pl-10"
                    value={departureDate}
                    onChange={handleDepartureDateChange}
                    min={today}
                    required
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              {(defaultType === 'flight' && flightType === 'round-trip') && (
                <div>
                  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Return
                  </label>
                  <div className="relative">
                    <input 
                      type="date"
                      id="returnDate"
                      className="input pl-10"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      min={departureDate || today}
                      required={flightType === 'round-trip'}
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
                Travelers
              </label>
              <select
                id="travelers"
                className="input"
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Traveler' : 'Travelers'}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
        
        <button 
          type="submit" 
          className="btn-primary w-full py-3 justify-center"
        >
          <Search size={18} className="mr-2" />
          Search {defaultType === 'destination' ? 'Destinations' : defaultType === 'flight' ? 'Flights' : 'Buses'}
        </button>
      </form>
    </div>
  );
};

export default SearchForm;