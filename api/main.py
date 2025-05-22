from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import json
import os
from datetime import datetime, timedelta
import uvicorn
import random

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# In-memory storage
bookings = []

# Mock data
airports = {
    "delhi": "DEL",
    "mumbai": "BOM",
    "bangalore": "BLR",
    "chennai": "MAA",
    "kolkata": "CCU",
    "hyderabad": "HYD",
    "ahmedabad": "AMD",
    "goa": "GOI",
    "jaipur": "JAI",
    "kochi": "COK"
}

airlines = ["SpiceJet", "IndiGo", "Air India", "Vistara", "AirAsia"]
bus_operators = ["RedBus", "Volvo Travels", "SRS Travels", "VRL Travels", "KPN Travels"]

# Models
class FlightSearch(BaseModel):
    origin: str
    destination: str
    date: str
    return_date: Optional[str] = None
    travelers: int = 1

class BusSearch(BaseModel):
    origin: str
    destination: str
    date: str
    travelers: int = 1

class Passenger(BaseModel):
    name: str
    age: int
    gender: str

class BookingDetails(BaseModel):
    flightId: Optional[str] = None
    departureDate: Optional[str] = None
    returnDate: Optional[str] = None
    airlineName: Optional[str] = None
    flightNumber: Optional[str] = None
    origin: Optional[str] = None
    destination: Optional[str] = None
    busId: Optional[str] = None
    busOperator: Optional[str] = None
    busNumber: Optional[str] = None
    tourId: Optional[str] = None
    tourName: Optional[str] = None
    startDate: Optional[str] = None
    endDate: Optional[str] = None

class BookingCreate(BaseModel):
    userId: str
    type: str  # 'flight', 'bus', or 'tour'
    totalAmount: float
    passengers: List[Passenger]
    details: BookingDetails

class Booking(BookingCreate):
    id: str
    bookingDate: str
    status: str = "confirmed"
    paymentStatus: str = "paid"

@app.get("/")
def read_root():
    return {"message": "Welcome to the Travanta API"}

@app.get("/api/airport-code")
def get_airport_code(city: str):
    """Get IATA airport code for a city"""
    city_lower = city.lower()
    if city_lower in airports:
        return {"city": city, "code": airports[city_lower]}
    return {"city": city, "code": "XXX"}

@app.post("/api/flights/search")
def search_flights(search: FlightSearch):
    """Search for flights based on criteria"""
    flights = []
    
    # Generate random mock flights
    num_flights = random.randint(5, 15)
    
    for i in range(num_flights):
        # Generate departure time between 6AM and 10PM
        dep_hour = random.randint(6, 22)
        dep_min = random.choice([0, 15, 30, 45])
        departure_time = f"{dep_hour:02d}:{dep_min:02d}"
        
        # Flight duration between 1 and 5 hours
        duration_hours = random.randint(1, 5)
        duration_mins = random.randint(0, 59)
        
        # Calculate arrival time
        arr_hour = (dep_hour + duration_hours) % 24
        arr_min = (dep_min + duration_mins) % 60
        arrival_time = f"{arr_hour:02d}:{arr_min:02d}"
        
        airline = random.choice(airlines)
        flight_num = f"{airline[:2].upper()}{random.randint(100, 999)}"
        
        base_price = 2000 + random.randint(0, 8000)
        
        flights.append({
            "id": f"flight-{i}",
            "airline": airline,
            "flightNumber": flight_num,
            "departureTime": departure_time,
            "arrivalTime": arrival_time,
            "origin": search.origin,
            "destination": search.destination,
            "duration": f"{duration_hours}h {duration_mins}m",
            "price": round(base_price / 100) * 100,
            "seatsAvailable": random.randint(1, 50),
            "cabin": random.choice(["Economy", "Premium Economy", "Business", "First"])
        })
    
    return flights

@app.post("/api/buses/search")
def search_buses(search: BusSearch):
    """Search for buses based on criteria"""
    buses = []
    
    # Generate random mock buses
    num_buses = random.randint(5, 12)
    
    for i in range(num_buses):
        # Generate departure time between 6PM and 11PM (common for overnight buses)
        dep_hour = random.randint(18, 23)
        dep_min = random.choice([0, 15, 30, 45])
        departure_time = f"{dep_hour:02d}:{dep_min:02d}"
        
        # Bus duration between 4 and 12 hours
        duration_hours = random.randint(4, 12)
        duration_mins = random.randint(0, 59)
        
        # Calculate arrival time
        arr_hour = (dep_hour + duration_hours) % 24
        arr_min = (dep_min + duration_mins) % 60
        arrival_time = f"{arr_hour:02d}:{arr_min:02d}"
        
        operator = random.choice(bus_operators)
        bus_num = f"{operator[:2].upper()}{random.randint(100, 999)}"
        
        base_price = 500 + random.randint(0, 2000)
        
        buses.append({
            "id": f"bus-{i}",
            "operator": operator,
            "busNumber": bus_num,
            "departureTime": departure_time,
            "arrivalTime": arrival_time,
            "origin": search.origin,
            "destination": search.destination,
            "duration": f"{duration_hours}h {duration_mins}m",
            "price": round(base_price / 10) * 10,
            "seatsAvailable": random.randint(1, 30),
            "busType": random.choice(["Seater", "Sleeper", "Semi-Sleeper", "AC", "Non-AC"])
        })
    
    return buses

@app.post("/api/bookings", response_model=Booking)
def create_booking(booking: BookingCreate):
    """Create a new booking"""
    booking_id = f"booking-{len(bookings) + 1}-{random.randint(1000, 9999)}"
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    new_booking = Booking(
        id=booking_id,
        bookingDate=now,
        **booking.dict()
    )
    
    bookings.append(new_booking.dict())
    return new_booking

@app.get("/api/bookings")
def get_bookings(user_id: Optional[str] = None):
    """Get all bookings, optionally filtered by user_id"""
    if user_id:
        return [booking for booking in bookings if booking["userId"] == user_id]
    return bookings

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)