import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy-load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Destinations = lazy(() => import('./pages/Destinations'));
const FlightBooking = lazy(() => import('./pages/FlightBooking'));
const BusBooking = lazy(() => import('./pages/BusBooking'));
const Bookings = lazy(() => import('./pages/Bookings'));
const TourDetails = lazy(() => import('./pages/TourDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<TourDetails />} />
          <Route path="/flights" element={<FlightBooking />} />
          <Route path="/buses" element={<BusBooking />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;