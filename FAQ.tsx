
interface FAQProps {
  icons?: Record<string, any>;
  faqs?: any[];
}

const faqItems = [
  {
    question: "ఆన్‌లైన్ పూజ అంటే ఏమిటి? అది ఎలా నిర్వహిస్తారు?",
    answer:
      "మీరు ఈ వెబ్‌సైట్‌లో పూజను బుక్ చేసిన తర్వాత, అనుభవజ్ఞులైన వేదపండితులు ఆలయంలో మీ తరపున శాస్త్రోక్తంగా పూజను నిర్వహిస్తారు. మీ పేరు, గోత్రంతో సంకల్పం చేస్తారు. పూజ సమయంలో తీసిన మీ వ్యక్తిగత సంకల్పం వీడియోను అందించడం వాట్సాప్ ద్వారా మీకు పంపిస్తాము."
  },
  {
    question: "పూజ సమయంలో నేను అక్కడ ఉండాలా?",
    answer:
      "లేదు. మీరు ఇంటి నుంచే భక్తితో పూజలో పాల్గొనవచ్చు. మా వేదపండితులు మీ పేరు, గోత్రంతో మీ తరపున పూజ నిర్వహిస్తారు."
  },
  {
    question: "పూజ బుక్ చేసేటప్పుడు ఏ వివరాలు ఇవ్వాలి?",
    answer:
      "మీ పేరు, గోత్రం, జన్మ నక్షత్రం మరియు అవసరమైన సంప్రదింపు వివరాలను బుకింగ్ సమయంలో అందించాలి."
  },
  {
    question: "నా కుటుంబ సభ్యుల పేరిట కూడా పూజ బుక్ చేయవచ్చా?",
    answer:
      "అవును. మీ కుటుంబ సభ్యుల పేర్లు మరియు వారి వివరాలను అందించి వారి పేరిట కూడా పూజ బుక్ చేయవచ్చు."
  },
  {
    question: "విదేశాల్లో ఉన్నవారు (NRIలు) కూడా పూజ బుక్ చేయవచ్చా?",
    answer:
      "తప్పకుండా. ప్రపంచంలో ఎక్కడ ఉన్నా మా వెబ్‌సైట్ ద్వారా ఆన్‌లైన్‌లో పూజ బుక్ చేసుకోవచ్చు."
  },
  {
    question: "పూజ బుకింగ్ పూర్తయిన తర్వాత ఏమి జరుగుతుంది?",
    answer:
      "మీ బుకింగ్ వివరాలు నిర్ధారించిన తర్వాత పూజ తేదీ మరియు ఇతర వివరాలను మీకు తెలియజేస్తాము."
  },
  {
    question: "పూజ వీడియోలు ఎప్పుడు అందుతాయి?",
    answer:
      "పూజ పూర్తయిన తర్వాత వీడియోలు సిద్ధం చేసి మీకు వాట్సాప్ ద్వారా పంపిస్తాము."
  },
  {
    question: "వీడియోలో ఏమి ఉంటుంది?",
    answer:
      "మీ పేరు, గోత్రంతో నిర్వహించిన సంకల్పం మరియు పూజకు సంబంధించిన ముఖ్యమైన ఘట్టాల వీడియోలు అందిస్తాము."
  },
  {
    question: "నాకు వీడియో అందకపోతే ఏమి చేయాలి?",
    answer:
      "మీ బుకింగ్ వివరాలతో మా కస్టమర్ సపోర్ట్‌ను సంప్రదించండి. మీకు అవసరమైన సహాయం అందిస్తాము."
  }
];

export default function FAQ({}: FAQProps) {
  return (
    <>
      <style>{`
        .vm-faq-section {
          width: 100%;
          background: #ffffff;
          padding: 75px 24px 85px;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .vm-faq-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.65fr;
          gap: 95px;
          align-items: start;
        }

        /* LEFT CONTENT */

        .vm-faq-left {
          padding-top: 8px;
        }

        .vm-faq-label {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #9d160d;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 28px;
        }

        .vm-faq-label::before {
          content: "";
          width: 31px;
          height: 1px;
          background: #9d160d;
        }

        .vm-faq-title {
          color: #54150e;
          font-size: 42px;
          font-weight: 750;
          line-height: 1.65;
          margin: 0 0 22px;
        }

        .vm-faq-description {
          color: #777777;
          font-size: 15px;
          line-height: 1.8;
          margin: 0 0 25px;
        }

        .vm-faq-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 62px;
          padding: 0 35px;
          border-radius: 50px;
          background: #08ae63;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: background 0.2s ease;
        }

        .vm-faq-button:hover {
          background: #078f53;
        }

        /* RIGHT ACCORDION */

        .vm-faq-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .vm-faq-item {
          border: 1px solid #e9ded7;
          border-radius: 15px;
          background: #ffffff;
          overflow: hidden;
          box-sizing: border-box;
        }

        .vm-faq-question {
          min-height: 60px;
          padding: 12px 21px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          list-style: none;
          color: #30231f;
          font-size: 14px;
          font-weight: 700;
        }

        .vm-faq-question::-webkit-details-marker {
          display: none;
        }

        .vm-faq-question::marker {
          display: none;
          content: "";
        }

        .vm-faq-question-text {
          flex: 1;
        }

        .vm-faq-toggle {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #eeeeee;
          color: #333333;
          font-size: 18px;
          font-weight: 400;
        }

        .vm-faq-toggle::before {
          content: "+";
        }

        .vm-faq-item[open] .vm-faq-toggle {
          background: #08b46b;
          color: #ffffff;
        }

        .vm-faq-item[open] .vm-faq-toggle::before {
          content: "×";
          font-size: 20px;
        }

        .vm-faq-item[open] .vm-faq-question {
          color: #54150e;
        }

        .vm-faq-answer {
          padding: 0 21px 20px;
          color: #858585;
          font-size: 14px;
          line-height: 1.85;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .vm-faq-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .vm-faq-title {
            font-size: 36px;
            line-height: 1.5;
          }
        }

        @media (max-width: 500px) {
          .vm-faq-section {
            padding: 45px 16px;
          }

          .vm-faq-title {
            font-size: 30px;
          }

          .vm-faq-question {
            font-size: 13px;
            padding: 12px 14px;
          }

          .vm-faq-answer {
            padding: 0 14px 16px;
            font-size: 13px;
          }
        }
      `}</style>

      <section className="vm-faq-section">
        <div className="vm-faq-container">

          {/* LEFT SIDE */}

          <div className="vm-faq-left">

            <div className="vm-faq-label">
              FAQ
            </div>

            <h2 className="vm-faq-title">
              మరింత సమాచారం,
              <br />
              సందేహాల కోసం
              <br />
              సంప్రదించండి
            </h2>

            <p className="vm-faq-description">
              మీకు అవసరమైన సహాయం అందించేందుకు మా టీమ్ 7
              భారతీయ భాషల్లో, రోజుకు 10 గంటలు అందుబాటులో
              ఉంటుంది. వాట్సాప్, ఫోన్ లేదా ఈ-మెయిల్ ద్వారా
              ఎప్పుడైనా మమ్మల్ని సంప్రదించండి.
            </p>

            <a
              href="#contact"
              className="vm-faq-button"
            >
              మా టీమ్‌ను సంప్రదించండి
            </a>

          </div>

          {/* RIGHT SIDE FAQ ACCORDION */}

          <div className="vm-faq-list">

            {faqItems.map((item, index) => (
              <details
                className="vm-faq-item"
                key={index}
                open={index === 0}
              >
                <summary className="vm-faq-question">

                  <span className="vm-faq-question-text">
                    {item.question}
                  </span>

                  <span className="vm-faq-toggle" />

                </summary>

                <div className="vm-faq-answer">
                  {item.answer}
                </div>

              </details>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}
