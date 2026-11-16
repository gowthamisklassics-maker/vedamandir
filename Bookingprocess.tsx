
interface BookingProcessProps {
  icons: Record<string, React.ElementType>;
}

export default function BookingProcess({ icons }: BookingProcessProps) {
  const {
    HandHeart,
    ClipboardList,
    CheckCircle,
    Video,
    ArrowRight
  } = icons;

  const steps = [
    {
      icon: HandHeart,
      title: "Choose",
      line1: "Your ",
      highlight: "Pooja",
      color: "red"
    },
    {
      icon: ClipboardList,
      title: "Register with",
      line1: "",
      highlight: "Gotra & names",
      color: "red"
    },
    {
      icon: CheckCircle,
      title: "Puja",
      line1: "",
      highlight: "Performed",
      color: "green"
    },
    {
      icon: Video,
      title: "Receive",
      line1: "",
      highlight: "Puja Video",
      extra: "& Divine Blessings",
      color: "red"
    }
  ];

  return (
    <>
      <style>{`
        /* =====================================
           BOOKING JOURNEY SECTION
        ===================================== */

        .vm-journey,
        .vm-journey * {
          box-sizing: border-box;
        }

        .vm-journey {
          width: 100%;
          min-height: 484px;
          padding: 94px 24px 105px;
          background: #faf3f1;
          font-family: Arial, Helvetica, sans-serif;
        }

        .vm-journey-container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Main heading */

        .vm-journey-title {
          margin: 0 0 48px;
          text-align: center;
          color: #501008;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        /* Four-step layout */

        .vm-journey-steps {
          display: grid;
          grid-template-columns: 1fr 50px 1fr 50px 1fr 50px 1fr;
          align-items: start;
          justify-items: center;
          width: 100%;
        }

        .vm-journey-step {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* White icon circle */

        .vm-journey-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 9px;
        }

        .vm-journey-icon svg {
          width: 35px;
          height: 35px;
          stroke-width: 2.4;
        }

        .vm-journey-icon.red svg {
          color: #a20e00;
        }

        .vm-journey-icon.green svg {
          color: #0caf32;
          stroke-width: 3.5;
        }

        /* Step text */

        .vm-journey-text {
          color: #666666;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 400;
          text-align: center;
        }

        .vm-journey-text strong {
          color: #a20e00;
          font-weight: 700;
        }

        /* Connecting arrows */

        .vm-journey-arrow {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 38px;
        }

        .vm-journey-arrow svg {
          width: 30px;
          height: 25px;
          color: #d65300;
          stroke-width: 1.6;
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 900px) {
          .vm-journey {
            padding: 75px 20px;
            min-height: auto;
          }

          .vm-journey-title {
            font-size: 38px;
          }

          .vm-journey-steps {
            max-width: 750px;
            margin: 0 auto;
            grid-template-columns:
              1fr 30px 1fr 30px 1fr 30px 1fr;
          }

          .vm-journey-icon {
            width: 85px;
            height: 85px;
          }

          .vm-journey-text {
            font-size: 14px;
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 600px) {
          .vm-journey {
            padding: 55px 16px 60px;
          }

          .vm-journey-title {
            font-size: 29px;
            line-height: 1.25;
            margin-bottom: 38px;
          }

          .vm-journey-steps {
            grid-template-columns: 1fr 1fr;
            gap: 32px 15px;
          }

          .vm-journey-step {
            min-width: 0;
          }

          .vm-journey-icon {
            width: 78px;
            height: 78px;
          }

          .vm-journey-icon svg {
            width: 29px;
            height: 29px;
          }

          .vm-journey-text {
            font-size: 14px;
          }

          .vm-journey-arrow {
            display: none;
          }
        }
      `}</style>

      <section className="vm-journey">
        <div className="vm-journey-container">

          <h2 className="vm-journey-title">
            From Booking to Divine Blessings
          </h2>

          <div className="vm-journey-steps">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <>
                  <div className="vm-journey-step" key={step.title}>
                    <div className={`vm-journey-icon ${step.color}`}>
                      {Icon && <Icon />}
                    </div>

                    <div className="vm-journey-text">
                      {step.title}
                      <br />

                      {step.line1}
                      <strong>{step.highlight}</strong>

                      {step.extra && (
                        <>
                          <br />
                          {step.extra}
                        </>
                      )}
                    </div>
                  </div>

                  {index !== steps.length - 1 && (
                    <div
                      className="vm-journey-arrow"
                      key={`arrow-${index}`}
                    >
                      {ArrowRight && <ArrowRight />}
                    </div>
                  )}
                </>
              );
            })}

          </div>
        </div>
      </section>
    </>
  );
}
