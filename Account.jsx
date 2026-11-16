
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserRound,
  ArrowRight,
  ChevronRight,
  Phone,
  ShieldCheck,
  ArrowLeft,
  RefreshCw,
  CheckCircle2
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./AccountPage.css";

export default function Account({ icons }) {
  const navigate = useNavigate();

  const [screen, setScreen] = useState("landing");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(value);
    setError("");
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(value);
    setError("");
  };

  // UI DEMO ONLY: No real SMS is sent.
  const handleSendOtp = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      setScreen("otp");
    }, 600);
  };

  // UI DEMO ONLY: No real OTP verification.
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    setError(
      "OTP verification is not connected yet. This is a UI preview."
    );
  };

  const goBack = () => {
    setError("");
    setOtp("");

    if (screen === "otp") {
      setScreen("mobile");
    } else {
      setScreen("landing");
    }
  };

  const restartLogin = () => {
    setScreen("landing");
    setMobile("");
    setOtp("");
    setError("");
  };

  return (
    <>
      <Navbar icons={icons} />

      <main className="account-page">

        {/* BREADCRUMB */}
        <div className="account-breadcrumb">
          <button
            type="button"
            onClick={() => navigate("/")}
          >
            HOME
          </button>

          <ChevronRight size={15} />

          <span>Account</span>
        </div>

        <section className="account-content">

          {/* LANDING SCREEN */}
          {screen === "landing" && (
            <div className="account-login-card">

              <div className="account-user-icon">
                <UserRound size={30} strokeWidth={1.8} />
              </div>

              <h1>Login to your account</h1>

              <p>
                Sign in to view your profile, bookings,
                subscriptions and more.
              </p>

              <button
                type="button"
                className="account-login-button"
                onClick={() => setScreen("mobile")}
              >
                <span>Login</span>

                <span className="account-arrow">
                  <ArrowRight size={20} />
                </span>
              </button>

            </div>
          )}

          {/* MOBILE NUMBER SCREEN */}
          {screen === "mobile" && (
            <div className="account-login-card account-auth-card">

              <button
                type="button"
                className="account-back-icon"
                onClick={goBack}
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="account-user-icon">
                <Phone size={28} strokeWidth={1.8} />
              </div>

              <h1>Login with Mobile</h1>

              <p>
                Enter your mobile number to continue
                to your Vedamandir account.
              </p>

              <form
                className="account-form"
                onSubmit={handleSendOtp}
              >

                <label htmlFor="mobile">
                  Mobile Number
                </label>

                <div className="account-mobile-input">

                  <span className="account-country-code">
                    🇮🇳 +91
                  </span>

                  <input
                    id="mobile"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Enter mobile number"
                    value={mobile}
                    onChange={handleMobileChange}
                    maxLength={10}
                    autoComplete="tel-national"
                    required
                  />

                </div>

                {error && (
                  <div className="account-error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="account-login-button"
                  disabled={loading}
                >
                  <span>
                    {loading ? "Please wait..." : "Continue"}
                  </span>

                  <span className="account-arrow">
                    <ArrowRight size={20} />
                  </span>
                </button>

              </form>

              <div className="account-security-note">
                <ShieldCheck size={17} />
                <span>Your mobile number is kept secure.</span>
              </div>

            </div>
          )}

          {/* OTP SCREEN */}
          {screen === "otp" && (
            <div className="account-login-card account-auth-card">

              <button
                type="button"
                className="account-back-icon"
                onClick={goBack}
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="account-user-icon">
                <ShieldCheck size={30} strokeWidth={1.8} />
              </div>

              <h1>Verify Your Number</h1>

              <p>
                Enter the 6-digit verification code for
                <strong> +91 {mobile}</strong>
              </p>

              <form
                className="account-form"
                onSubmit={handleVerifyOtp}
              >

                <label htmlFor="otp">
                  Enter OTP
                </label>

                <input
                  id="otp"
                  className="account-otp-input"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="------"
                  value={otp}
                  onChange={handleOtpChange}
                  maxLength={6}
                  required
                />

                {error && (
                  <div className="account-error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="account-login-button"
                >
                  <span>Verify & Login</span>

                  <span className="account-arrow">
                    <CheckCircle2 size={20} />
                  </span>
                </button>

              </form>

              <button
                type="button"
                className="account-resend-button"
                onClick={() => {
                  setOtp("");
                  setError(
                    "Resend OTP will be enabled when SMS authentication is connected."
                  );
                }}
              >
                <RefreshCw size={15} />
                Resend OTP
              </button>

              <div className="account-security-note">
                <ShieldCheck size={17} />
                <span>Secure mobile verification</span>
              </div>

            </div>
          )}

        </section>
      </main>

      <Footer icons={icons} />
    </>
  );
}
