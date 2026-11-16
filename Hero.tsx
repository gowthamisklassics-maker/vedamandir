
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  icons: Record<string, any>;
}

const Laurel = ({ right = false }: { right?: boolean }) => (
  <svg
    viewBox="0 0 48 85"
    className={`vm-laurel ${right ? "right" : ""}`}
    fill="none"
    aria-hidden="true"
  >
    <g fill="#c8bda2" stroke="#c8bda2" strokeWidth=".5">
      <path d="M28 78Q12 75 7 64Q20 64 28 78Z" />
      <path d="M23 68Q7 63 5 51Q17 54 23 68Z" />
      <path d="M18 57Q5 49 7 38Q18 43 18 57Z" />
      <path d="M16 45Q7 35 12 25Q21 34 16 45Z" />
      <path d="M18 32Q13 21 21 12Q26 23 18 32Z" />
      <path d="M28 76Q37 72 40 63Q31 65 28 76Z" />
      <path d="M23 66Q35 60 35 50Q26 53 23 66Z" />
      <path d="M19 54Q30 46 28 36Q19 41 19 54Z" />
      <path d="M18 41Q27 31 22 22Q15 31 18 41Z" />
    </g>
    <path
      d="M29 82C17 68 10 53 12 38C13 24 18 13 25 5"
      stroke="#c8bda2"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Hero({ icons }: HeroProps) {

  // IMPORTANT: Hooks must be inside the component.
  const { t } = useLanguage();

  const ArrowRight = icons.ArrowRight;

  const slides = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
    "/images/hero-4.jpg"
  ];

  return (
    <>
      <style>{`

        /* ===================================
           HERO BASE
        =================================== */

        .vm-hero {
          position: relative;
          width: 100%;
          min-height: 710px;
          padding: 65px 24px 35px;
          background: #fff;
          overflow: hidden;
          isolation: isolate;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .vm-hero::before {
          content: "";
          position: absolute;
          width: 760px;
          height: 760px;
          top: 47%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: url("/images/mandala.png") center / contain no-repeat;
          opacity: .105;
          pointer-events: none;
          z-index: -1;
        }

        .vm-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1278px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 500px) minmax(0, 726px);
          gap: 52px;
          align-items: center;
        }

        /* ===================================
           LEFT CONTENT
        =================================== */

        .vm-hero-content {
          max-width: 500px;
          width: 100%;
        }

        .vm-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #a52d19;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.1px;
          margin-bottom: 15px;
        }

        .vm-label::before,
        .vm-label::after {
          content: "";
          width: 25px;
          height: 1px;
          background: #c9a84e;
        }

        .vm-title {
          color: #211b18;
          font-size: 44px;
          line-height: 1.17;
          font-weight: 750;
          letter-spacing: -1.2px;
          margin: 0 0 17px;
        }

        .vm-description {
          color: #6b6865;
          font-size: 15px;
          line-height: 1.7;
          max-width: 470px;
          margin: 0 0 30px;
        }

        /* ===================================
           BOOKING BUTTON
        =================================== */

        .vm-book-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 505px;
          min-height: 66px;
          padding: 15px 16px 15px 32px;
          box-sizing: border-box;
          background: linear-gradient(105deg, #00a957, #00b966);
          color: white;
          border: 1px solid #00a957;
          border-radius: 9px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 7px 18px rgba(0, 173, 91, .12);
          transition: transform .25s, box-shadow .25s, background .25s;
        }

        .vm-book-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 11px 24px rgba(0, 173, 91, .22);
          background: linear-gradient(105deg, #00964c, #00a957);
        }

        .vm-arrow-circle {
          width: 32px;
          height: 32px;
          min-width: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          color: #00a957;
          transition: transform .25s;
        }

        .vm-book-btn:hover .vm-arrow-circle {
          transform: translateX(4px);
        }

        /* ===================================
           STATISTICS AND LAUREL
        =================================== */

        .vm-stats {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 30px;
        }

        .vm-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 5px;
        }

        .vm-stat strong {
          color: #39332f;
          font-size: 22px;
          font-weight: 750;
        }

        .vm-stat small {
          color: #494440;
          font-size: 10px;
          font-weight: 600;
        }

        .vm-stat-first {
          position: relative;
          width: 157px;
          min-width: 157px;
          height: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
          color: #292522;
        }

        .vm-stat-first span {
          width: 90px;
          position: relative;
          z-index: 1;
        }

        .vm-laurel {
          position: absolute;
          width: 43px;
          height: 85px;
          top: 0;
          left: 0;
        }

        .vm-laurel.right {
          left: auto;
          right: 0;
          transform: scaleX(-1);
        }

        /* ===================================
           IMAGE SLIDER
        =================================== */

        .vm-slider-wrapper {
          width: 100%;
        }

        .vm-slider {
          position: relative;
          width: 100%;
          aspect-ratio: 1.54 / 1;
          overflow: hidden;
          border-radius: 13px;
          background: #211b18;
          box-shadow: 0 12px 30px rgba(42, 27, 13, .13);
        }

        .vm-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          animation: vmSlide 20s infinite;
        }

        .vm-slide:nth-child(1) { animation-delay: 0s; }
        .vm-slide:nth-child(2) { animation-delay: 5s; }
        .vm-slide:nth-child(3) { animation-delay: 10s; }
        .vm-slide:nth-child(4) { animation-delay: 15s; }

        @keyframes vmSlide {
          0% { opacity: 0; }
          3% { opacity: 1; }
          23% { opacity: 1; }
          27% { opacity: 0; }
          100% { opacity: 0; }
        }

        .vm-slider-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 17px;
        }

        .vm-dot {
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 20px;
          background: #d5d5d5;
          animation: vmDot 20s infinite;
        }

        .vm-dot:nth-child(1) { animation-delay: 0s; }
        .vm-dot:nth-child(2) { animation-delay: 5s; }
        .vm-dot:nth-child(3) { animation-delay: 10s; }
        .vm-dot:nth-child(4) { animation-delay: 15s; }

        @keyframes vmDot {
          0%, 27%, 100% {
            width: 7px;
            background: #d5d5d5;
          }

          3%, 23% {
            width: 25px;
            background: #00ad5b;
          }
        }

        /* ===================================
           TRUST STRIP
        =================================== */

        .vm-trust-strip {
          position: relative;
          z-index: 2;
          max-width: 1278px;
          width: 100%;
          min-height: 64px;
          margin: 42px auto 0;
          padding: 12px 15px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: rgba(255,255,255,.94);
          border: 1px solid #e7e4df;
          border-radius: 16px;
          box-sizing: border-box;
          box-shadow: 0 5px 18px rgba(0,0,0,.025);
        }

        .vm-trust-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #37312e;
          font-size: 14px;
          white-space: nowrap;
        }

        .vm-trust-item:not(:last-child) {
          border-right: 1px solid #e8e5e1;
          padding-right: 20px;
        }

        .vm-trust-icon {
          font-size: 17px;
        }

        /* ===================================
           GOLD CORNER DECORATION
        =================================== */

        .vm-border-frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
          overflow: hidden;
        }

        .vm-border-corner {
          position: absolute;
          width: 200px;
          height: 180px;
          opacity: .85;
        }

        .vm-border-tl {
          top: 12px;
          left: 0;
        }

        .vm-border-tr {
          top: 12px;
          right: 0;
          transform: scaleX(-1);
        }

        .vm-border-bl {
          bottom: 12px;
          left: 0;
          transform: scaleY(-1);
        }

        .vm-border-br {
          bottom: 12px;
          right: 0;
          transform: scale(-1);
        }

        /* ===================================
           TABLET
        =================================== */

        @media (min-width: 801px) and (max-width: 1100px) {
          .vm-hero {
            min-height: auto;
            padding: 50px 24px 35px;
          }

          .vm-hero-container {
            grid-template-columns: 1fr 1.15fr;
            gap: 28px;
          }

          .vm-title {
            font-size: 35px;
          }

          .vm-trust-strip {
            flex-wrap: wrap;
            gap: 16px;
          }

          .vm-trust-item {
            border: none !important;
            padding: 5px !important;
          }
        }

        /* ===================================
           MOBILE
        =================================== */

        @media (max-width: 800px) {
          .vm-hero {
            min-height: auto;
            padding: 35px 16px 30px;
          }

          .vm-hero::before {
            width: 500px;
            height: 500px;
            opacity: .10;
          }

          .vm-hero-container {
            display: flex;
            flex-direction: column;
            gap: 25px;
          }

          .vm-hero-content {
            max-width: 100%;
          }

          .vm-title {
            font-size: 27px;
            line-height: 1.25;
          }

          .vm-description {
            font-size: 14px;
            margin-bottom: 23px;
          }

          .vm-book-btn {
            max-width: 100%;
            min-height: 62px;
            font-size: 15px;
          }

          .vm-stats {
            justify-content: center;
            gap: 13px;
            margin-top: 25px;
          }

          .vm-stat-first {
            width: 157px;
            min-width: 157px;
          }

          .vm-stat strong {
            font-size: 19px;
          }

          .vm-slider {
            aspect-ratio: 1.35 / 1;
          }

          .vm-trust-strip {
            margin-top: 25px;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
          }

          .vm-trust-item {
            white-space: normal;
            border: none !important;
            padding: 5px !important;
            font-size: 12px;
          }

          .vm-border-corner {
            width: 105px;
            height: 100px;
            opacity: .6;
          }
        }

        @media (max-width: 500px) {
          .vm-hero {
            padding: 30px 16px 25px;
          }

          .vm-title {
            font-size: 25px;
          }

          .vm-stats {
            gap: 8px;
          }

          .vm-stat-first {
            width: 145px;
            min-width: 145px;
          }

          .vm-stat-first span {
            width: 85px;
          }

          .vm-stat strong {
            font-size: 18px;
          }

          .vm-stat small {
            font-size: 9px;
          }

          .vm-slider {
            aspect-ratio: 1.15 / 1;
          }

          .vm-border-corner {
            width: 75px;
            height: 85px;
            opacity: .45;
          }
        }

      `}</style>

      <section className="vm-hero" id="home">

        {/* GOLD CORNER DECORATION */}

        <div className="vm-border-frame" aria-hidden="true">

          <svg className="vm-border-corner vm-border-tl" viewBox="0 0 200 180" fill="none">
            <g stroke="#D5B94F" strokeWidth="1.3" strokeLinecap="round">
              <path d="M75 30 H198" />
              <path d="M29 80 V178" />
              <path d="M29 80 C8 68 9 51 26 43 C40 36 51 47 43 57 C37 65 26 59 31 53" />
              <path d="M29 43 C26 22 42 9 56 16 C69 22 68 37 57 39" />
              <path d="M56 16 C78 0 111 5 120 29" />
              <path d="M29 80 C39 93 35 106 30 117" />
            </g>
            <g fill="#C7A83C">
              <circle cx="88" cy="30" r="4" />
              <circle cx="116" cy="30" r="2" />
              <circle cx="159" cy="30" r="2" />
              <circle cx="29" cy="103" r="2" />
              <path d="M138 26 L142 30 L138 34 L134 30Z" />
            </g>
          </svg>

          <svg className="vm-border-corner vm-border-tr" viewBox="0 0 200 180" fill="none">
            <g stroke="#D5B94F" strokeWidth="1.3" strokeLinecap="round">
              <path d="M75 30 H198" />
              <path d="M29 80 V178" />
              <path d="M29 80 C8 68 9 51 26 43 C40 36 51 47 43 57 C37 65 26 59 31 53" />
              <path d="M29 43 C26 22 42 9 56 16 C69 22 68 37 57 39" />
              <path d="M56 16 C78 0 111 5 120 29" />
            </g>
            <g fill="#C7A83C">
              <circle cx="88" cy="30" r="4" />
              <circle cx="116" cy="30" r="2" />
              <circle cx="159" cy="30" r="2" />
              <path d="M138 26 L142 30 L138 34 L134 30Z" />
            </g>
          </svg>

          <svg className="vm-border-corner vm-border-bl" viewBox="0 0 200 180" fill="none">
            <g stroke="#D5B94F" strokeWidth="1.3">
              <path d="M75 30 H198" />
              <path d="M29 80 V178" />
              <path d="M29 80 C8 68 9 51 26 43 C40 36 51 47 43 57" />
              <path d="M29 43 C26 22 42 9 56 16 C69 22 68 37 57 39" />
            </g>
            <g fill="#C7A83C">
              <circle cx="88" cy="30" r="4" />
              <circle cx="116" cy="30" r="2" />
              <circle cx="159" cy="30" r="2" />
            </g>
          </svg>

          <svg className="vm-border-corner vm-border-br" viewBox="0 0 200 180" fill="none">
            <g stroke="#D5B94F" strokeWidth="1.3">
              <path d="M75 30 H198" />
              <path d="M29 80 V178" />
              <path d="M29 80 C8 68 9 51 26 43 C40 36 51 47 43 57" />
              <path d="M29 43 C26 22 42 9 56 16 C69 22 68 37 57 39" />
            </g>
            <g fill="#C7A83C">
              <circle cx="88" cy="30" r="4" />
              <circle cx="116" cy="30" r="2" />
              <circle cx="159" cy="30" r="2" />
            </g>
          </svg>

        </div>

        {/* HERO CONTENT */}

        <div className="vm-hero-container">

          <div className="vm-hero-content">

            <div className="vm-label">
              {t("SHANIVAR_SPECIAL")}
            </div>

            <h1 className="vm-title">
              {t("HERO_TITLE")}
            </h1>

            <p className="vm-description">
              {t("HERO_DESCRIPTION")}
            </p>

            <a href="/seva-details/156" className="vm-book-btn">
              <span>{t("BOOK PUJA NOW")}</span>

              <span className="vm-arrow-circle">
                {ArrowRight && <ArrowRight size={20} />}
              </span>
            </a>

            {/* STATISTICS */}

            <div className="vm-stats">

              <div className="vm-stat-first">
                <Laurel />

                <span>
                  {t("One of India's most loved devotional platforms")}
                </span>

                <Laurel right />
              </div>

              <div className="vm-stat">
                <strong>5L+</strong>
                <small>{t("HAPPY_DEVOTEES")}</small>
              </div>

              <div className="vm-stat">
                <strong>100%</strong>
                <small>{t("SECURE")}</small>
              </div>

            </div>

          </div>

          {/* IMAGE SLIDER */}

          <div className="vm-slider-wrapper">

            <div className="vm-slider">

              {slides.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Vedamandir Puja promotion ${index + 1}`}
                  className="vm-slide"
                />
              ))}

            </div>

            <div className="vm-slider-dots">

              {slides.map((_, index) => (
                <span key={index} className="vm-dot" />
              ))}

            </div>

          </div>

        </div>

        {/* TRUST STRIP */}

        <div className="vm-trust-strip">

          <div className="vm-trust-item">
            <span className="vm-trust-icon">🎥</span>
            {t("VIDEO_48")}
          </div>

          <div className="vm-trust-item">
            <span className="vm-trust-icon">🔵</span>
            {t("VERIFIED")}
          </div>

          <div className="vm-trust-item">
            <span className="vm-trust-icon">🛕</span>
            {t("SACRED")}
          </div>

          <div className="vm-trust-item">
            <span className="vm-trust-icon">🏺</span>
            {t("VEDIC")}
          </div>

        </div>

      </section>
    </>
  );
}
