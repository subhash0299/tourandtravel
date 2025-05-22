import Hero from '../components/home/Hero';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "Travanta - Discover Your Next Adventure";
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedDestinations />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;