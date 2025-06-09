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
  Check
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
    customizations: [] as string[],
    totalPrice: 0
  });

  const [dayPlans, setDayPlans] = useState<DayPlan[]>([]);

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

  useEffect(() => {
    document.title = tour ? `Book ${tour.name} | Travanta` : 'Book Tour | Travanta';
  }, [tour]);

  useEffect(() => {
    if (tour && bookingData.departureDate) {
      generateDayPlans();
    }
  }, [tour, bookingData.departureDate]);

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
    if (currentStep < 3) setCurrentStep(currentStep + 1);
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
    { number: 2, title: 'Itinerary', description: 'Review your plan' },
    { number: 3, title: 'Confirmation', description: 'Complete booking' }
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
                    Review Itinerary
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Itinerary Review */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Your Itinerary</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Route:</strong> {bookingData.startingCity} → {destinationCity}
                    </div>
                    <div>
                      <strong>Departure:</strong> {format(new Date(bookingData.departureDate), 'MMM dd, yyyy')}
                    </div>
                    <div>
                      <strong>Duration:</strong> {tour.duration}
                    </div>
                  </div>
                </div>
                
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

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
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