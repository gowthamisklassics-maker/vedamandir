
import {
  CalendarDays,
  MapPin,
  ArrowRight,
  Flame
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import type { Puja } from "../data/pujas";

type Props = {
  puja: Puja;
};

export default function PujaCard({ puja }: Props) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Open the details page using the puja's ID.
    navigate(`/seva-details/${puja.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .puja-card {
          border: 1px solid #e9dfd9;
          border-radius: 13px;
          padding: 9px;
          display: flex;
          flex-direction: column;
          background: white;
          height: 100%;
        }

        .puja-image {
          height: 210px;
          border-radius: 8px;
          overflow: hidden;
          background: linear-gradient(130deg, #30150a, #a94d12);
          position: relative;
          display: grid;
          place-items: center;
        }

        .puja-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .puja-image-fallback {
          color: #ffcf68;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 11px;
        }

        .card-badge {
          text-align: center;
          color: #a32211;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .5px;
          margin: 15px 0 8px;
        }

        .puja-card h3 {
          font-size: 16px;
          line-height: 1.45;
          margin: 0 5px 10px;
        }

        .benefits {
          padding-left: 18px;
          color: #26933c;
          font-size: 11px;
          line-height: 1.8;
          min-height: 58px;
        }

        .meta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #777;
          font-size: 12px;
          margin: 5px;
        }

        .meta svg {
          color: #a32211;
          flex-shrink: 0;
        }

        .card-button {
          margin: auto 2px 2px;
          padding: 12px;
          width: calc(100% - 4px);
          border: none;
          border-radius: 8px;
          background: #08ad65;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font: inherit;
          font-weight: 700;
        }

        .card-button:hover {
          background: #078b52;
        }

        @media(max-width: 620px) {
          .puja-image {
            height: 230px;
          }
        }
      `}</style>

      <article className="puja-card">
        <div className="puja-image">
          <div className="puja-image-fallback">
            <Flame size={32} />
            <span>{puja.badge}</span>
          </div>

          <img
            src={puja.image}
            alt={puja.title}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <p className="card-badge">
          ✦ {puja.badge} ✦
        </p>

        <h3>{puja.title}</h3>

        <ul className="benefits">
          {puja.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="meta">
          <MapPin size={16} />
          {puja.temple}
        </p>

        <p className="meta">
          <CalendarDays size={16} />
          {puja.date}
        </p>

        <button
          type="button"
          className="card-button"
          onClick={handleBookNow}
        >
          Book Puja Now
          <ArrowRight size={17} />
        </button>
      </article>
    </>
  );
}
