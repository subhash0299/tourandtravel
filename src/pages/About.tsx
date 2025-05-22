import { useEffect } from 'react';
import { CheckCircle, Users, Trophy, Globe, Map, LifeBuoy } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Travanta';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-950">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260')",
          }}
        ></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Travanta
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Crafting unforgettable journeys since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Travanta was born from a simple idea: travel should be transformative, not transactional. Our founder, Alex Rivera, after spending years backpacking across 50+ countries, realized that the most memorable moments weren't just about seeing famous landmarks but about authentic connections with people, cultures, and places.
              </p>
              <p className="text-gray-600 mb-4">
                In 2010, with just a small team of passionate travelers, we began creating journeys that went beyond the typical tourist experience. We focused on responsible travel, local partnerships, and experiences that would leave lasting impressions on both our travelers and the communities they visited.
              </p>
              <p className="text-gray-600">
                Today, Travanta has grown into a global team of over 100 travel experts, but our mission remains unchanged: to create meaningful experiences that transform the way people see the world and themselves.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5257587/pexels-photo-5257587.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                alt="Team meeting planning travel itineraries" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-lg font-semibold text-primary-950">
                  "The world is a book, and those who do not travel read only one page."
                </p>
                <p className="text-gray-500 mt-2">- Saint Augustine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Travanta</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're not just another travel company. Here's what sets us apart and makes thousands of travelers choose us every year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expertly Crafted Itineraries</h3>
              <p className="text-gray-600">
                Our itineraries are designed by travel experts who have personally explored each destination, ensuring you experience the best each location has to offer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsible Travel</h3>
              <p className="text-gray-600">
                We partner with local communities to ensure your travel has a positive impact. We focus on sustainable practices and cultural preservation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Small Group Experiences</h3>
              <p className="text-gray-600">
                Our tours maintain small group sizes, allowing for personalized attention, flexibility, and more meaningful interactions with locals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Award-Winning Service</h3>
              <p className="text-gray-600">
                Recognized with multiple industry awards for our exceptional service, innovative itineraries, and customer satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hidden Gems</h3>
              <p className="text-gray-600">
                We go beyond the tourist traps to show you the authentic side of each destination, including local favorites and off-the-beaten-path experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <LifeBuoy className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Travel with peace of mind knowing our dedicated support team is available around the clock to assist with any needs or emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our diverse team of travel enthusiasts brings together expertise from across the globe to craft your perfect journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                  alt="Alex Rivera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Alex Rivera</h3>
              <p className="text-secondary-500 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                World traveler with a passion for authentic cultural experiences and sustainable tourism.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Chen</h3>
              <p className="text-secondary-500 mb-2">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Logistics expert who ensures every journey runs smoothly from planning to completion.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                  alt="Miguel Santos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Miguel Santos</h3>
              <p className="text-secondary-500 mb-2">Lead Experience Designer</p>
              <p className="text-gray-600 text-sm">
                Creative mind behind our unique itineraries and exclusive cultural experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                  alt="Aisha Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Aisha Johnson</h3>
              <p className="text-secondary-500 mb-2">Customer Experience Director</p>
              <p className="text-gray-600 text-sm">
                Dedicated to ensuring every traveler receives personalized attention and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-950 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-secondary-500 mb-2">15+</p>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary-500 mb-2">50k+</p>
              <p className="text-lg">Happy Travelers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary-500 mb-2">100+</p>
              <p className="text-lg">Destinations</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary-500 mb-2">24/7</p>
              <p className="text-lg">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it—hear what our customers have to say about their Travanta experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Our trip to Rajasthan exceeded all expectations. The attention to detail, from luxurious accommodations to our knowledgeable guide, made it the trip of a lifetime. We experienced the real India, not just tourist spots."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                    alt="Jennifer & David" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Jennifer & David</p>
                  <p className="text-sm text-gray-500">Heritage Tour, 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The Himalayan trek was challenging but incredibly rewarding. Our guide Raj was extremely knowledgeable about the terrain and culture. The views were breathtaking and the local interactions were genuine and enriching."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                    alt="Michael T." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Michael T.</p>
                  <p className="text-sm text-gray-500">Himalayan Adventure, 2022</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "I was hesitant to travel solo, but Travanta made me feel safe and connected throughout my journey in the Andaman Islands. The small group size meant I made friends quickly, and the experiences were authentic and memorable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                    alt="Sophia K." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Sophia K.</p>
                  <p className="text-sm text-gray-500">Island Escape, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;