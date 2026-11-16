
import React from "react";
import { useNavigate } from "react-router-dom";
import { pujas } from "../data/pujas";
import PujaCard from "../components/PujaCard";

const PujaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-50 p-6">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-orange-600"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-3">
        Explore Our Pujas
      </h1>

      <p className="text-gray-600 mb-8">
        Choose your preferred Puja and receive divine blessings.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pujas.map((puja) => (
          <PujaCard key={puja.id} puja={puja} />
        ))}
      </div>

    </div>
  );
};

export default PujaPage;
