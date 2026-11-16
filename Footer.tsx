
interface FooterProps {
  icons: Record<string, any>;
}

export default function Footer({ icons }: FooterProps) {
  const {
    Flame,
    Facebook,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin
  } = icons;

  return (
    <>
      <style>{`
        .vm-footer {
          width: 100%;
          background: #f8f2f1;
          border-top: 1px solid #e9dedb;
          color: #555;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .vm-footer-container {
          max-width: 1100px;
          margin: auto;
          padding: 44px 0 0;
        }

        /* TOP FOOTER */

        .vm-footer-top {
          display: grid;
          grid-template-columns: 1.1fr 1.15fr 1fr 1.2fr 1.55fr;
          min-height: 105px;
        }

        .vm-footer-column {
          padding: 0 27px;
          border-right: 1px solid #e6dbd7;
          box-sizing: border-box;
        }

        .vm-footer-column:first-child {
          padding-left: 0;
          display: flex;
          align-items: center;
        }

        .vm-footer-column:last-child {
          border-right: none;
          padding-right: 0;
        }

        /* LOGO */

        .vm-footer-logo {
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          color: #a51d0d;
        }

        .vm-footer-logo-icon {
          width: 30px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vm-footer-logo-icon svg {
          width: 31px;
          height: 31px;
          color: #c42b13;
          fill: #c42b13;
        }

        .vm-footer-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .vm-footer-logo-text strong {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.7px;
        }

        .vm-footer-logo-text small {
          font-size: 8px;
          letter-spacing: 3px;
          text-align: center;
          margin-top: 4px;
          color: #7b2117;
        }

        /* SOCIAL */

        .vm-footer-heading {
          color: #292522;
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 15px;
        }

        .vm-footer-muted {
          font-size: 12px;
          color: #99908c;
          margin-bottom: 10px;
        }

        .vm-footer-socials {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .vm-footer-social {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #222;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .vm-footer-social:hover {
          background: #a51d0d;
          color: white;
        }

        .vm-footer-social svg {
          width: 16px;
          height: 16px;
        }

        .vm-footer-social span {
          font-size: 17px;
          font-weight: 600;
        }

        /* SERVICES */

        .vm-footer-links {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .vm-footer-links a {
          color: #666;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s ease;
        }

        .vm-footer-links a:hover {
          color: #a51d0d;
        }

        /* CONTACT */

        .vm-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 12px;
          color: #666;
          line-height: 1.6;
          text-decoration: none;
        }

        .vm-footer-contact-item svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .vm-footer-address {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12px;
          line-height: 1.65;
          color: #666;
        }

        .vm-footer-address svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .vm-footer-address strong {
          color: #292522;
          font-size: 13px;
        }

        /* BOTTOM FOOTER */

        .vm-footer-bottom {
          min-height: 59px;
          margin-top: 26px;
          border-top: 1px solid #e6dbd7;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          font-size: 12px;
        }

        .vm-footer-copyright {
          white-space: nowrap;
          color: #666;
        }

        .vm-footer-legal,
        .vm-footer-extra {
          display: flex;
          align-items: center;
          gap: 19px;
          flex-wrap: wrap;
        }

        .vm-footer-bottom a {
          color: #514945;
          text-decoration: none;
          white-space: nowrap;
        }

        .vm-footer-bottom a:hover {
          color: #a51d0d;
        }

        .vm-footer-extra a {
          color: #292522;
        }

        /* RESPONSIVE */

        @media(max-width: 1000px) {
          .vm-footer-container {
            padding: 35px 24px 0;
          }

          .vm-footer-top {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 30px;
          }

          .vm-footer-column {
            padding: 0 18px;
          }

          .vm-footer-column:first-child {
            padding-left: 0;
          }

          .vm-footer-column:nth-child(3) {
            border-right: none;
          }

          .vm-footer-bottom {
            flex-wrap: wrap;
            padding: 18px 0;
          }
        }

        @media(max-width: 650px) {
          .vm-footer-top {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 10px;
          }

          .vm-footer-column {
            padding: 0 12px;
          }

          .vm-footer-column:nth-child(2),
          .vm-footer-column:nth-child(4) {
            border-right: none;
          }

          .vm-footer-column:nth-child(3) {
            border-right: 1px solid #e6dbd7;
          }

          .vm-footer-column:last-child {
            grid-column: span 2;
            padding-left: 12px;
          }

          .vm-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .vm-footer-legal,
          .vm-footer-extra {
            gap: 13px;
          }
        }

        @media(max-width: 380px) {
          .vm-footer-top {
            grid-template-columns: 1fr;
          }

          .vm-footer-column,
          .vm-footer-column:first-child,
          .vm-footer-column:nth-child(3),
          .vm-footer-column:last-child {
            grid-column: auto;
            border-right: none;
            border-bottom: 1px solid #e6dbd7;
            padding: 0 0 18px;
          }
        }
      `}</style>

      <footer className="vm-footer">
        <div className="vm-footer-container">

          {/* TOP FOOTER */}

          <div className="vm-footer-top">

            {/* LOGO */}

            <div className="vm-footer-column">
              <a href="/" className="vm-footer-logo">
                <span className="vm-footer-logo-icon">
                  {Flame && <Flame />}
                </span>

                <span className="vm-footer-logo-text">
                  <strong>Vedamandir</strong>
                  <small>vedamandir.com</small>
                </span>
              </a>
            </div>

            {/* SOCIAL MEDIA */}

            <div className="vm-footer-column">
              <div className="vm-footer-muted">
                Follow us
              </div>

              <div className="vm-footer-socials">
                <a href="#" className="vm-footer-social" aria-label="Facebook">
                  <span>f</span>
                </a>

                <a href="#" className="vm-footer-social" aria-label="Instagram">
                  {Instagram && <Instagram />}
                </a>

                <a href="#" className="vm-footer-social" aria-label="X">
                  <span>𝕏</span>
                </a>

                <a href="#" className="vm-footer-social" aria-label="YouTube">
                  {Youtube && <Youtube />}
                </a>
              </div>
            </div>

            {/* SERVICES */}

            <div className="vm-footer-column">
              <h3 className="vm-footer-heading">
                Our Services
              </h3>

              <div className="vm-footer-links">
                <a href="#pujas">Puja</a>
                <a href="#seva">Seva</a>
                <a href="#chadava">Chadava</a>
              </div>
            </div>

            {/* CONTACT DETAILS */}

            <div className="vm-footer-column">

              <a
                href="mailto:support@vedamandir.com"
                className="vm-footer-contact-item"
              >
                {Mail && <Mail />}
                <span>sklassicstechnologies1@gmail.com</span>
              </a>

              <a
                href="tel:+919392732341"
                className="vm-footer-contact-item"
              >
                {Phone && <Phone />}
                <span>+91 9392732341</span>
              </a>

            </div>

            {/* ADDRESS */}

            <div className="vm-footer-column">
              <div className="vm-footer-address">
                {MapPin && <MapPin />}

                <div>
                  <strong>VedaMandir</strong>
                  <br />
                
                  Hyderabad, Telangana 500033
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM FOOTER */}

          <div className="vm-footer-bottom">

            <div className="vm-footer-copyright">
              © 2026 VedaMandir. All rights reserved.
            </div>

            <div className="vm-footer-legal">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/refund-policy">Refund Policy</a>
              <a href="/account-deletion">Account Deletion</a>
            </div>

            <div className="vm-footer-extra">
              <a href="#contact">Contact Us</a>
              <a href="#about">About Us</a>
              <a href="#brands">Our Brands</a>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}
