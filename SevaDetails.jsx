
import React, { useState } from "react";

import {
  useParams,
  useNavigate,
  useLocation
} from "react-router-dom";

import {
  MapPin,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Headphones,
  Award,
  PlayCircle
} from "lucide-react";

import { pujas } from "../data/pujas";
import "./SevaDetails.css";

// ==========================================
// DEFAULT DATA
// ==========================================

const defaultBenefits = [
  {
    title: "Blessing of long life",
    description:
      "This sacred puja is performed to seek blessings for good health, protection and long life."
  },
  {
    title: "End of all obstacles",
    description:
      "Devotees pray for the removal of difficulties and obstacles in personal and professional life."
  },
  {
    title: "Peace of mind and protection",
    description:
      "The ritual is performed to seek peace, courage and spiritual protection."
  },
  {
    title: "Prosperity and happiness",
    description:
      "Devotees seek blessings for prosperity, happiness and harmony in the family."
  }
];

const defaultProcedure = [
  {
    title: "Ganpati, Kalash and Navgraha Pujan",
    description:
      "Invocation and worship of Lord Ganesh, the Navgrahas and other deities."
  },
  {
    title: "Name-Gotra Sankalp",
    description:
      "A special Vedic sankalp is performed using the devotee's name and gotra."
  },
  {
    title: "Main Mantra Jaap",
    description:
      "The main mantra chanting is performed by experienced Vedic priests."
  },
  {
    title: "Havan and Sacred Offerings",
    description:
      "Offerings are made into the sacred fire with Vedic mantras and traditional materials."
  },
  {
    title: "Purnahuti and Maha Aarti",
    description:
      "The ritual concludes with Purnahuti and prayers for the well-being of devotees."
  }
];

const defaultFaqs = [
  {
    question:
      "Can this puja be done in the name of a seriously ill person?",
    answer:
      "Yes. You can provide the devotee's name and gotra during booking. The priests can perform the sankalp in their name."
  },
  {
    question:
      "What is the importance of this puja?",
    answer:
      "Devotees perform this puja to seek divine blessings, peace, protection and well-being."
  },
  {
    question:
      "Will I receive a video of the puja?",
    answer:
      "The puja video can be shared through WhatsApp after the ritual, according to the service arrangements."
  },
  {
    question:
      "Can I get the benefit of this puja without being present at the temple myself?",
    answer:
      "You can participate through the name and gotra sankalp arrangements provided during booking."
  }
];

const defaultReviews = [
  {
    type: "Individual",
    text:
      "What a platform! I never thought that Veda Mandir people perform Puja so nicely.",
    name: "Ramesh Kumar",
    city: "Bengaluru",
    initial: "R"
  },
  {
    type: "Couple Puja",
    text:
      "The puja was performed beautifully. The process was smooth and satisfying.",
    name: "Lakshmi Prasanna",
    city: "Vijayawada",
    initial: "ల"
  },
  {
    type: "Private Puja",
    text:
      "A wonderful devotional experience. The arrangements were very good.",
    name: "Sujatha",
    city: "Dallas, USA",
    initial: "స"
  }
];

// ==========================================
// SEVA DETAILS COMPONENT
// ==========================================

export default function SevaDetails({ seva: sevaProp }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // ==========================================
  // GET SELECTED SEVA
  // ==========================================

  const seva =
    sevaProp ||
    location.state?.seva ||
    location.state?.puja ||
    location.state?.selectedPuja ||
    pujas.find((item) => String(item.id) === String(id));

  // ==========================================
  // STATES
  // ==========================================

  const [activeImage, setActiveImage] = useState(0);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [templeExpanded, setTempleExpanded] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(false);

  // ==========================================
  // BOOKING HANDLER
  // ==========================================

  const handleBooking = () => {
    if (!seva) {
      console.error("Selected seva could not be found.");
      return;
    }

    navigate(`/booking/${seva.id}`, {
      state: {
        seva: seva,
        puja: seva,
        selectedPuja: seva
      }
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // ==========================================
  // HANDLE MISSING SEVA
  // ==========================================

  if (!seva) {
    return (
      <div className="sd-loading">
        <h2>Seva not found</h2>

        <p>
          The selected seva could not be found.
        </p>

        <button
          type="button"
          onClick={() => navigate("/sevas")}
        >
          Back to Sevas
        </button>
      </div>
    );
  }

  // ==========================================
  // SEVA DETAILS DATA
  // ==========================================

  const gallery =
    seva.gallery && seva.gallery.length > 0
      ? seva.gallery
      : seva.image
        ? [seva.image]
        : [];

  const benefits = defaultBenefits.map((item, index) => ({
    ...item,
    ...(seva.benefits?.[index]
      ? { title: seva.benefits[index] }
      : {})
  }));

  const procedures =
    seva.procedure && seva.procedure.length > 0
      ? seva.procedure
      : defaultProcedure;

  const faqs =
    seva.faqs && seva.faqs.length > 0
      ? seva.faqs
      : defaultFaqs;

  const price = seva.price ?? seva.amount ?? 999;

  const sevaName =
    seva.title || seva.name || "Selected Seva";

  // ==========================================
  // GALLERY FUNCTIONS
  // ==========================================

  const previousImage = () => {
    if (gallery.length <= 1) return;

    setActiveImage(
      (current) =>
        (current - 1 + gallery.length) % gallery.length
    );
  };

  const nextImage = () => {
    if (gallery.length <= 1) return;

    setActiveImage(
      (current) =>
        (current + 1) % gallery.length
    );
  };

  // ==========================================
  // MAIN RENDER
  // ==========================================

  return (
    <main className="sd-page">

      {/* TOP IMAGE AND SEVA INFORMATION */}

      <section className="sd-hero">

        <div className="sd-gallery-layout">

          <div className="sd-thumbnails">

            {gallery.map((image, index) => (
              <button
                type="button"
                key={`${image}-${index}`}
                className={
                  activeImage === index ? "active" : ""
                }
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`${sevaName} ${index + 1}`}
                />
              </button>
            ))}

          </div>

          <div className="sd-main-image">

            {gallery.length > 0 && (
              <img
                src={gallery[activeImage]}
                alt={sevaName}
              />
            )}

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  className="sd-image-arrow sd-image-prev"
                  onClick={previousImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft />
                </button>

                <button
                  type="button"
                  className="sd-image-arrow sd-image-next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight />
                </button>
              </>
            )}

          </div>

        </div>

        <div className="sd-hero-info">

          <div className="sd-special-label">
            ✦ {seva.badge || seva.schedule || "SPECIAL SEVA"} ✦
          </div>

          <h1>{sevaName}</h1>

          <div className="sd-highlight-benefits">
            {Array.isArray(seva.benefits)
              ? seva.benefits.join("  |  ")
              : ""}
          </div>

          <div className="sd-detail-line">
            <MapPin size={18} />

            <span>
              {seva.temple ||
                seva.location ||
                "Temple details unavailable"}
            </span>
          </div>

          <div className="sd-detail-line">
            <CalendarDays size={18} />

            <span>
              {seva.date ||
                seva.time ||
                seva.schedule ||
                "Schedule to be confirmed"}
            </span>
          </div>

          <div className="sd-rating-block">

            <small>Ratings</small>

            <div>
              <span>⭐</span>
              <strong>4.9</strong>
              <span>(20K+)</span>
            </div>

          </div>

          <div className="sd-price-booking">

            <div className="sd-family-info">

              <strong>Family Puja</strong>

              <small>
                4 Devotees <ChevronDown size={13} />
              </small>

            </div>

            <button
              type="button"
              className="sd-top-book-button"
              onClick={handleBooking}
            >
              <strong>
                ₹{Number(price).toLocaleString("en-IN")}
              </strong>

              <span></span>

              Participate Now
            </button>

          </div>

          <p className="sd-no-charge">
            You won't be charged yet
          </p>

        </div>

      </section>

      {/* SECTION NAVIGATION */}

      <nav className="sd-section-nav">
        <a href="#about">About Pooja</a>
        <a href="#benefits">Pooja Benefits</a>
        <a href="#procedure">Pooja Procedure</a>
        <a href="#receive">What You Will Receive</a>
        <a href="#temple">Temple Details</a>
        <a href="#faqs">Frequently Asked Questions (FAQs)</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
      </nav>

      {/* ABOUT POOJA */}

      <section className="sd-content-section" id="about">

        <h2>About pooja</h2>

        <h4>Purpose of {sevaName}</h4>

        <p>
          {seva.description ||
            `Participate in ${sevaName}, a sacred Vedic ritual performed by experienced priests to seek divine blessings, peace and prosperity.`}
        </p>

        {aboutExpanded && (
          <p>
            This traditional worship is conducted according to
            Vedic practices. Devotees can provide their name and
            gotra for the sankalp and participate in the ritual
            through the available booking arrangements.
          </p>
        )}

        <button
          type="button"
          className="sd-read-more"
          onClick={() => setAboutExpanded(!aboutExpanded)}
        >
          {aboutExpanded ? "Read Less" : "Read More"}
        </button>

      </section>

      {/* BENEFITS */}

      <section className="sd-content-section" id="benefits">

        <h2>Pooja Benefits</h2>

        <div className="sd-timeline">

          {benefits.map((benefit, index) => (
            <div
              className="sd-timeline-item"
              key={index}
            >
              <span className="sd-timeline-number">
                {index + 1}
              </span>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* PROCEDURE */}

      <section className="sd-content-section" id="procedure">

        <h2>Pooja Procedure</h2>

        <div className="sd-timeline">

          {procedures.map((step, index) => (
            <div
              className="sd-timeline-item"
              key={index}
            >
              <span className="sd-timeline-number">
                {index + 1}
              </span>

              <div>

                {index === 4 && (
                  <span className="sd-core-ritual">
                    ✦ The Core Ritual
                  </span>
                )}

                <h3>{step.title}</h3>
                <p>{step.description}</p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* WHAT YOU WILL RECEIVE */}

      <section className="sd-content-section" id="receive">

        <h2>What You Will Receive</h2>

        <div className="sd-receive-row">

          <span className="sd-receive-icon">
            <PlayCircle size={18} />
          </span>

          <p>
            {seva.receive?.[0] ||
              "The full, clear video of the puja and havan will be sent to your WhatsApp within 48 hours."}
          </p>

        </div>

        {seva.receive?.slice(1).map((item, index) => (
          <div
            className="sd-receive-row"
            key={index}
          >
            <span className="sd-receive-icon">
              <CheckCircle size={18} />
            </span>

            <p>{item}</p>

          </div>
        ))}

      </section>

      {/* TEMPLE DETAILS */}

      <section className="sd-content-section" id="temple">

        <h2>Temple Details</h2>

        <div className="sd-temple-layout">

          {seva.image && (
            <img
              src={seva.image}
              alt={seva.temple || "Temple"}
              className="sd-temple-image"
            />
          )}

          <div className="sd-temple-info">

            <h3>{seva.temple || "Temple details"}</h3>

            <div className="sd-temple-location">
              <MapPin size={16} />
              {seva.location ||
                seva.temple ||
                "Location unavailable"}
            </div>

            <p>
              {seva.description ||
                `The puja is performed at ${seva.temple || "the selected temple"} according to traditional Vedic practices.`}
            </p>

            {templeExpanded && (
              <p>
                Temple arrangements and ritual schedules may
                vary according to the temple's calendar.
              </p>
            )}

            <button
              type="button"
              className="sd-read-more"
              onClick={() => setTempleExpanded(!templeExpanded)}
            >
              {templeExpanded ? "Read Less" : "Read More"}
            </button>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="sd-content-section" id="faqs">

        <h2>Frequently Asked Questions (FAQs)</h2>

        <div className="sd-faq-list">

          {faqs.map((faq, index) => (
            <details
              className="sd-faq"
              key={index}
            >
              <summary>
                <span>{faq.question}</span>
                <ChevronDown size={19} />
              </summary>

              <p>{faq.answer}</p>

            </details>
          ))}

        </div>

      </section>

      {/* GALLERY */}

      <section className="sd-content-section" id="gallery">

        <h2>Puja Gallery</h2>

        <div className="sd-gallery-grid">

          {gallery.map((image, index) => (
            <button
              type="button"
              key={`${image}-${index}`}
              onClick={() => {
                setActiveImage(index);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
            >
              <img
                src={image}
                alt={`${sevaName} gallery ${index + 1}`}
              />
            </button>
          ))}

        </div>

      </section>

      {/* REVIEWS */}

      <section className="sd-content-section" id="reviews">

        <h2 className="sd-reviews-heading">
          Reviews
        </h2>

        <div className="sd-review-rating">
          <strong>4.9</strong>
          <span>★★★★★</span>
          <small>20K+</small>
        </div>

        <div className="sd-review-banner">
          Attain Health, Prosperity, and Peace with Sacred Temple
          Poojas through Vedamandir.
        </div>

        <div className="sd-review-grid">

          {(visibleReviews
            ? [...defaultReviews, ...defaultReviews]
            : defaultReviews
          ).map((review, index) => (

            <article
              className="sd-review-card"
              key={index}
            >

              <div className="sd-review-card-top">
                <span>★★★★★</span>
                <small>{review.type}</small>
              </div>

              <p>{review.text}</p>

              <div className="sd-review-person">

                <span className="sd-review-avatar">
                  {review.initial}
                </span>

                <div>
                  <strong>{review.name}</strong>
                  <small>{review.city}</small>
                </div>

                <span className="sd-verified">
                  <CheckCircle size={13} />
                  Verified
                </span>

              </div>

            </article>

          ))}

        </div>

        <button
          type="button"
          className="sd-view-more"
          onClick={() => setVisibleReviews(!visibleReviews)}
        >
          {visibleReviews ? "View Less" : "View more"}
        </button>

      </section>

      {/* FIXED BOTTOM BOOKING BAR */}

      <div className="sd-sticky-booking">

        <div className="sd-sticky-left">

          <div className="sd-sticky-icon">
            <span>✺</span>
          </div>

          <div>
            <strong>{sevaName}</strong>

            <h2>
              ₹{Number(price).toLocaleString("en-IN")}
            </h2>
          </div>

        </div>

        <button
          type="button"
          className="sd-sticky-button"
          onClick={handleBooking}
        >
          Participate Now

          <span>
            <ArrowRight size={19} />
          </span>

        </button>

      </div>

      {/* TRUST INFORMATION */}

      <div className="sd-trust-strip">

        <div>
          <Award size={18} />
          ISO Certified 27001
        </div>

        <div>
          <ShieldCheck size={18} />
          100% Secure Payment
        </div>

        <div>
          <Headphones size={18} />
          Customer Support
        </div>

      </div>

    </main>
  );
}
