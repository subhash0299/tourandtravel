import { useState, useEffect } from 'react';
import { Plane, Bus, Map, AlertCircle, Clock, CalendarDays, Users } from 'lucide-react';

type BookingType = 'all' | 'flight' | 'bus' | 'tour';

interface Passenger {
  name: string;
  age: number;
  gender: string;
}

interface BookingDetails {
  flightId?: string;
  departureDate?: string;
  returnDate?: string;
  airlineName?: string;
  flightNumber?: string;
  origin?: string;
  destination?: string;
  busId?: string;
  busOperator?: string;
  busNumber?: string;
  tourId?: string;
  tourName?: string;
  startDate?: string;
  endDate?: string;
}

interface Booking {
  id: string;
  userId: string;
  type: 'flight' | 'bus' | 'tour';
  bookingDate: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  totalAmount: number;
  passengers: Passenger[];
  details: BookingDetails;
}

const mockBookings: Booking[] = [
  {
    id: 'booking-1-1234',
    userId: 'user123',
    type: 'flight',
    bookingDate: '2024-08-01',
    status: 'confirmed',
    paymentStatus: 'paid',
    totalAmount: 450,
    passengers: [
      { name: 'John Doe', age: 32, gender: 'male' }
    ],
    details: {
      flightId: 'flight-12',
      departureDate: '2024-09-15',
      airlineName: 'IndiGo',
      flightNumber: 'IG202',
      origin: 'Delhi',
      destination: 'Mumbai'
    }
  },
  {
    id: 'booking-2-5678',
    userId: 'user123',
    type: 'bus',
    bookingDate: '2024-08-05',
    status: 'confirmed',
    paymentStatus: 'paid',
    totalAmount: 120,
    passengers: [
      { name: 'John Doe', age: 32, gender: 'male' }
    ],
    details: {
      busId: 'bus-08',
      departureDate: '2024-08-25',
      busOperator: 'RedBus',
      busNumber: 'RB505',
      origin: 'Delhi',
      destination: 'Jaipur'
    }
  },
  {
    id: 'booking-3-9012',
    userId: 'user123',
    type: 'tour',
    bookingDate: '2024-07-20',
    status: 'confirmed',
    paymentStatus: 'paid',
    totalAmount: 1250,
    passengers: [
      { name: 'John Doe', age: 32, gender: 'male' },
      { name: 'Jane Doe', age: 30, gender: 'female' }
    ],
    details: {
      tourId: 'rajasthan-heritage',
      tourName: 'Rajasthan Heritage Tour',
      startDate: '2024-10-10',
      endDate: '2024-10-17'
    }
  }
];

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [activeFilter, setActiveFilter] = useState<BookingType>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    document.title = 'My Bookings | Travanta';
  }, []);
  
  useEffect(() => {
    // Simulate API call delay
    const fetchBookings = async () => {
      try {
        setLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setBookings(mockBookings);
      } catch (err) {
        setError('Failed to load bookings.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBookings();
  }, []);
  
  const filteredBookings = activeFilter === 'all'
    ? bookings
    : bookings.filter(booking => booking.type === activeFilter);
  
  const getBookingIcon = (type: 'flight' | 'bus' | 'tour') => {
    switch (type) {
      case 'flight':
        return <Plane className="h-5 w-5" />;
      case 'bus':
        return <Bus className="h-5 w-5" />;
      case 'tour':
        return <Map className="h-5 w-5" />;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260')",
          }}
        ></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Bookings
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Manage your travel plans and view your booking history
          </p>
        </div>
      </section>

      {/* Bookings Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {/* Filter Tabs */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-primary-950 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Bookings
              </button>
              <button
                onClick={() => setActiveFilter('flight')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === 'flight'
                    ? 'bg-primary-950 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Flights
              </button>
              <button
                onClick={() => setActiveFilter('bus')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === 'bus'
                    ? 'bg-primary-950 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Buses
              </button>
              <button
                onClick={() => setActiveFilter('tour')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === 'tour'
                    ? 'bg-primary-950 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tours
              </button>
            </div>
          </div>
          
          {/* Bookings List */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-start">
              <AlertCircle size={20} className="mr-2 mt-0.5" />
              <p>{error}</p>
            </div>
          ) : filteredBookings.length > 0 ? (
            <div className="space-y-6">
              {filteredBookings.map(booking => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Booking header */}
                  <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center mb-3 md:mb-0">
                      <div className={`p-2 rounded-full mr-3 ${
                        booking.type === 'flight' 
                          ? 'bg-blue-100 text-blue-700' 
                          : booking.type === 'bus' 
                            ? 'bg-green-100 text-green-700'
                            : 'bg-purple-100 text-purple-700'
                      }`}>
                        {getBookingIcon(booking.type)}
                      </div>
                      <div>
                        <h3 className="font-bold">
                          {booking.type === 'flight' 
                            ? `${booking.details.origin} to ${booking.details.destination}`
                            : booking.type === 'bus'
                              ? `${booking.details.origin} to ${booking.details.destination}`
                              : booking.details.tourName
                          }
                        </h3>
                        <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.paymentStatus === 'paid' 
                          ? 'bg-green-100 text-green-800' 
                          : booking.paymentStatus === 'unpaid'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Booking details */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                      {/* Date information */}
                      <div>
                        <div className="flex items-center text-gray-700 mb-1">
                          <CalendarDays size={16} className="mr-2" />
                          <span className="text-sm font-medium">
                            {booking.type === 'tour' ? 'Tour Dates' : 'Travel Date'}
                          </span>
                        </div>
                        <p className="text-primary-950 font-semibold">
                          {booking.type === 'tour' 
                            ? `${booking.details.startDate} - ${booking.details.endDate}`
                            : booking.details.departureDate
                          }
                        </p>
                      </div>
                      
                      {/* Provider information */}
                      <div>
                        <div className="flex items-center text-gray-700 mb-1">
                          {booking.type === 'flight' ? (
                            <Plane size={16} className="mr-2" />
                          ) : booking.type === 'bus' ? (
                            <Bus size={16} className="mr-2" />
                          ) : (
                            <Map size={16} className="mr-2" />
                          )}
                          <span className="text-sm font-medium">
                            {booking.type === 'flight' 
                              ? 'Airline' 
                              : booking.type === 'bus' 
                                ? 'Bus Operator' 
                                : 'Tour Package'
                            }
                          </span>
                        </div>
                        <p className="text-primary-950 font-semibold">
                          {booking.type === 'flight' 
                            ? `${booking.details.airlineName} ${booking.details.flightNumber}` 
                            : booking.type === 'bus' 
                              ? `${booking.details.busOperator} ${booking.details.busNumber}`
                              : booking.details.tourName
                          }
                        </p>
                      </div>
                      
                      {/* Passengers */}
                      <div>
                        <div className="flex items-center text-gray-700 mb-1">
                          <Users size={16} className="mr-2" />
                          <span className="text-sm font-medium">Passengers</span>
                        </div>
                        <p className="text-primary-950 font-semibold">
                          {booking.passengers.length} {booking.passengers.length === 1 ? 'Passenger' : 'Passengers'}
                        </p>
                        <div className="text-xs text-gray-600 mt-1">
                          {booking.passengers.map((passenger, index) => (
                            <div key={index}>
                              {passenger.name}{index < booking.passengers.length - 1 ? ', ' : ''}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Amount */}
                      <div>
                        <div className="flex items-center text-gray-700 mb-1">
                          <span className="text-sm font-medium">Total Amount</span>
                        </div>
                        <p className="text-primary-950 text-xl font-bold">
                          ${booking.totalAmount}
                        </p>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                      <button className="btn-primary">
                        View Details
                      </button>
                      {booking.status !== 'cancelled' && (
                        <button className="btn-outline">
                          Cancel Booking
                        </button>
                      )}
                      <button className="btn-secondary">
                        Download Invoice
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">No bookings found</h3>
              <p className="text-gray-600 mb-6">
                You don't have any {activeFilter !== 'all' ? activeFilter : ''} bookings yet.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/flights" className="btn-primary">
                  Book a Flight
                </a>
                <a href="/buses" className="btn-primary">
                  Book a Bus
                </a>
                <a href="/destinations" className="btn-primary">
                  Explore Tours
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Bookings;