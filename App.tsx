
import React from "react";

// =====================================
// ALL ICON IMPORTS
// =====================================

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
  Users,
  Share2,
  Play
} from "lucide-react";

// =====================================
// DATA
// =====================================

import { pujas } from "./data/pujas";
import { faqs } from "./data/faqs";

// =====================================
// COMPONENTS
// =====================================

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

// =====================================
// HOME PAGE
// =====================================

import Home from "./pages/Home";

// =====================================
// CENTRALIZED ICONS
// =====================================

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
  Camera,
  Users,
  Share2,
  Play,

  Instagram: Camera,
  Facebook: Users,
  Youtube: Video
};

// =====================================
// CENTRALIZED COMPONENTS
// =====================================

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

// =====================================
// MAIN APPLICATION
// =====================================

export default function App() {
  return (
    <Home
      icons={icons}
      components={components}
      pujas={pujas}
      faqs={faqs}
    />
  );
}
