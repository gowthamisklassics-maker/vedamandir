
import React from "react";
import { useNavigate } from "react-router-dom";

import { Flame, ArrowLeft } from "lucide-react";

import { pujas } from "../data/pujas";
import PujaCard from "../components/PujaCard";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export default function Pujas({ icons }) {

  // Correct: Hook is inside the component
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .pujas-page {
          min-height: 70vh;
          background: #fff;
          padding: 35px 5% 80px;
        }

        .pujas-heading {
          text-align: center;
          margin-bottom: 35px;
        }

        .pujas-heading .pujas-label {
          color: #a32211;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .pujas-heading h1 {
          color: #342018;
          font-size: 34px;
          margin: 12px 0;
        }

        .pujas-heading p {
          color: #777;
          font-size: 15px;
          line-height: 1.7;
          max-width: 650px;
          margin: auto;
        }

        .pujas-back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          background: transparent;
          color: #a32211;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 25px;
        }

        .pujas-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          max-width: 1250px;
          margin: auto;
          align-items: stretch;
        }

        .pujas-empty {
          text-align: center;
          padding: 70px 20px;
          color: #777;
        }

        .pujas-empty svg {
          color: #a32211;
        }

        @media (max-width: 950px) {
          .pujas-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .pujas-page {
            padding: 25px 14px 60px;
          }

          .pujas-heading h1 {
            font-size: 27px;
          }

          .pujas-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <Navbar icons={icons} />

      <main className="pujas-page">

        {/* BACK BUTTON */}
        <button
          type="button"
          className="pujas-back-button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={17} />
          Back to Home
        </button>

        {/* PAGE HEADING */}
        <header className="pujas-heading">

          <p className="pujas-label">
            VEDAMANDIR
          </p>

          <h1>Book Your Puja</h1>

          <p>
            Select your preferred puja and book online.
            Receive divine blessings through traditional
            Vedic rituals performed by experienced priests.
          </p>

        </header>

        {/* PUJA CARDS */}
        {pujas && pujas.length > 0 ? (

          <section className="pujas-grid">

            {pujas.map((puja) => (
              <PujaCard
                key={puja.id}
                puja={puja}
              />
            ))}

          </section>

        ) : (

          /* EMPTY STATE */
          <div className="pujas-empty">

            <Flame size={42} />

            <h2>No Pujas Available</h2>

            <p>
              Please check again later.
            </p>

          </div>

        )}

      </main>

      {/* FOOTER */}
      <Footer icons={icons} />

      {/* FLOATING CONTACT */}
      <FloatingContact icons={icons} />

    </>
  );
}
