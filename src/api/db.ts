import { destinations } from '../data/destinations';

export interface Flight {
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
  cabin: 'Economy' | 'Premium Economy' | 'Business' | 'First';
}

export interface Bus {
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
  busType: 'Seater' | 'Sleeper' | 'Semi-Sleeper' | 'AC' | 'Non-AC';
}

export interface Booking {
  id: string;
  userId: string;
  type: 'flight' | 'bus' | 'tour';
  bookingDate: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  totalAmount: number;
  passengers: {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other';
  }[];
  details: {
    // For flights
    flightId?: string;
    departureDate?: string;
    returnDate?: string;
    airlineName?: string;
    flightNumber?: string;
    origin?: string;
    destination?: string;
    
    // For buses
    busId?: string;
    busOperator?: string;
    busNumber?: string;
    
    // For tours
    tourId?: string;
    tourName?: string;
    startDate?: string;
    endDate?: string;
  };
}

// In-memory data store
export const db = {
  flights: generateFlights(),
  buses: generateBuses(),
  bookings: [] as Booking[],
  
  // Airport code lookup
  getAirportCode(city: string): string {
    const airports: Record<string, string> = {
      'delhi': 'DEL',
      'mumbai': 'BOM',
      'bangalore': 'BLR',
      'chennai': 'MAA',
      'kolkata': 'CCU',
      'hyderabad': 'HYD',
      'ahmedabad': 'AMD',
      'goa': 'GOI',
      'jaipur': 'JAI',
      'kochi': 'COK',
      'new york': 'JFK',
      'london': 'LHR',
      'dubai': 'DXB',
      'singapore': 'SIN',
      'bangkok': 'BKK',
      'paris': 'CDG',
      'tokyo': 'NRT',
      'sydney': 'SYD'
    };
    
    const lowercaseCity = city.toLowerCase();
    return airports[lowercaseCity] || 'XXX';
  },
  
  // Search flights
  searchFlights(origin: string, destination: string, date: string): Flight[] {
    return this.flights.filter(flight => 
      flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
      flight.destination.toLowerCase().includes(destination.toLowerCase())
    );
  },
  
  // Search buses
  searchBuses(origin: string, destination: string, date: string): Bus[] {
    return this.buses.filter(bus => 
      bus.origin.toLowerCase().includes(origin.toLowerCase()) &&
      bus.destination.toLowerCase().includes(destination.toLowerCase())
    );
  },
  
  // Create booking
  createBooking(booking: Omit<Booking, 'id'>): Booking {
    const newBooking: Booking = {
      ...booking,
      id: `booking-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    };
    
    this.bookings.push(newBooking);
    return newBooking;
  },
  
  // Get bookings by user
  getBookingsByUser(userId: string): Booking[] {
    return this.bookings.filter(booking => booking.userId === userId);
  },
  
  // Search destinations
  searchDestinations(query: string) {
    if (!query) return destinations;
    
    const lowercaseQuery = query.toLowerCase();
    return destinations.filter(destination =>
      destination.name.toLowerCase().includes(lowercaseQuery) ||
      destination.location.toLowerCase().includes(lowercaseQuery) ||
      destination.description.toLowerCase().includes(lowercaseQuery) ||
      destination.category.toLowerCase().includes(lowercaseQuery)
    );
  }
};

// Generate mock flight data
function generateFlights(): Flight[] {
  const airlines = ['SpiceJet', 'IndiGo', 'Air India', 'Vistara', 'AirAsia', 'Emirates', 'Lufthansa'];
  const routes = [
    { origin: 'Delhi', destination: 'Mumbai' },
    { origin: 'Mumbai', destination: 'Bangalore' },
    { origin: 'Bangalore', destination: 'Chennai' },
    { origin: 'Delhi', destination: 'Kolkata' },
    { origin: 'Mumbai', destination: 'Jaipur' },
    { origin: 'Delhi', destination: 'Goa' },
    { origin: 'Mumbai', destination: 'Kochi' },
    { origin: 'Delhi', destination: 'Dubai' },
    { origin: 'Mumbai', destination: 'Singapore' },
    { origin: 'Delhi', destination: 'London' }
  ];
  
  const flights: Flight[] = [];
  
  for (let i = 0; i < 50; i++) {
    const route = routes[i % routes.length];
    const airline = airlines[Math.floor(Math.random() * airlines.length)];
    const flightNumber = `${airline.substring(0, 2).toUpperCase()}${100 + Math.floor(Math.random() * 900)}`;
    const hour = 6 + Math.floor(Math.random() * 16); // Flights from 6 AM to 10 PM
    const minute = Math.floor(Math.random() * 60);
    const departureTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    
    const durationHours = 1 + Math.floor(Math.random() * 3);
    const durationMinutes = Math.floor(Math.random() * 60);
    const duration = `${durationHours}h ${durationMinutes}m`;
    
    const arrivalHour = (hour + durationHours) % 24;
    const arrivalMinute = (minute + durationMinutes) % 60;
    const arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:${arrivalMinute.toString().padStart(2, '0')}`;
    
    const cabinTypes: ('Economy' | 'Premium Economy' | 'Business' | 'First')[] = ['Economy', 'Premium Economy', 'Business', 'First'];
    const cabin = cabinTypes[Math.floor(Math.random() * cabinTypes.length)];
    
    const basePrice = 2000 + Math.floor(Math.random() * 8000);
    let price = basePrice;
    if (cabin === 'Premium Economy') price = basePrice * 1.5;
    if (cabin === 'Business') price = basePrice * 2.5;
    if (cabin === 'First') price = basePrice * 4;
    
    flights.push({
      id: `flight-${i}`,
      airline,
      flightNumber,
      departureTime,
      arrivalTime,
      origin: route.origin,
      destination: route.destination,
      duration,
      price: Math.round(price / 100) * 100,
      seatsAvailable: 10 + Math.floor(Math.random() * 100),
      cabin
    });
  }
  
  return flights;
}

// Generate mock bus data
function generateBuses(): Bus[] {
  const operators = ['RedBus', 'Volvo Travels', 'SRS Travels', 'VRL Travels', 'KPN Travels', 'Orange Travels'];
  const routes = [
    { origin: 'Delhi', destination: 'Jaipur' },
    { origin: 'Mumbai', destination: 'Pune' },
    { origin: 'Bangalore', destination: 'Mysore' },
    { origin: 'Chennai', destination: 'Pondicherry' },
    { origin: 'Delhi', destination: 'Agra' },
    { origin: 'Mumbai', destination: 'Ahmedabad' },
    { origin: 'Bangalore', destination: 'Coimbatore' },
    { origin: 'Chennai', destination: 'Bangalore' },
    { origin: 'Delhi', destination: 'Chandigarh' },
    { origin: 'Mumbai', destination: 'Goa' }
  ];
  
  const buses: Bus[] = [];
  
  for (let i = 0; i < 50; i++) {
    const route = routes[i % routes.length];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const busNumber = `${operator.substring(0, 2).toUpperCase()}${100 + Math.floor(Math.random() * 900)}`;
    
    const hour = 18 + Math.floor(Math.random() * 6); // Buses often depart in evening
    const hour24 = hour % 24;
    const minute = Math.floor(Math.random() * 60);
    const departureTime = `${hour24.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    
    const durationHours = 4 + Math.floor(Math.random() * 8);
    const durationMinutes = Math.floor(Math.random() * 60);
    const duration = `${durationHours}h ${durationMinutes}m`;
    
    const arrivalHour = (hour + durationHours) % 24;
    const arrivalMinute = (minute + durationMinutes) % 60;
    const arrivalTime = `${arrivalHour.toString().padStart(2, '0')}:${arrivalMinute.toString().padStart(2, '0')}`;
    
    const busTypes: ('Seater' | 'Sleeper' | 'Semi-Sleeper' | 'AC' | 'Non-AC')[] = ['Seater', 'Sleeper', 'Semi-Sleeper', 'AC', 'Non-AC'];
    const busType = busTypes[Math.floor(Math.random() * busTypes.length)];
    
    const basePrice = 500 + Math.floor(Math.random() * 2000);
    let price = basePrice;
    if (busType === 'Sleeper') price = basePrice * 1.3;
    if (busType === 'AC') price = basePrice * 1.5;
    
    buses.push({
      id: `bus-${i}`,
      operator,
      busNumber,
      departureTime,
      arrivalTime,
      origin: route.origin,
      destination: route.destination,
      duration,
      price: Math.round(price / 10) * 10,
      seatsAvailable: 5 + Math.floor(Math.random() * 40),
      busType
    });
  }
  
  return buses;
}