
import { useState, type CSSProperties } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  HandHeart,
  Flower2,
  CircleUserRound
} from "lucide-react";

import {
  useLanguage,
  type Language
} from "../context/LanguageContext";

interface NavbarProps {
  icons: Record<string, any>;
}

const languages: {
  code: Language;
  name: string;
  english: string;
  symbol: string;
  color: string;
}[] = [
  { code: "te", name: "తెలుగు", english: "Telugu", symbol: "అ", color: "#ff7180" },
  { code: "en", name: "English", english: "English", symbol: "Aa", color: "#ad78d9" },
  { code: "ta", name: "தமிழ்", english: "Tamil", symbol: "த", color: "#69cbd5" },
  { code: "kn", name: "ಕನ್ನಡ", english: "Kannada", symbol: "ಕ", color: "#71c9fa" },
  { code: "hi", name: "हिन्दी", english: "Hindi", symbol: "हि", color: "#ffb86b" },
  { code: "bn", name: "বাংলা", english: "Bengali", symbol: "বা", color: "#82c83d" },
  { code: "gu", name: "ગુજરાતી", english: "Gujarati", symbol: "ગુ", color: "#f0cc42" },
  { code: "ml", name: "മലയാളം", english: "Malayalam", symbol: "മ", color: "#3898b5" },
  { code: "mr", name: "मराठी", english: "Marathi", symbol: "म", color: "#ed8bd6" },
  { code: "or", name: "ଓଡ଼ିଆ", english: "Odia", symbol: "ଓ", color: "#f2a044" }
];

export default function Navbar({ icons }: NavbarProps) {
  const { Flame, Globe } = icons;
  const navigate = useNavigate();
  const location = useLocation();

  const {
    language: currentLanguage,
    setLanguage,
    t
  } = useLanguage();

  const [languageOpen, setLanguageOpen] = useState(false);

  const selectedLanguage =
    languages.find((item) => item.code === currentLanguage)?.english ?? "English";

  const selectLanguage = (code: Language) => {
    setLanguage(code);
    setLanguageOpen(false);
  };

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openSection = (section: string) => {
    const scrollToSection = () => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scrollToSection, 350);
    } else {
      scrollToSection();
    }
  };

  const goAccount = () => {
    navigate("/account");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goSevas = () => {
    navigate("/sevas");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isPujaActive =
    location.pathname === "/pujas" ||
    location.pathname.startsWith("/puja/");

  const isSevaActive =
    location.pathname === "/sevas" ||
    location.pathname.startsWith("/seva-");

  const isAccountActive = location.pathname === "/account";

  return (
    <>
      <style>{`

        /* =========================
           DESKTOP NAVBAR
        ========================= */

        .vm-navbar {
          width: 100%;
          min-height: 93px;
          background: #ffffff;
          border-top: 1px solid #f0ded8;
          border-bottom: 1px solid #e9e9e9;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
          position: relative;
          z-index: 100;
        }

        .vm-navbar-container {
          max-width: 1270px;
          min-height: 93px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          box-sizing: border-box;
          gap: 18px;
        }

        /* LOGO */

        .vm-navbar-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          color: #a51c0d;
          flex-shrink: 0;
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
        }

        .vm-navbar-logo-icon {
          width: 42px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vm-navbar-logo-icon svg {
          width: 45px;
          height: 45px;
          color: #b52410;
        }

        .vm-navbar-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .vm-navbar-logo-text strong {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -1.1px;
          color: #a51c0d;
        }

        .vm-navbar-logo-text span {
          font-size: 12px;
          letter-spacing: 5px;
          color: #a51c0d;
          margin-top: 5px;
        }

        /* DESKTOP LINKS */

        .vm-navbar-links {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 39px;
        }

        .vm-navbar-links button {
          height: 93px;
          display: flex;
          align-items: center;
          position: relative;
          color: #111111;
          font-size: 16px;
          font-weight: 500;
          font-family: inherit;
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          white-space: nowrap;
          transition: color .2s;
        }

        .vm-navbar-links button:hover,
        .vm-navbar-links button.active {
          color: #008f45;
        }

        .vm-navbar-links button.active::after {
          content: "";
          position: absolute;
          bottom: 25px;
          left: 0;
          right: 0;
          height: 2px;
          background: #00a957;
        }

        /* RIGHT ACTIONS */

        .vm-navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* WHATSAPP */

        .vm-navbar-whatsapp {
          height: 48px;
          min-width: 205px;
          padding: 0 15px;
          border: 2px solid #00a82e;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          color: #00a82e;
          box-sizing: border-box;
        }

        .vm-navbar-whatsapp-icon {
          width: 29px;
          height: 29px;
          flex-shrink: 0;
        }

        .vm-navbar-whatsapp-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .vm-navbar-whatsapp-text small {
          font-size: 12px;
          color: #777777;
        }

        .vm-navbar-whatsapp-text strong {
          font-size: 14px;
          color: #009b2c;
          font-weight: 700;
        }

        /* LANGUAGE BUTTON */

        .vm-navbar-language {
          height: 48px;
          min-width: 123px;
          padding: 0 14px;
          border: 1px solid #75d9a1;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          color: #008d43;
          background: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .vm-navbar-language svg {
          width: 16px;
          height: 16px;
        }

        /* =========================
           LANGUAGE MODAL
        ========================= */

        .vm-language-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.48);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          font-family: Arial, Helvetica, sans-serif;
        }

        .vm-language-modal {
          width: 100%;
          max-width: 754px;
          max-height: calc(100vh - 40px);
          background: #f0f0f0;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 15px 50px rgba(0,0,0,0.18);
          animation: vmLanguageAppear .22s ease-out;
        }

        @keyframes vmLanguageAppear {
          from {
            opacity: 0;
            transform: translateY(12px) scale(.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .vm-language-header {
          min-height: 93px;
          background: #ffffff;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
          padding: 12px 55px;
          border-bottom: 1px solid #eeeeee;
          flex-shrink: 0;
        }

        .vm-language-header h2 {
          margin: 0 0 8px;
          font-size: 22px;
          font-weight: 700;
          color: #29221f;
        }

        .vm-language-header p {
          margin: 0;
          font-size: 16px;
          color: #80736d;
        }

        .vm-language-close {
          position: absolute;
          right: 16px;
          top: 16px;
          width: 35px;
          height: 35px;
          border: none;
          border-radius: 50%;
          background: #999999;
          color: #ffffff;
          font-size: 21px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .vm-language-close:hover {
          background: #666666;
        }

        .vm-language-content {
          padding: 14px;
          overflow-y: auto;
          box-sizing: border-box;
        }

        .vm-language-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
        }

        .vm-language-card {
          height: 87px;
          background: #ffffff;
          border: none;
          border-bottom: 4px solid var(--language-color);
          border-radius: 5px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          position: relative;
          cursor: pointer;
          text-align: left;
          box-sizing: border-box;
          transition: border-color .2s, background .2s;
        }

        .vm-language-card:hover {
          background: #fafafa;
        }

        .vm-language-card.selected {
          border: 3px solid #00b66a;
          border-radius: 8px;
        }

        .vm-language-symbol {
          font-size: 38px;
          line-height: 1;
          font-weight: 500;
          color: var(--language-color);
          min-width: 55px;
          text-align: center;
        }

        .vm-language-name {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }

        .vm-language-name strong {
          font-size: 17px;
          font-weight: 600;
          color: #27211e;
          white-space: nowrap;
        }

        .vm-language-name small {
          font-size: 13px;
          color: #92877e;
          font-weight: 600;
        }

        .vm-language-check {
          position: absolute;
          top: 9px;
          right: 9px;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #00b66a;
          color: white;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* =========================
           MOBILE NAVIGATION
        ========================= */

        .vm-mobile-bottom-nav {
          display: none;
        }

        @media(max-width: 1100px) and (min-width: 801px) {
          .vm-navbar-container {
            padding: 0 25px;
          }

          .vm-navbar-links {
            gap: 22px;
          }

          .vm-navbar-logo-text strong {
            font-size: 27px;
          }

          .vm-navbar-whatsapp {
            min-width: 48px;
            width: 48px;
            padding: 0;
          }

          .vm-navbar-whatsapp-text {
            display: none;
          }
        }

        @media(max-width: 800px) {

          .vm-navbar {
            min-height: 64px;
            border-top: 0;
            border-bottom: 1px solid #eeeeee;
          }

          .vm-navbar-container {
            min-height: 64px;
            height: 64px;
            flex-wrap: nowrap;
            padding: 0 16px;
            gap: 10px;
          }

          .vm-navbar-logo {
            gap: 5px;
          }

          .vm-navbar-logo-icon {
            width: 27px;
            height: 34px;
          }

          .vm-navbar-logo-icon svg {
            width: 30px;
            height: 30px;
          }

          .vm-navbar-logo-text strong {
            font-size: 20px;
            letter-spacing: -.7px;
          }

          .vm-navbar-logo-text span {
            font-size: 8px;
            letter-spacing: 3px;
            margin-top: 3px;
          }

          .vm-navbar-links {
            display: none;
          }

          .vm-navbar-actions {
            gap: 8px;
          }

          .vm-navbar-whatsapp {
            min-width: 34px;
            width: 34px;
            height: 34px;
            border: 0;
            border-radius: 50%;
            background: #16a934;
            color: #fff;
            padding: 0;
          }

          .vm-navbar-whatsapp-icon {
            width: 23px;
            height: 23px;
          }

          .vm-navbar-whatsapp-text {
            display: none;
          }

          .vm-navbar-language {
            min-width: 0;
            height: 34px;
            padding: 0 10px;
            border: 1px solid #e6dcd7;
            border-radius: 22px;
            color: #222;
            gap: 6px;
            font-size: 13px;
          }

          .vm-navbar-language svg {
            display: none;
          }

          /* FIXED BOTTOM NAVIGATION */

          .vm-mobile-bottom-nav {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 999;
            height: calc(66px + env(safe-area-inset-bottom));
            padding: 5px 8px env(safe-area-inset-bottom);
            box-sizing: border-box;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            align-items: center;
            background: rgba(255,255,255,.98);
            border-top: 1px solid #e8e8e8;
            box-shadow: 0 -3px 12px rgba(0,0,0,.05);
          }

          .vm-mobile-bottom-nav button {
            height: 55px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            border: 0;
            background: transparent;
            color: #858585;
            cursor: pointer;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 10px;
            font-weight: 600;
          }

          .vm-mobile-bottom-nav button svg {
            width: 22px;
            height: 22px;
            stroke-width: 1.8;
          }

          .vm-mobile-bottom-nav button.active {
            color: #a51c0d;
          }

          .vm-mobile-bottom-nav button.active svg {
            stroke-width: 2.2;
          }

          body {
            padding-bottom: calc(66px + env(safe-area-inset-bottom));
          }
        }

        @media(max-width: 600px) {

          .vm-language-overlay {
            padding: 12px;
          }

          .vm-language-modal {
            max-height: calc(100vh - 24px);
            border-radius: 12px;
          }

          .vm-language-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .vm-language-card {
            padding: 10px;
            gap: 7px;
            height: 82px;
          }

          .vm-language-symbol {
            min-width: 35px;
            font-size: 29px;
          }

          .vm-language-name strong {
            font-size: 14px;
          }

          .vm-language-name small {
            font-size: 11px;
          }

          .vm-language-header h2 {
            font-size: 19px;
          }

          .vm-language-header p {
            font-size: 13px;
          }
        }

      `}</style>

      {/* DESKTOP AND MOBILE TOP HEADER */}

      <header className="vm-navbar">
        <div className="vm-navbar-container">

          {/* LOGO */}

          <button
            type="button"
            className="vm-navbar-logo"
            onClick={goHome}
            aria-label="Vedamandir Home"
          >
            <span className="vm-navbar-logo-icon">
              {Flame && <Flame />}
            </span>

            <span className="vm-navbar-logo-text">
              <strong>Vedamandir</strong>
              <span>vedamandir.com</span>
            </span>
          </button>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="vm-navbar-links"
            aria-label="Main navigation"
          >
            <button
              type="button"
              onClick={goHome}
              className={location.pathname === "/" ? "active" : ""}
            >
              {t("HOME")}
            </button>

            <button
              type="button"
              onClick={() => openSection("pujas")}
              className={isPujaActive ? "active" : ""}
            >
              {t("PUJAS")}
            </button>

            <button
              type="button"
              onClick={goSevas}
              className={isSevaActive ? "active" : ""}
            >
              {t("SEVAS")}
            </button>

            <button
              type="button"
              onClick={goAccount}
              className={isAccountActive ? "active" : ""}
            >
              {t("ACCOUNT")}
            </button>
          </nav>

          {/* RIGHT ACTIONS */}

          <div className="vm-navbar-actions">

            {/* WHATSAPP */}

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="vm-navbar-whatsapp"
              aria-label="WhatsApp support"
            >
              <svg
                className="vm-navbar-whatsapp-icon"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M16 3.5C9.1 3.5 3.5 9 3.5 15.8c0 2.3.7 4.5 1.8 6.3L3.5 28l6.1-1.7c1.9 1 4.1 1.5 6.4 1.5 6.9 0 12.5-5.4 12.5-12.1S22.9 3.5 16 3.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                <path
                  d="M11 10.5c-.5 0-1.1.4-1.4 1-.4.7-.5 1.5-.1 2.4 1.2 3.1 3.6 5.5 6.7 6.7.9.3 1.8.2 2.4-.2.7-.4 1-1.1 1.1-1.6l-3-1.5-1.3 1.4c-1.5-.7-2.7-1.8-3.4-3.3l1.2-1.3-1.4-3.1-1-.5Z"
                  fill="currentColor"
                />
              </svg>

              <span className="vm-navbar-whatsapp-text">
                <small>{t("NEED_HELP")}</small>
                <strong>{t("WHATSAPP_SUPPORT")}</strong>
              </span>
            </a>

            {/* LANGUAGE SELECTOR */}

            <button
              type="button"
              className="vm-navbar-language"
              onClick={() => setLanguageOpen(true)}
              aria-label="Choose language"
              aria-expanded={languageOpen}
            >
              {Globe && <Globe />}
              <span>{selectedLanguage}</span>
              <span>▼</span>
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION */}

      <nav
        className="vm-mobile-bottom-nav"
        aria-label="Mobile navigation"
      >
        <button
          type="button"
          className={location.pathname === "/" ? "active" : ""}
          onClick={goHome}
        >
          <Home />
          <span>HOME</span>
        </button>

        <button
          type="button"
          className={isPujaActive ? "active" : ""}
          onClick={() => openSection("pujas")}
        >
          <Flower2 />
          <span>PUJA</span>
        </button>

        <button
          type="button"
          className={isSevaActive ? "active" : ""}
          onClick={goSevas}
        >
          <HandHeart />
          <span>SEVAS</span>
        </button>

        <button
          type="button"
          className={isAccountActive ? "active" : ""}
          onClick={goAccount}
        >
          <CircleUserRound />
          <span>ACCOUNT</span>
        </button>
      </nav>

      {/* LANGUAGE SELECTION MODAL */}

      {languageOpen && (
        <div
          className="vm-language-overlay"
          onClick={() => setLanguageOpen(false)}
        >
          <div
            className="vm-language-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="vm-language-header">
              <h2>{t("SELECT_LANGUAGE")}</h2>
              <p>{t("LANGUAGE_SUBTITLE")}</p>

              <button
                type="button"
                className="vm-language-close"
                onClick={() => setLanguageOpen(false)}
                aria-label="Close language selection"
              >
                ×
              </button>
            </div>

            <div className="vm-language-content">
              <div className="vm-language-grid">

                {languages.map((language) => {
                  const isSelected =
                    language.code === currentLanguage;

                  return (
                    <button
                      type="button"
                      key={language.code}
                      className={`vm-language-card ${
                        isSelected ? "selected" : ""
                      }`}
                      style={{
                        "--language-color": language.color
                      } as CSSProperties & {
                        "--language-color": string;
                      }}
                      onClick={() => selectLanguage(language.code)}
                    >
                      <span className="vm-language-symbol">
                        {language.symbol}
                      </span>

                      <span className="vm-language-name">
                        <strong>{language.name}</strong>
                        <small>{language.english}</small>
                      </span>

                      {isSelected && (
                        <span className="vm-language-check">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      )}

    </>
  );
}
