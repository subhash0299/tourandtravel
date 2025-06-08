import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Star, Users, Check } from 'lucide-react';
import { destinations } from '../data/destinations';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(destinations.find(d => d.id === id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = tour ? `${tour.name} | Travanta` : 'Tour Details | Travanta';
    setLoading(false);
  }, [tour]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!tour) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-8">
            The tour you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${tour.image})` }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary-500 text-white text-sm font-medium rounded-full mb-4">
              {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {tour.name}
            </h1>
            <div className="flex items-center text-white gap-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-accent-500 fill-accent-500 mr-1" />
                <span>{tour.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tour Details */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                <p className="text-gray-600 mb-6">{tour.description}</p>
                
                <h3 className="text-xl font-bold mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.includes.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>
                <div className="space-y-8">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-secondary-500 rounded-full"></div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Day {day.day}: {day.title}</h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary-950">₹{tour.price}</span>
                  <span className="text-gray-600"> / person</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">Max 15 travelers</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-accent-500 fill-accent-500 mr-2" />
                    <span className="text-gray-600">{tour.rating.toFixed(1)} rating</span>
                  </div>
                </div>

                <Link 
                  to={`/destinations/${tour.id}/book`}
                  className="btn-primary w-full mb-4 justify-center"
                >
                  Book Now
                </Link>

                <p className="text-sm text-gray-500 text-center">
                  Free cancellation up to 30 days before departure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetails;