
import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import "./Booking.css";
function BookingPage() {
  const [showLogin, setShowLogin] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");

  // Open Login Popup
  const handleProceed = () => {
    setShowLogin(true);
  };

  // Handle Mobile Number
  const handleLoginContinue = (phone) => {
    setPhoneNumber(phone);

    console.log("Mobile Number:", phone);

    // TODO: Connect your OTP API here.
    // After successful OTP verification,
    // continue with the booking process.
  };

  return (
    <div className="booking-page">

      {/* Booking Page Header */}
      <div className="booking-header">
        <h1>Complete Your Booking</h1>
        <p>Review your puja booking details before proceeding.</p>
      </div>

      {/* Booking Details */}
      <div className="booking-content">

        <div className="booking-card">

          <h2>Booking Details</h2>

          <div className="booking-info">
            <p>
              <strong>Puja Name:</strong> Your Selected Puja
            </p>

            <p>
              <strong>Booking Amount:</strong> ₹1,499
            </p>

            <p>
              <strong>Status:</strong> Ready to Book
            </p>
          </div>

          <button
            className="proceed-btn"
            onClick={handleProceed}
          >
            Proceed
          </button>

        </div>

      </div>

      {/* Login / Signup Popup */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onContinue={handleLoginContinue}
      />

    </div>
  );
}

export default BookingPage;
