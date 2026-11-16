
import React, { useMemo, useState } from "react";

interface PujaSectionProps {
  icons: Record<string, React.ElementType>;
  pujas: any[];
}

export default function PujaSection({
  icons,
  pujas
}: PujaSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const {
    MapPin,
    CalendarDays,
    ArrowRight,
    CheckCircle
  } = icons;

  const filters = ["All", "Deity", "Dosha", "Benefit"];

  const filteredPujas = useMemo(() => {
    if (activeFilter === "All") return pujas;

    return pujas.filter((puja) => {
      const category = String(
        puja.category || puja.type || puja.filter || ""
      ).toLowerCase();

      return category.includes(activeFilter.toLowerCase());
    });
  }, [pujas, activeFilter]);

  return (
    <>
      <style>{`
        /* =====================================
           OUR PUJAS SECTION
        ===================================== */

        .vm-pujas,
        .vm-pujas * {
          box-sizing: border-box;
        }

        .vm-pujas {
          width: 100%;
          padding: 48px 24px 75px;
          background: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .vm-pujas-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Heading and filters */

        .vm-pujas-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 48px;
        }

        .vm-pujas-title {
          margin: 0;
          color: #501008;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -1.5px;
        }

        .vm-pujas-filters {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .vm-puja-filter {
          min-width: 74px;
          height: 40px;
          padding: 0 21px;
          border: 1px solid #e9e9e9;
          border-radius: 25px;
          background: #ffffff;
          color: #292929;
          font-size: 13px;
          cursor: pointer;
          transition: all .2s ease;
        }

        .vm-puja-filter:hover {
          border-color: #00ad5b;
          color: #00a85a;
        }

        .vm-puja-filter.active {
          background: #00ad5b;
          border-color: #00ad5b;
          color: #ffffff;
          font-weight: 700;
        }

        /* Card grid */

        .vm-puja-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          align-items: stretch;
        }

        /* Individual card */

        .vm-puja-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 8px 8px 10px;
          background: #ffffff;
          border: 1px solid #e8ddd7;
          border-radius: 13px;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .vm-puja-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(60, 25, 10, .09);
        }

        /* Puja image */

        .vm-puja-image {
          display: block;
          width: 100%;
          aspect-ratio: 1.5 / 1;
          object-fit: cover;
          border-radius: 9px;
          background: #f5eee9;
        }

        /* Decorative category label */

        .vm-puja-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 39px;
          color: #a51d0d;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .35px;
          text-align: center;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
        }

        .vm-puja-label::before,
        .vm-puja-label::after {
          content: "";
          width: 28px;
          height: 1px;
          flex-shrink: 0;
          background: #b52b1a;
        }

        /* Title */

        .vm-puja-name {
          min-height: 48px;
          margin: 0 7px 7px;
          color: #373737;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.45;
        }

        /* Benefits */

        .vm-puja-benefits {
          margin: 0 7px 10px;
          color: #269b39;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.65;
        }

        /* Temple and date */

        .vm-puja-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 0 7px 17px;
          color: #707070;
          font-size: 15px;
          line-height: 1.4;
        }

        .vm-puja-detail {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .vm-puja-detail svg {
          width: 17px;
          height: 17px;
          flex-shrink: 0;
          color: #a51d0d;
          margin-top: 1px;
        }

        /* Booking button */

        .vm-puja-footer {
          margin-top: auto;
          padding: 12px 8px 0;
          border-top: 1px solid #eeeeee;
        }

        .vm-puja-button {
          width: 100%;
          min-height: 51px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: none;
          border-radius: 9px;
          background: #00ad5b;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: background .2s ease;
        }

        .vm-puja-button:hover {
          background: #008f4b;
        }

        .vm-puja-button svg {
          width: 18px;
          height: 18px;
        }

        .vm-puja-empty {
          grid-column: 1 / -1;
          padding: 40px;
          text-align: center;
          color: #777777;
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1000px) {
          .vm-puja-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .vm-pujas-title {
            font-size: 42px;
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 650px) {
          .vm-pujas {
            padding: 35px 16px 50px;
          }

          .vm-pujas-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 28px;
          }

          .vm-pujas-title {
            font-size: 36px;
          }

          .vm-pujas-filters {
            width: 100%;
            gap: 7px;
            overflow-x: auto;
            padding-bottom: 5px;
          }

          .vm-puja-filter {
            min-width: auto;
            padding: 0 16px;
            flex-shrink: 0;
          }

          .vm-puja-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .vm-puja-name {
            font-size: 17px;
          }

          .vm-puja-image {
            aspect-ratio: 1.5 / 1;
          }
        }
      `}</style>

      <section className="vm-pujas" id="pujas">
        <div className="vm-pujas-container">

          {/* HEADING AND FILTERS */}

          <div className="vm-pujas-header">

            <h2 className="vm-pujas-title">
              Our Pujas
            </h2>

            <div className="vm-pujas-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`vm-puja-filter ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {activeFilter === filter && (
                    <span style={{ marginRight: 6 }}>✓</span>
                  )}
                  {filter}
                </button>
              ))}
            </div>

          </div>

          {/* PUJA CARDS */}

          <div className="vm-puja-grid">

            {filteredPujas.length > 0 ? (
              filteredPujas.map((puja, index) => {

                const image =
                  puja.image ||
                  puja.imageUrl ||
                  puja.img ||
                  "";

                const title =
                  puja.title ||
                  puja.name ||
                  "Puja";

                const label =
                  puja.label ||
                  puja.subtitle ||
                  puja.category ||
                  "SPECIAL PUJA";

                const benefits = Array.isArray(puja.benefits)
                  ? puja.benefits.join("  |  ")
                  : puja.benefits || puja.benefit || "";

                const temple =
                  puja.temple ||
                  puja.location ||
                  "Sacred Temple";

                const date =
                  puja.date ||
                  "Contact for date";

                return (
                  <article className="vm-puja-card" key={puja.id || index}>

                    {/* IMAGE */}

                    <img
                      className="vm-puja-image"
                      src={image}
                      alt={title}
                      loading="lazy"
                    />

                    {/* CATEGORY */}

                    <div className="vm-puja-label">
                      {label}
                    </div>

                    {/* TITLE */}

                    <h3 className="vm-puja-name">
                      {title}
                    </h3>

                    {/* BENEFITS */}

                    <div className="vm-puja-benefits">
                      {benefits}
                    </div>

                    {/* DETAILS */}

                    <div className="vm-puja-details">

                      <div className="vm-puja-detail">
                        {MapPin && <MapPin />}
                        <span>{temple}</span>
                      </div>

                      <div className="vm-puja-detail">
                        {CalendarDays && <CalendarDays />}
                        <span>{date}</span>
                      </div>

                    </div>

                    {/* BUTTON */}

                    <div className="vm-puja-footer">
                      <a
                        href={puja.link || "#"}
                        className="vm-puja-button"
                      >
                        Participate Now
                        {ArrowRight && <ArrowRight />}
                      </a>
                    </div>

                  </article>
                );
              })
            ) : (
              <div className="vm-puja-empty">
                No pujas found in this category.
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
}
