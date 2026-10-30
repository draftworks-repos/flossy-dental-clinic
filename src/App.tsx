import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { InitialLoader } from './components/InitialLoader';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>();
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>();

  const handleOpenBooking = (treatmentId?: string, doctorId?: string) => {
    setSelectedTreatment(treatmentId);
    setSelectedDoctor(doctorId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <BrowserRouter>
      {/* Initial 0% to 100% Loader with Business Name */}
      {loading && <InitialLoader onComplete={() => setLoading(false)} />}

      <ScrollToTop />

      {/* 
        Outer Framing matching reference:
        Pale blue background (#EEF5FF) with subtle outer spacing, surrounding 
        a large fluid white container (min(96%, 1840px)) with rounded corners.
      */}
      <div className="max-w-[1920px] w-full mx-auto bg-white flex flex-col transition-all">
        {/* Main Website Container Shell */}
          
          {/* Header */}
          <Header onOpenBooking={() => handleOpenBooking()} />

          {/* Page Main Content Area with fluid responsive gutters */}
          <main className="flex-1 page-content-padding py-6 sm:py-8 lg:py-10">
            <Routes>
              <Route path="/" element={<HomePage onOpenBooking={() => handleOpenBooking()} />} />
              <Route path="/about" element={<AboutPage onOpenBooking={() => handleOpenBooking()} />} />
              <Route path="/services" element={<ServicesPage onOpenBooking={() => handleOpenBooking()} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Footer - Inside the main container matching the visual reference */}
          <div className="page-content-padding pb-6 sm:pb-8 lg:pb-10">
            <Footer onOpenBooking={() => handleOpenBooking()} />
          </div>
        </div>

      {/* Global Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialTreatment={selectedTreatment}
        initialDoctor={selectedDoctor}
      />
    </BrowserRouter>
  );
}
