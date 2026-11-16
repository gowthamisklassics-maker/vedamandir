
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

import { pujas } from "../data/pujas";

const PujaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const puja = pujas.find(
    (item) => String(item.id) === String(id)
  );

  if (!puja) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Puja Not Found</h1>

        <button
          onClick={() => navigate("/pujas")}
          className="mt-4 text-orange-600"
        >
          Back to Pujas
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50">

      <div className="max-w-6xl mx-auto px-6 py-8">

        <button
          onClick={() => navigate("/pujas")}
          className="flex items-center gap-2 text-orange-700 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Pujas
        </button>

        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">

          <img
            src={puja.image}
            alt={puja.title || puja.name}
            className="w-full h-full min-h-80 object-cover"
          />

          <div className="p-7 md:p-10">

            <span className="text-orange-600 font-semibold">
              DIVINE PUJA
            </span>

            <h1 className="text-3xl font-bold text-gray-800 mt-3">
              {puja.title || puja.name}
            </h1>

            <p className="text-gray-600 mt-5 leading-7">
              {puja.description}
            </p>

            <div className="mt-6">
              <h3 className="font-bold text-gray-800">
                Puja Benefits
              </h3>

              <div className="mt-3 space-y-3">
                {puja.benefits?.map((benefit, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <CheckCircle className="text-green-600" size={19} />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 border-t pt-5">
              <p className="text-gray-500">
                Duration: {puja.duration}
              </p>

              <h2 className="text-3xl font-bold text-orange-600 mt-3">
                ₹{puja.price}
              </h2>
            </div>

            {/* Navigate directly to Sevas page */}
            <button
              onClick={() => navigate("/sevas")}
              className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold transition"
            >
              Book Puja Now
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PujaDetails;
