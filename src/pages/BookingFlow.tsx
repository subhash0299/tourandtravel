import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Plane, 
  Hotel, 
  Calendar, 
  Users, 
  Clock, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  Check,
  ArrowRight
} from 'lucide-react';
import { destinations } from '../data/destinations';
import { format, addDays } from 'date-fns';

interface FlightOption {
  id: string;
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  duration: string;
}

interface AccommodationOption {
  id: string;
  name: string;
  type: 'hotel' | 'resort' | 'guesthouse' | 'homestay';
  rating: number;
  price: number;
  image: string;
  amenities: string[];
  location: string;
}

interface DayPlan {
  day: number;
  date: string;
  activities: string[];
  meals: string[];
  accommodation: string;
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
    returnDate: '',
    travelers: 1,
    selectedFlight: null as FlightOption | null,
    selectedAccommodation: null as AccommodationOption | null,
    customizations: [] as string[],
    totalPrice: 0
  });

  const [availableFlights, setAvailableFlights] = useState<FlightOption[]>([]);
  const [availableAccommodations, setAvailableAccommodations] = useState<AccommodationOption[]>([]);
  const [dayPlans, setDayPlans] = useState<DayPlan[]>([]);

  const popularCities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 
    'Hyderabad', 'Ahmedabad', 'Pune', 'Jaipur', 'Kochi'
  ];

  useEffect(() => {
    document.title = tour ? `Book ${tour.name} | Travanta` : 'Book Tour | Travanta';
  }, [tour]);

  useEffect(() => {
    if (bookingData.startingCity && tour) {
      generateFlights();
      generateAccommodations();
    }
  }, [bookingData.startingCity, tour]);

  useEffect(() => {
    if (tour && bookingData.departureDate) {
      generateDayPlans();
    }
  }, [tour, bookingData.departureDate]);

  const generateFlights = () => {
    const airlines = ['SpiceJet', 'IndiGo', 'Air India', 'Vistara', 'AirAsia'];
    const flights: FlightOption[] = [];

    for (let i = 0; i < 5; i++) {
      const airline = airlines[Math.floor(Math.random() * airlines.length)];
      const hour = 6 + Math.floor(Math.random() * 16);
      const minute = Math.floor(Math.random() * 60);
      const departureTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      
      const durationHours = 1 + Math.floor(Math.random() * 4);
      const arrivalHour = (hour + durationHours) % 24;
      const arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      
      flights.push({
        id: `flight-${i}`,
        airline,
        flightNumber: `${airline.substring(0, 2).toUpperCase()}${100 + Math.floor(Math.random() * 900)}`,
        departureTime,
        arrivalTime,
        price: 3000 + Math.floor(Math.random() * 7000),
        duration: `${durationHours}h ${Math.floor(Math.random() * 60)}m`
      });
    }

    setAvailableFlights(flights);
  };

  const generateAccommodations = () => {
    const accommodations: AccommodationOption[] = [
      {
        id: 'acc-1',
        name: 'Luxury Palace Hotel',
        type: 'hotel',
        rating: 4.8,
        price: 8000,
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260',
        amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Room Service'],
        location: 'City Center'
      },
      {
        id: 'acc-2',
        name: 'Heritage Resort',
        type: 'resort',
        rating: 4.6,
        price: 6500,
        image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260',
        amenities: ['Free WiFi', 'Pool', 'Garden', 'Restaurant'],
        location: 'Near Attractions'
      },
      {
        id: 'acc-3',
        name: 'Boutique Guesthouse',
        type: 'guesthouse',
        rating: 4.4,
        price: 4000,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260',
        amenities: ['Free WiFi', 'Breakfast', 'Garden'],
        location: 'Old Town'
      },
      {
        id: 'acc-4',
        name: 'Traditional Homestay',
        type: 'homestay',
        rating: 4.2,
        price: 2500,
        image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260',
        amenities: ['Home-cooked meals', 'Cultural experience', 'Free WiFi'],
        location: 'Local Neighborhood'
      }
    ];

    setAvailableAccommodations(accommodations);
  };

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
        accommodation: bookingData.selectedAccommodation?.name || 'Selected accommodation'
      });
    }

    setDayPlans(plans);
  };

  const updateBookingData = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const calculateTotalPrice = () => {
    let total = tour?.price || 0;
    if (bookingData.selectedFlight) total += bookingData.selectedFlight.price;
    if (bookingData.selectedAccommodation) {
      const duration = parseInt(tour?.duration.split(' ')[0] || '1');
      total += bookingData.selectedAccommodation.price * duration;
    }
    return total * bookingData.travelers;
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
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
    { number: 1, title: 'Travel Details', description: 'Starting city and dates' },
    { number: 2, title: 'Flights', description: 'Choose your flights' },
    { number: 3, title: 'Accommodation', description: 'Select your stay' },
    { number: 4, title: 'Itinerary', description: 'Review your plan' },
    { number: 5, title: 'Confirmation', description: 'Complete booking' }
  ];

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
              Customize your perfect {tour.duration} journey
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
                      <option value="">Select your city</option>
                      {popularCities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      className="input w-full"
                      value={bookingData.departureDate}
                      onChange={(e) => updateBookingData('departureDate', e.target.value)}
                      min={format(new Date(), 'yyyy-MM-dd')}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Return Date
                    </label>
                    <input
                      type="date"
                      className="input w-full"
                      value={bookingData.returnDate}
                      onChange={(e) => updateBookingData('returnDate', e.target.value)}
                      min={bookingData.departureDate}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button 
                    className="btn-primary"
                    onClick={nextStep}
                    disabled={!bookingData.startingCity || !bookingData.departureDate || !bookingData.returnDate}
                  >
                    Continue to Flights
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Flight Selection */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Choose Your Flights</h2>
                <p className="text-gray-600 mb-6">
                  {bookingData.startingCity} → {tour.location} on {format(new Date(bookingData.departureDate), 'MMM dd, yyyy')}
                </p>
                
                <div className="space-y-4 mb-8">
                  {availableFlights.map(flight => (
                    <div 
                      key={flight.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        bookingData.selectedFlight?.id === flight.id 
                          ? 'border-secondary-500 bg-secondary-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => updateBookingData('selectedFlight', flight)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Plane className="h-5 w-5 text-secondary-500 mr-3" />
                          <div>
                            <p className="font-semibold">{flight.airline}</p>
                            <p className="text-sm text-gray-600">{flight.flightNumber}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-8">
                          <div className="text-center">
                            <p className="font-bold">{flight.departureTime}</p>
                            <p className="text-sm text-gray-600">{bookingData.startingCity}</p>
                          </div>
                          
                          <div className="text-center">
                            <Clock className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                            <p className="text-sm text-gray-600">{flight.duration}</p>
                          </div>
                          
                          <div className="text-center">
                            <p className="font-bold">{flight.arrivalTime}</p>
                            <p className="text-sm text-gray-600">{tour.location}</p>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-xl font-bold text-primary-950">₹{flight.price}</p>
                            <p className="text-sm text-gray-600">per person</p>
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
                    Continue to Accommodation
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Accommodation Selection */}
            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Choose Your Accommodation</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {availableAccommodations.map(accommodation => (
                    <div 
                      key={accommodation.id}
                      className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                        bookingData.selectedAccommodation?.id === accommodation.id 
                          ? 'border-secondary-500 ring-2 ring-secondary-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => updateBookingData('selectedAccommodation', accommodation)}
                    >
                      <img 
                        src={accommodation.image} 
                        alt={accommodation.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg">{accommodation.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-accent-500 fill-accent-500 mr-1" />
                            <span className="text-sm">{accommodation.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2 capitalize">
                          {accommodation.type} • {accommodation.location}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {accommodation.amenities.slice(0, 3).map((amenity, index) => (
                            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {amenity}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-xl font-bold text-primary-950">₹{accommodation.price}</p>
                            <p className="text-sm text-gray-600">per night</p>
                          </div>
                          {bookingData.selectedAccommodation?.id === accommodation.id && (
                            <Check className="h-6 w-6 text-secondary-500" />
                          )}
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
                    disabled={!bookingData.selectedAccommodation}
                  >
                    Review Itinerary
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Itinerary Review */}
            {currentStep === 4 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Your Itinerary</h2>
                
                <div className="space-y-6 mb-8">
                  {dayPlans.map((day, index) => (
                    <div key={day.day} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold">Day {day.day}</h3>
                        <span className="text-sm text-gray-600">{day.date}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-secondary-600">Activities</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {day.activities.map((activity, idx) => (
                              <li key={idx}>• {activity}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-secondary-600">Meals</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {day.meals.map((meal, idx) => (
                              <li key={idx}>• {meal}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-secondary-600">Accommodation</h4>
                          <p className="text-sm text-gray-600">{day.accommodation}</p>
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
                  <button className="btn-primary" onClick={nextStep}>
                    Continue to Booking
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
                
                <div className="space-y-6 mb-8">
                  {/* Tour Details */}
                  <div className="border-b pb-4">
                    <h3 className="font-bold mb-2">Tour Package</h3>
                    <p className="text-lg">{tour.name}</p>
                    <p className="text-gray-600">{tour.duration} • {bookingData.travelers} travelers</p>
                    <p className="text-xl font-bold text-primary-950">₹{tour.price * bookingData.travelers}</p>
                  </div>
                  
                  {/* Flight Details */}
                  {bookingData.selectedFlight && (
                    <div className="border-b pb-4">
                      <h3 className="font-bold mb-2">Flight</h3>
                      <p>{bookingData.selectedFlight.airline} {bookingData.selectedFlight.flightNumber}</p>
                      <p className="text-gray-600">
                        {bookingData.startingCity} → {tour.location} • {bookingData.selectedFlight.departureTime}
                      </p>
                      <p className="text-xl font-bold text-primary-950">
                        ₹{bookingData.selectedFlight.price * bookingData.travelers}
                      </p>
                    </div>
                  )}
                  
                  {/* Accommodation Details */}
                  {bookingData.selectedAccommodation && (
                    <div className="border-b pb-4">
                      <h3 className="font-bold mb-2">Accommodation</h3>
                      <p>{bookingData.selectedAccommodation.name}</p>
                      <p className="text-gray-600">
                        {parseInt(tour.duration.split(' ')[0])} nights • {bookingData.selectedAccommodation.type}
                      </p>
                      <p className="text-xl font-bold text-primary-950">
                        ₹{bookingData.selectedAccommodation.price * parseInt(tour.duration.split(' ')[0])}
                      </p>
                    </div>
                  )}
                  
                  {/* Total */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">Total Amount</span>
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