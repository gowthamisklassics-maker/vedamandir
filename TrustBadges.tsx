
interface TrustBadgesProps {
  icons: Record<string, any>;
}

// ========================================
// 1. GREEN VIDEO CAMERA
// ========================================

function VideoIcon() {
  return (
    <svg viewBox="0 0 28 28" width="25" height="25">
      <rect
        x="3"
        y="7"
        width="15"
        height="14"
        rx="3"
        fill="#00AD63"
      />
      <path
        d="M19 11.2L25 7.8V20.2L19 16.8V11.2Z"
        fill="#00AD63"
      />
    </svg>
  );
}

// ========================================
// 2. BLUE VERIFIED BADGE
// ========================================

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 32 32" width="27" height="27">
      <path
        d="M16 1.5
        C17.8 1.5 19 4 20.7 4.2
        C22.5 4.4 25 3.2 26.3 4.5
        C27.6 5.8 26.4 8.3 26.6 10.1
        C26.8 11.8 29.3 13 29.3 14.8
        C29.3 16.6 26.8 17.8 26.6 19.5
        C26.4 21.3 27.6 23.8 26.3 25.1
        C25 26.4 22.5 25.2 20.7 25.4
        C19 25.6 17.8 28.1 16 28.1
        C14.2 28.1 13 25.6 11.3 25.4
        C9.5 25.2 7 26.4 5.7 25.1
        C4.4 23.8 5.6 21.3 5.4 19.5
        C5.2 17.8 2.7 16.6 2.7 14.8
        C2.7 13 5.2 11.8 5.4 10.1
        C5.6 8.3 4.4 5.8 5.7 4.5
        C7 3.2 9.5 4.4 11.3 4.2
        C13 4 14.2 1.5 16 1.5Z"
        fill="#2196F3"
      />
      <path
        d="M10.8 15.1L14.3 18.6L21.3 11.6"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ========================================
// 3. TEMPLE WITH RED FLAGS
// ========================================

function TempleIcon() {
  return (
    <svg viewBox="0 0 52 42" width="39" height="32">
      {/* Ground */}
      <path
        d="M2 37H50"
        stroke="#333333"
        strokeWidth="1.5"
      />

      {/* Left temple structure */}
      <path
        d="M4 36L10 23L16 36Z"
        fill="#333333"
      />
      <path
        d="M7 26H13"
        stroke="#F8F2F1"
        strokeWidth="1"
      />

      {/* Middle temple tower */}
      <path
        d="M15 36L23 15L31 36Z"
        fill="#292929"
      />
      <path
        d="M19 25H27"
        stroke="#F8F2F1"
        strokeWidth="1"
      />

      {/* Right temple structure */}
      <path
        d="M27 36L37 12L47 36Z"
        fill="#292929"
      />
      <path
        d="M32 26H42"
        stroke="#F8F2F1"
        strokeWidth="1"
      />

      {/* Temple door */}
      <path
        d="M35 36V29H40V36"
        fill="#F8F2F1"
      />

      {/* Flag poles */}
      <path
        d="M10 23V5M37 12V2"
        stroke="#292929"
        strokeWidth="1.4"
      />

      {/* Red flags */}
      <path
        d="M10 5L19 8L10 11Z"
        fill="#E53935"
      />
      <path
        d="M37 2L47 5L37 8Z"
        fill="#E53935"
      />

      {/* Small flag */}
      <path
        d="M23 15V8"
        stroke="#292929"
        strokeWidth="1.2"
      />
      <path
        d="M23 8L29 10L23 12Z"
        fill="#E53935"
      />
    </svg>
  );
}

// ========================================
// 4. WHATSAPP / 24-HOUR SUPPORT ICON
// ========================================

function WhatsApp24Icon() {
  return (
    <svg viewBox="0 0 38 38" width="28" height="28">

      {/* Main support circle */}
      <circle
        cx="17"
        cy="17"
        r="13"
        fill="#303030"
      />

      {/* Speech bubble tail */}
      <path
        d="M8.5 26L6.5 32L14 28.5"
        fill="#303030"
      />

      {/* Headset outer shape */}
      <path
        d="M9.5 17V15.5
        C9.5 11.5 12.7 8.5 17 8.5
        C21.3 8.5 24.5 11.5 24.5 15.5V18"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Headset ear pieces */}
      <rect
        x="8.5"
        y="15"
        width="4"
        height="7"
        rx="1.5"
        fill="#FFFFFF"
      />
      <rect
        x="21.5"
        y="15"
        width="4"
        height="7"
        rx="1.5"
        fill="#FFFFFF"
      />

      {/* Microphone */}
      <path
        d="M23 22L19.5 24"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 24 hour badge */}
      <circle
        cx="28"
        cy="27"
        r="9"
        fill="#303030"
        stroke="#F8F2F1"
        strokeWidth="1.5"
      />

      <text
        x="28"
        y="30"
        fontSize="8"
        fontWeight="bold"
        textAnchor="middle"
        fill="#FFFFFF"
      >
        24
      </text>
    </svg>
  );
}

// ========================================
// MAIN TRUST BADGES COMPONENT
// ========================================

export default function TrustBadges(_props: TrustBadgesProps) {

  const items = [
    {
      icon: <VideoIcon />,
      text: "మీ సంకల్పం కోసం పూజ"
    },
    {
      icon: <VerifiedIcon />,
      text: "పవిత్ర క్షేత్రాలే నిర్వహణ"
    },
    {
      icon: <TempleIcon />,
      text: "పూజను ప్రత్యక్షంగా చూడండి"
    },
    {
      icon: <WhatsApp24Icon />,
      text: "వీడియో 48 గంటల్లో మీ WhatsAppకు"
    }
  ];

  return (
    <>
      <style>{`

        .vm-badges-section {
          width: 100%;
          min-height: 149px;
          padding: 30px 20px;
          background: #f8f2f1;
          box-sizing: border-box;
        }

        .vm-badges-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1.15fr 1.3fr;
          gap: 23px;
          align-items: center;
        }

        .vm-badge-item {
          height: 52px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid #91d9b5;
          border-radius: 50px;
          background: #e6eee7;
          color: #252525;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .vm-badge-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .vm-badge-icon svg {
          display: block;
        }

        @media (max-width: 900px) {
          .vm-badges-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 500px) {
          .vm-badges-section {
            min-height: auto;
            padding: 22px 14px;
          }

          .vm-badges-container {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .vm-badge-item {
            width: 100%;
            white-space: normal;
          }
        }

      `}</style>

      <section className="vm-badges-section">
        <div className="vm-badges-container">

          {items.map((item, index) => (
            <div
              className="vm-badge-item"
              key={index}
            >
              <span className="vm-badge-icon">
                {item.icon}
              </span>

              <span>{item.text}</span>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
