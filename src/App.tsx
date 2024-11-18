import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better mobile performance
const Home = React.lazy(() => import('./pages/Home'));
const RSVP = React.lazy(() => import('./pages/RSVP'));
const EventDetails = React.lazy(() => import('./pages/EventDetails'));
const Accommodations = React.lazy(() => import('./pages/Accommodations'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const FamilyGuide = React.lazy(() => import('./pages/FamilyGuide'));
const DressCode = React.lazy(() => import('./pages/DressCode'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rsvp" element={<RSVP />} />
              <Route path="/details" element={<EventDetails />} />
              <Route path="/accommodations" element={<Accommodations />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/family-guide" element={<FamilyGuide />} />
              <Route path="/dress-code" element={<DressCode />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;