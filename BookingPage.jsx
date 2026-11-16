
import React, { useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

import LoginModal from "../components/LoginModal";
import { pujas } from "../data/pujas";
import "./BookingPage.css";

function BookingPage({ puja: pujaProp, onBack }) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Get Puja data
  const selectedPuja =
  pujaProp ||
  location.state?.seva ||
  location.state?.puja ||
  location.state?.selectedPuja ||
  pujas.find(
    (item) => String(item.id) === String(id)
  );
  const [showLogin, setShowLogin] = useState(true);
  const [showDevoteeForm, setShowDevoteeForm] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    gotra: "",
    whatsapp: "",
    email: ""
  });

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/pujas");
    }
  };

  // Handle invalid Puja
  if (!selectedPuja) {
    return (
      <div className="booking-error">
        <h2>Puja not found</h2>
        <p>Please select a Puja to continue booking.</p>

        <button type="button" onClick={handleBack}>
          Back to Pujas
        </button>
      </div>
    );
  }

  const pujaName =
    selectedPuja.title ||
    selectedPuja.name ||
    "Selected Puja";

  const pujaPrice =
    selectedPuja.price ??
    selectedPuja.amount ??
    0;

  const pujaImage =
    selectedPuja.image ||
    selectedPuja.img ||
    "";

  const handleMobileContinue = (mobile) => {
    setMobileNumber(mobile);

    setFormData((prev) => ({
      ...prev,
      whatsapp: mobile
    }));

    setShowLogin(false);
    setShowDevoteeForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingContinue = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter the devotee name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.whatsapp)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const bookingDetails = {
      puja: selectedPuja,
      mobileNumber,
      devoteeDetails: {
        name: formData.name,
        gotra: formData.gotra,
        whatsapp: formData.whatsapp,
        email: formData.email
      },
      price: pujaPrice
    };

    console.log("Booking Details:", bookingDetails);

    alert("Devotee details submitted successfully!");
  };

  return (
    <div className="booking-page">

      <LoginModal
        isOpen={showLogin}
        onClose={handleBack}
        onContinue={handleMobileContinue}
      />

      {showDevoteeForm && (
        <div className="devotee-container">

          <div className="devotee-header">
            <h2>Enter devotee details</h2>

            <button
              type="button"
              onClick={handleBack}
              aria-label="Close booking"
            >
              ×
            </button>
          </div>

          <div className="devotee-content">

            <button
              type="button"
              className="change-package"
              onClick={handleBack}
            >
              ← Change package
            </button>

            <div className="selected-puja">

              {pujaImage && (
                <img
                  src={pujaImage}
                  alt={pujaName}
                  className="selected-puja-image"
                />
              )}

              <div>
                <h4>{pujaName}</h4>
                <p>Family Puja · 4 Devotees</p>
              </div>

              <strong>
                ₹{Number(pujaPrice).toLocaleString("en-IN")}
              </strong>

            </div>

            <h3>Devotee information</h3>

            <form onSubmit={handleBookingContinue}>

              <label htmlFor="devotee-name">
                Devotee Name *
              </label>

              <input
                id="devotee-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="devotee-gotra">
                Gotra
              </label>

              <input
                id="devotee-gotra"
                type="text"
                name="gotra"
                placeholder="Enter your gotra"
                value={formData.gotra}
                onChange={handleChange}
              />

              <label htmlFor="devotee-whatsapp">
                WhatsApp Number *
              </label>

              <input
                id="devotee-whatsapp"
                type="tel"
                name="whatsapp"
                placeholder="Enter your mobile number"
                value={formData.whatsapp}
                onChange={handleChange}
                maxLength={10}
                pattern="[0-9]{10}"
                required
              />

              <label htmlFor="devotee-email">
                Email Address
              </label>

              <input
                id="devotee-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="devotee-continue"
              >
                Continue <span>➜</span>
              </button>

              <p className="booking-note">
                Your details are used for the puja booking process.
              </p>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default BookingPage;
