
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  Flame,
  Menu,
  X,
  MessageCircle,
  Globe,
  ArrowRight,
  Video,
  ShieldCheck,
  Landmark,
  HandHeart,
  ClipboardList,
  CheckCircle,
  CalendarDays,
  MapPin,
  Plus,
  Mail,
  Phone,
  Check,
  Camera,
  Play,
  Share2
} from "lucide-react";

import { pujas } from "./data/pujas";
import { faqs } from "./data/faqs";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import TrustBadges from "./components/TrustBadges";
import BookingProcess from "./components/BookingProcess";

import PujaSection from "./components/PujaSection";
import PujaCard from "./components/PujaCard";
import PujaGallery from "./components/PujaGallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

import Home from "./pages/Home";
import Pujas from "./pages/Pujas";
import Sevas from "./pages/Sevas";
import Account from "./pages/Account";
import SevaDetails from "./pages/SevaDetails";
import BookingPage from "./pages/BookingPage";
import PujaDetails from "./pages/PujaDetails";

import { LanguageProvider } from "./context/LanguageContext";


// ICONS
const icons = {
  Flame,
  Menu,
  X,
  MessageCircle,
  Globe,
  ArrowRight,
  Video,
  ShieldCheck,
  Landmark,
  HandHeart,
  ClipboardList,
  CheckCircle,
  CalendarDays,
  MapPin,
  Plus,
  Mail,
  Phone,
  Check,
  Instagram: Camera,
  Facebook: Share2,
  Youtube: Play
};


// SHARED COMPONENTS
const components = {
  Navbar,
  Hero,
  TrustStrip,
  TrustBadges,
  BookingProcess,
  PujaSection,
  PujaCard,
  PujaGallery,
  Testimonials,
  FAQ,
  Footer,
  FloatingContact
};


// HOME PAGE
function HomePage() {
  return (
    <Home
      icons={icons}
      components={components}
      pujas={pujas}
      faqs={faqs}
    />
  );
}


// PUJAS PAGE
function PujasPage() {
  return (
    <>
      <Navbar icons={icons} />
      <Pujas icons={icons} />
      <Footer icons={icons} />
      <FloatingContact icons={icons} />
    </>
  );
}


// SEVAS PAGE
function SevasPage() {
  return (
    <>
      <Navbar icons={icons} />
      <Sevas icons={icons} />
      <Footer icons={icons} />
      <FloatingContact icons={icons} />
    </>
  );
}


// ACCOUNT PAGE
function AccountPage() {
  return (
    <>
      <Navbar icons={icons} />
      <Account icons={icons} />
      <Footer icons={icons} />
      <FloatingContact icons={icons} />
    </>
  );
}


// SEVA DETAILS PAGE
function SevaDetailsPage() {
  return (
    <>
      <Navbar icons={icons} />
      <SevaDetails icons={icons} />
      <Footer icons={icons} />
      <FloatingContact icons={icons} />
    </>
  );
}


// PUJA DETAILS PAGE
function PujaDetailsPage() {
  return (
    <>
      <Navbar icons={icons} />
      <PujaDetails icons={icons} />
      <Footer icons={icons} />
      <FloatingContact icons={icons} />
    </>
  );
}


// PUJA BOOKING PAGE
function BookingPageWrapper() {
  return (
    <>
      <Navbar icons={icons} />
      <BookingPage />
      <Footer icons={icons} />
      <FloatingContact icons={icons} />
    </>
  );
}


// MAIN APP
export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* PUJAS LISTING */}
          <Route
            path="/pujas"
            element={<PujasPage />}
          />

          {/* INDIVIDUAL PUJA DETAILS */}
          <Route
            path="/puja/:id"
            element={<PujaDetailsPage />}
          />

          {/* DIRECT PUJA BOOKING */}
          <Route
            path="/booking/:id"
            element={<BookingPageWrapper />}
          />

          {/* SEVAS LISTING */}
          <Route
            path="/sevas"
            element={<SevasPage />}
          />

          {/* ACCOUNT */}
          import Account from "./pages/Account";

// Inside your Routes:
<Route
  path="/account"
  element={<Account icons={icons} />}
/>

          {/* INDIVIDUAL SEVA DETAILS */}
          <Route
            path="/seva-details/:id"
            element={<SevaDetailsPage />}
          />

          {/* FALLBACK */}
          <Route
            path="*"
            element={<HomePage />}
          />

        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
