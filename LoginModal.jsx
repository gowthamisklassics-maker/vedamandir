
import React, { useState, useEffect } from "react";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onContinue }) {
  const [step, setStep] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [seconds, setSeconds] = useState(50);

  useEffect(() => {
    if (step !== "otp" || seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [step, seconds]);

  useEffect(() => {
    if (isOpen) {
      setStep("mobile");
      setMobile("");
      setOtp(["", "", "", ""]);
      setSeconds(50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleMobileContinue = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    // Demo only: no real SMS is sent here.
    setStep("otp");
    setSeconds(50);
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      alert("Please enter the complete OTP");
      return;
    }

    // Demo OTP: 1234.
    // Replace this check with backend OTP verification.
    if (enteredOtp !== "1234") {
      alert("Invalid OTP. For demo, enter 1234.");
      return;
    }

    onContinue(mobile);
  };

  const resendOtp = () => {
    if (seconds > 0) return;

    setOtp(["", "", "", ""]);
    setSeconds(50);

    // Connect your SMS OTP service here.
    alert("Demo OTP is 1234");
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">

        <button className="login-close" onClick={onClose}>
          ×
        </button>

        {step === "mobile" ? (
          <>
            <h2>Login or signup</h2>

            <div className="mobile-input-box">
              <span>🇮🇳</span>
              <span>+91</span>

              <input
                type="tel"
                placeholder="Enter mobile number"
                maxLength="10"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, ""))
                }
              />
            </div>

            <button
              className="login-continue"
              onClick={handleMobileContinue}
            >
              Continue <span>➜</span>
            </button>

            <p>
              By tapping Continue, you agree to receive notifications
              and our terms and conditions.
            </p>
          </>
        ) : (
          <>
            <h2>Enter OTP</h2>

            <p className="otp-subtitle">
              OTP has been sent to +91 {mobile}
            </p>

            <div className="otp-input-container">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) =>
                    handleOtpChange(e.target.value, index)
                  }
                />
              ))}
            </div>

            <div className="resend-otp">
              {seconds > 0 ? (
                <>
                  Resend code in <strong>00:{String(seconds).padStart(2, "0")}</strong>
                </>
              ) : (
                <button onClick={resendOtp}>
                  Resend code
                </button>
              )}
            </div>

            <button
              className="login-continue otp-continue"
              onClick={handleVerifyOtp}
            >
              Continue →
              <span>➜</span>
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default LoginModal;
