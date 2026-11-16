
interface TestimonialsProps {
  icons: Record<string, any>;
}

export default function Testimonials({ icons }: TestimonialsProps) {
  const { CheckCircle } = icons;

  const reviews = [
    {
      name: "శ్రీకాంత్",
      initial: "శ్రీ",
      text: "వేదమందిర్ బృందానికి నా హృదయపూర్వక ధన్యవాదాలు. ముఖ్యంగా పండితులకు ప్రత్యేక కృతజ్ఞతలు. వారు పూజను అత్యంత శ్రద్ధతో, శాస్త్రోక్తంగా నిర్వహించారు. నేను ఊహించిన దానికంటే ఎంతో అద్భుతంగా పూజ జరిగింది."
    },
    {
      name: "పద్మావతి",
      initial: "ప",
      text: "వేదమందిర్‌లో నేను నిర్వహించిన పూజను శాస్త్రోక్తంగా నిర్వహించి, ప్రతి దశలో అద్భుతమైన సహాయాన్ని అందించారు. మా కుటుంబానికి ఎంతో మంచి అనుభవం కలిగింది."
    },
    {
      name: "శ్రీనివాస్",
      initial: "శ్రీ",
      text: "పూజా వీడియోలు, ఫోటోలు సమయానికి అందాయి. పూజను నేను దగ్గరుండి పాల్గొన్న అనుభూతి కలిగింది. ఈ పూజతో నేను, మా కుటుంబం చాలా సంతోషంగా ఉన్నాం."
    },
    {
      name: "ప్రశాంత్",
      initial: "ప్ర",
      text: "వేదమందిర్ ద్వారా పూజ చేయించుకోవడం ఎంతో సంతృప్తినిచ్చింది. బుకింగ్ ప్రాసెస్ చాలా ఈజీగా ఉంది. వేదపండితులు శాస్త్రోక్తంగా, భక్తిశ్రద్ధలతో పూజ నిర్వహించారు. పూజా వీడియోలు, ఫోటోలు కూడా సమయానికి అందాయి."
    }
  ];

  return (
    <>
      <style>{`
        .vm-testimonials {
          width: 100%;
          background: #f8f2f1;
          padding: 65px 24px 75px;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .vm-testimonials-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .vm-testimonials-title {
          color: #54150e;
          font-size: 52px;
          font-weight: 750;
          margin: 0 0 55px;
          letter-spacing: -1.5px;
        }

        .vm-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .vm-testimonial-card {
          min-height: 405px;
          padding: 28px 21px 20px;
          background: #fff;
          border: 1px solid #ece9e8;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .vm-testimonial-quote {
          color: #a0190b;
          font-family: Georgia, serif;
          font-size: 76px;
          font-weight: bold;
          line-height: 0.85;
          text-align: center;
          height: 55px;
        }

        .vm-testimonial-text {
          color: #858585;
          font-size: 15px;
          line-height: 1.85;
          text-align: left;
          margin: 14px 0 20px;
          flex: 1;
        }

        .vm-testimonial-divider {
          width: 100%;
          height: 1px;
          background: #eeeeee;
          margin-bottom: 17px;
        }

        .vm-testimonial-profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
        }

        .vm-testimonial-avatar {
          width: 51px;
          height: 51px;
          border-radius: 50%;
          background: #e9e2dc;
          color: #6b281e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          font-weight: bold;
          position: relative;
        }

        .vm-testimonial-verified {
          position: absolute;
          width: 21px;
          height: 21px;
          right: -6px;
          bottom: -2px;
          color: #2196f3;
          background: white;
          border-radius: 50%;
        }

        .vm-testimonial-name {
          color: #242020;
          font-size: 18px;
          font-weight: 500;
        }

        .vm-testimonial-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 30px;
        }

        .vm-testimonial-dot {
          width: 25px;
          height: 4px;
          border-radius: 10px;
          background: #d5cecc;
        }

        .vm-testimonial-dot:first-child {
          background: #16b978;
        }

        .vm-testimonial-dot:nth-child(2) {
          background: #9ac9b4;
        }

        @media (max-width: 1000px) {
          .vm-testimonials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .vm-testimonials-title {
            font-size: 42px;
          }
        }

        @media (max-width: 600px) {
          .vm-testimonials {
            padding: 40px 16px;
          }

          .vm-testimonials-grid {
            grid-template-columns: 1fr;
          }

          .vm-testimonials-title {
            font-size: 34px;
            margin-bottom: 30px;
          }

          .vm-testimonial-card {
            min-height: 340px;
          }
        }
      `}</style>

      <section className="vm-testimonials">
        <div className="vm-testimonials-inner">

          <h2 className="vm-testimonials-title">
            Testimonials
          </h2>

          <div className="vm-testimonials-grid">
            {reviews.map((review, index) => (
              <article className="vm-testimonial-card" key={index}>

                <div className="vm-testimonial-quote">
                  “
                </div>

                <p className="vm-testimonial-text">
                  {review.text}
                </p>

                <div className="vm-testimonial-divider" />

                <div className="vm-testimonial-profile">
                  <div className="vm-testimonial-avatar">
                    {review.initial}
                    <CheckCircle className="vm-testimonial-verified" fill="#2196f3" color="#2196f3" />
                  </div>

                  <span className="vm-testimonial-name">
                    {review.name}
                  </span>
                </div>

              </article>
            ))}
          </div>

          <div className="vm-testimonial-dots">
            <span className="vm-testimonial-dot" />
            <span className="vm-testimonial-dot" />
            <span className="vm-testimonial-dot" />
            <span className="vm-testimonial-dot" />
          </div>

        </div>
      </section>
    </>
  );
}
