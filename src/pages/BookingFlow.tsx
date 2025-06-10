import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Clock, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  Check,
  Plane,
  Hotel
} from 'lucide-react';
import { destinations } from '../data/destinations';
import { format, addDays } from 'date-fns';

interface DayPlan {
  day: number;
  date: string;
  activities: string[];
  meals: string[];
  accommodation: string;
}

interface FlightOption {
  id: string;
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  aircraft: string;
}

interface HotelOption {
  id: string;
  name: string;
  category: string;
  rating: number;
  amenities: string[];
  description: string;
}

const BookingFlow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [tour, setTour] = useState(destinations.find(d => d.id === id));
  
  // Booking state
  const [bookingData, setBookingData] = useState({
    startingCity: '',
    departureDate: '',
    travelers: 1,
    selectedFlight: '',
    selectedHotel: '',
    totalPrice: 0
  });

  const [dayPlans, setDayPlans] = useState<DayPlan[]>([]);
  const [flightOptions, setFlightOptions] = useState<FlightOption[]>([]);
  const [hotelOptions, setHotelOptions] = useState<HotelOption[]>([]);

  const allCities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 
    'Hyderabad', 'Ahmedabad', 'Pune', 'Jaipur', 'Kochi',
    'Goa', 'Agra', 'Varanasi', 'Udaipur', 'Jodhpur',
    'Amritsar', 'Rishikesh', 'Manali', 'Shimla', 'Darjeeling'
  ];

  // Get destination city from tour location
  const getDestinationCity = () => {
    if (!tour) return '';
    
    // Extract city name from tour location
    const location = tour.location.toLowerCase();
    
    // Comprehensive mapping of tour locations to cities
    const locationToCityMap: { [key: string]: string } = {
      // States to major cities
      'rajasthan': 'Jaipur',
      'goa': 'Goa',
      'kerala': 'Kochi',
      'gujarat': 'Ahmedabad',
      'punjab': 'Amritsar',
      'uttarakhand': 'Rishikesh',
      'himachal pradesh': 'Manali',
      'west bengal': 'Kolkata',
      'tamil nadu': 'Chennai',
      'karnataka': 'Bangalore',
      'maharashtra': 'Mumbai',
      'uttar pradesh': 'Agra',
      'bihar': 'Patna',
      'odisha': 'Bhubaneswar',
      'orissa': 'Bhubaneswar',
      'sikkim': 'Gangtok',
      'ladakh': 'Leh',
      'laddakh': 'Leh',
      'andaman': 'Port Blair',
      'northeast': 'Guwahati',
      'seven sisters': 'Guwahati',
      
      // Specific cities
      'agra': 'Agra',
      'varanasi': 'Varanasi',
      'udaipur': 'Udaipur',
      'jaipur': 'Jaipur',
      'mumbai': 'Mumbai',
      'delhi': 'Delhi',
      'bangalore': 'Bangalore',
      'bengaluru': 'Bangalore',
      'chennai': 'Chennai',
      'kolkata': 'Kolkata',
      'hyderabad': 'Hyderabad',
      'pune': 'Pune',
      'ahmedabad': 'Ahmedabad',
      'amritsar': 'Amritsar',
      'rishikesh': 'Rishikesh',
      'manali': 'Manali',
      'shimla': 'Shimla',
      'darjeeling': 'Darjeeling',
      'jodhpur': 'Jodhpur',
      'kochi': 'Kochi',
      'mysuru': 'Mysuru',
      'mysore': 'Mysuru',
      'ooty': 'Coimbatore',
      'nainital': 'Delhi',
      'kasol': 'Chandigarh',
      'lansdowne': 'Delhi',
      'wayanad': 'Kochi',
      'kedarnath': 'Delhi',
      'dwarka': 'Ahmedabad',
      'shirdi': 'Mumbai',
      'ayodhya': 'Lucknow',
      'rameshwaram': 'Chennai',
      'golden temple': 'Amritsar',
      'maldives': 'Kochi', // Closest Indian city for international destination
      'himalayan': 'Delhi'
    };

    // Check if location contains any of the mapped cities/states
    for (const [key, city] of Object.entries(locationToCityMap)) {
      if (location.includes(key)) {
        return city;
      }
    }

    // If no specific mapping found, try to find a matching city in the location string
    const foundCity = allCities.find(city => 
      location.includes(city.toLowerCase())
    );
    
    // If still no match, try to extract from tour name
    if (!foundCity && tour.name) {
      const tourName = tour.name.toLowerCase();
      for (const [key, city] of Object.entries(locationToCityMap)) {
        if (tourName.includes(key)) {
          return city;
        }
      }
      
      // Check tour name against cities
      const cityFromName = allCities.find(city => 
        tourName.includes(city.toLowerCase())
      );
      if (cityFromName) return cityFromName;
    }
    
    return foundCity || 'Delhi'; // Default fallback to Delhi instead of Jaipur
  };

  // Filter cities to exclude destination city
  const getAvailableCities = () => {
    const destinationCity = getDestinationCity();
    return allCities.filter(city => city !== destinationCity);
  };

  // Generate flight options
  const generateFlightOptions = (origin: string, destination: string): FlightOption[] => {
    const airlines = ['IndiGo', 'Air India', 'Vistara', 'SpiceJet', 'AirAsia'];
    const aircraftTypes = ['Airbus A320', 'Boeing 737', 'ATR 72', 'Embraer E190'];
    
    return airlines.map((airline, index) => {
      const hour = 6 + (index * 2);
      const departureTime = `${hour.toString().padStart(2, '0')}:${(index * 15).toString().padStart(2, '0')}`;
      const duration = `${1 + index}h ${30 + (index * 10)}m`;
      const arrivalHour = (hour + 1 + index) % 24;
      const arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:${((index * 15) + 30).toString().padStart(2, '0')}`;
      
      return {
        id: `flight-${index}`,
        airline,
        flightNumber: `${airline.substring(0, 2).toUpperCase()}${100 + index}`,
        departureTime,
        arrivalTime,
        duration,
        aircraft: aircraftTypes[index % aircraftTypes.length]
      };
    });
  };

  // Generate hotel options
  const generateHotelOptions = (): HotelOption[] => {
    return [
      {
        id: 'hotel-1',
        name: 'Luxury Heritage Resort',
        category: '5-Star',
        rating: 4.8,
        amenities: ['Pool', 'Spa', 'Restaurant', 'Gym', 'WiFi', 'Room Service'],
        description: 'Experience luxury with traditional architecture and modern amenities.'
      },
      {
        id: 'hotel-2',
        name: 'Premium Business Hotel',
        category: '4-Star',
        rating: 4.5,
        amenities: ['Restaurant', 'Gym', 'WiFi', 'Business Center', 'Room Service'],
        description: 'Modern comfort with excellent business facilities and city views.'
      },
      {
        id: 'hotel-3',
        name: 'Boutique Cultural Stay',
        category: '4-Star',
        rating: 4.6,
        amenities: ['Restaurant', 'Cultural Tours', 'WiFi', 'Garden', 'Local Cuisine'],
        description: 'Immerse yourself in local culture with authentic hospitality.'
      },
      {
        id: 'hotel-4',
        name: 'Comfort Inn & Suites',
        category: '3-Star',
        rating: 4.2,
        amenities: ['Restaurant', 'WiFi', 'Parking', 'Laundry'],
        description: 'Clean, comfortable accommodation with essential amenities.'
      }
    ];
  };

  useEffect(() => {
    document.title = tour ? `Book ${tour.name} | Travanta` : 'Book Tour | Travanta';
  }, [tour]);

  useEffect(() => {
    if (tour && bookingData.departureDate) {
      generateDayPlans();
    }
  }, [tour, bookingData.departureDate]);

  useEffect(() => {
    if (bookingData.startingCity && tour) {
      const destinationCity = getDestinationCity();
      setFlightOptions(generateFlightOptions(bookingData.startingCity, destinationCity));
      setHotelOptions(generateHotelOptions());
    }
  }, [bookingData.startingCity, tour]);

  const generateDayPlans = () => {
    if (!tour || !bookingData.departureDate) return;

    const startDate = new Date(bookingData.departureDate);
    const duration = parseInt(tour.duration.split(' ')[0]);
    const plans: DayPlan[] = [];

    for (let i = 0; i < duration; i++) {
      const currentDate = addDays(startDate, i);
      plans.push({
        day: i + 1,
        date: format(currentDate, 'MMM dd, yyyy'),
        activities: tour.itinerary[i]?.description.split('.').slice(0, 3) || [
          'Explore local attractions',
          'Cultural experiences',
          'Leisure time'
        ],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Included in tour package'
      });
    }

    setDayPlans(plans);
  };

  const updateBookingData = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const calculateTotalPrice = () => {
    // Only tour price multiplied by travelers - flights and hotels are included
    return (tour?.price || 0) * bookingData.travelers;
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleBooking = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking data:', {
      ...bookingData,
      tourId: tour?.id,
      totalPrice: calculateTotalPrice()
    });
    
    // Navigate to confirmation page or show success message
    navigate('/bookings');
  };

  if (!tour) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-8">
            The tour you're trying to book doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const steps = [
    { number: 1, title: 'Travel Details', description: 'Starting city and date' },
    { number: 2, title: 'Flight Selection', description: 'Choose your flight' },
    { number: 3, title: 'Accommodation', description: 'Select your hotel' },
    { number: 4, title: 'Confirmation', description: 'Complete booking' }
  ];

  const destinationCity = getDestinationCity();
  const availableCities = getAvailableCities();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 bg-primary-950">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${tour.image})` }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book {tour.name}
            </h1>
            <p className="text-xl text-gray-200">
              Customize your perfect {tour.duration} journey to {destinationCity}
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center ${index < steps.length - 1 ? 'mr-4' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      currentStep >= step.number 
                        ? 'bg-secondary-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.number ? <Check size={16} /> : step.number}
                    </div>
                    <div className="ml-3 hidden md:block">
                      <p className={`text-sm font-medium ${
                        currentStep >= step.number ? 'text-secondary-500' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="h-5 w-5 text-gray-400 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* Step 1: Travel Details */}
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Travel Details</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="text-blue-800">
                      <strong>Destination:</strong> {destinationCity} ({tour.location})
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="text-blue-800">
                      <strong>Duration:</strong> {tour.duration}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Starting City
                    </label>
                    <select
                      className="input w-full"
                      value={bookingData.startingCity}
                      onChange={(e) => updateBookingData('startingCity', e.target.value)}
                      required
                    >
                      <option value="">Select your departure city</option>
                      {availableCities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">
                      Note: {destinationCity} is excluded as it's your destination
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers
                    </label>
                    <select
                      className="input w-full"
                      value={bookingData.travelers}
                      onChange={(e) => updateBookingData('travelers', Number(e.target.value))}
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Traveler' : 'Travelers'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    className="input w-full md:w-1/2"
                    value={bookingData.departureDate}
                    onChange={(e) => updateBookingData('departureDate', e.target.value)}
                    min={format(new Date(), 'yyyy-MM-dd')}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Return date will be automatically calculated based on tour duration ({tour.duration})
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                  <h3 className="font-semibold mb-2">What's Included in Your Tour Package:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Round-trip flights</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Accommodation</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Local transportation</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Guided tours</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button 
                    className="btn-primary"
                    onClick={nextStep}
                    disabled={!bookingData.startingCity || !bookingData.departureDate}
                  >
                    Choose Flight
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Flight Selection */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Select Your Flight</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Route:</strong> {bookingData.startingCity} → {destinationCity}
                    </div>
                    <div>
                      <strong>Departure:</strong> {format(new Date(bookingData.departureDate), 'MMM dd, yyyy')}
                    </div>
                    <div>
                      <strong>Travelers:</strong> {bookingData.travelers}
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 text-sm">
                    <strong>Note:</strong> Flight costs are included in your tour package. Select your preferred flight option.
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {flightOptions.map((flight) => (
                    <div 
                      key={flight.id} 
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        bookingData.selectedFlight === flight.id 
                          ? 'border-secondary-500 bg-secondary-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => updateBookingData('selectedFlight', flight.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="flight"
                            checked={bookingData.selectedFlight === flight.id}
                            onChange={() => updateBookingData('selectedFlight', flight.id)}
                            className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300"
                          />
                          <div className="ml-4">
                            <div className="flex items-center">
                              <Plane className="h-5 w-5 text-secondary-500 mr-2" />
                              <span className="font-semibold">{flight.airline}</span>
                              <span className="text-gray-600 ml-2">{flight.flightNumber}</span>
                            </div>
                            <p className="text-sm text-gray-600">{flight.aircraft}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <p className="font-bold">{flight.departureTime}</p>
                              <p className="text-xs text-gray-600">{bookingData.startingCity}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-gray-600">{flight.duration}</p>
                              <div className="w-8 border-t border-gray-300"></div>
                            </div>
                            <div className="text-center">
                              <p className="font-bold">{flight.arrivalTime}</p>
                              <p className="text-xs text-gray-600">{destinationCity}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={prevStep}>
                    <ChevronLeft size={18} className="mr-2" />
                    Back
                  </button>
                  <button 
                    className="btn-primary" 
                    onClick={nextStep}
                    disabled={!bookingData.selectedFlight}
                  >
                    Choose Accommodation
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Hotel Selection */}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Select Your Accommodation</h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 text-sm">
                    <strong>Note:</strong> Accommodation costs are included in your tour package. Choose your preferred hotel category.
                  </p>
                </div>
                
                <div className="space-y-6 mb-8">
                  {hotelOptions.map((hotel) => (
                    <div 
                      key={hotel.id} 
                      className={`border rounded-lg p-6 cursor-pointer transition-all ${
                        bookingData.selectedHotel === hotel.id 
                          ? 'border-secondary-500 bg-secondary-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => updateBookingData('selectedHotel', hotel.id)}
                    >
                      <div className="flex items-start">
                        <input
                          type="radio"
                          name="hotel"
                          checked={bookingData.selectedHotel === hotel.id}
                          onChange={() => updateBookingData('selectedHotel', hotel.id)}
                          className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300 mt-1"
                        />
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <Hotel className="h-5 w-5 text-secondary-500 mr-2" />
                              <h3 className="font-bold text-lg">{hotel.name}</h3>
                              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                {hotel.category}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-accent-500 fill-accent-500 mr-1" />
                              <span className="font-medium">{hotel.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{hotel.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {hotel.amenities.map((amenity, index) => (
                              <span 
                                key={index} 
                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={prevStep}>
                    <ChevronLeft size={18} className="mr-2" />
                    Back
                  </button>
                  <button 
                    className="btn-primary" 
                    onClick={nextStep}
                    disabled={!bookingData.selectedHotel}
                  >
                    Review Booking
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
                
                <div className="space-y-6 mb-8">
                  {/* Tour Details */}
                  <div className="border-b pb-4">
                    <h3 className="font-bold mb-2">Tour Package</h3>
                    <p className="text-lg">{tour.name}</p>
                    <p className="text-gray-600">{tour.duration} • {bookingData.travelers} travelers</p>
                    <p className="text-gray-600">From {bookingData.startingCity} to {destinationCity}</p>
                    <p className="text-gray-600">Departure: {format(new Date(bookingData.departureDate), 'MMM dd, yyyy')}</p>
                  </div>

                  {/* Selected Flight */}
                  <div className="border-b pb-4">
                    <h3 className="font-bold mb-2">Selected Flight</h3>
                    {(() => {
                      const selectedFlight = flightOptions.find(f => f.id === bookingData.selectedFlight);
                      return selectedFlight ? (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">{selectedFlight.airline} {selectedFlight.flightNumber}</p>
                              <p className="text-sm text-gray-600">{selectedFlight.aircraft}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm">{selectedFlight.departureTime} - {selectedFlight.arrivalTime}</p>
                              <p className="text-xs text-gray-600">{selectedFlight.duration}</p>
                            </div>
                          </div>
                        </div>
                      ) : null;
                    })()}
                  </div>

                  {/* Selected Hotel */}
                  <div className="border-b pb-4">
                    <h3 className="font-bold mb-2">Selected Accommodation</h3>
                    {(() => {
                      const selectedHotel = hotelOptions.find(h => h.id === bookingData.selectedHotel);
                      return selectedHotel ? (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">{selectedHotel.name}</p>
                              <p className="text-sm text-gray-600">{selectedHotel.category} • {selectedHotel.rating} ★</p>
                            </div>
                          </div>
                        </div>
                      ) : null;
                    })()}
                  </div>
                  
                  {/* Package Inclusions */}
                  <div className="border-b pb-4">
                    <h3 className="font-bold mb-2">Package Includes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tour.includes.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xl font-bold">Total Amount</span>
                        <p className="text-sm text-gray-600">All-inclusive package price</p>
                      </div>
                      <span className="text-2xl font-bold text-primary-950">
                        ₹{calculateTotalPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="btn-secondary" onClick={prevStep}>
                    <ChevronLeft size={18} className="mr-2" />
                    Back
                  </button>
                  <button className="btn-primary" onClick={handleBooking}>
                    Confirm Booking
                    <Check size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingFlow;