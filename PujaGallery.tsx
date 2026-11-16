
const galleryImages = [
  "/gallery/puja-1.jpg",
  "/gallery/puja-2.jpg",
  "/gallery/puja-3.jpg",
  "/gallery/puja-4.jpg",
  "/gallery/puja-5.jpg",
  "/gallery/puja-6.jpg",
  "/gallery/puja-7.jpg",
  "/gallery/puja-8.jpg",
  "/gallery/puja-9.jpg"
];
const heights = [
  "side",
  "low",
  "high",
  "middle",
  "low",
  "high",
  "middle",
  "low",
  "middle"
];

export default function PujaGallery() {
  return (
    <>
      <style>{`
        .vm-gallery {
          width: 100%;
          height: 520px;
          position: relative;
          overflow: hidden;
          background: #fff;
          display: flex;
          align-items: flex-end;
          padding-bottom: 12px;
          box-sizing: border-box;
        }

        .vm-gallery-watermark {
          position: absolute;
          top: 28px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          pointer-events: none;
          color: #f7f2f2;
          font-size: clamp(75px, 10vw, 155px);
          font-weight: 800;
          line-height: 1.2;
          z-index: 0;
        }

        .vm-gallery-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        .vm-gallery-track {
          display: flex;
          align-items: flex-end;
          gap: 14px;
          width: max-content;
          animation: vmGalleryMove 55s linear infinite;
        }

        .vm-gallery-track:hover {
          animation-play-state: paused;
        }

        .vm-gallery-item {
          width: 140px;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 8px;
          background: #f5eeee;
        }

        .vm-gallery-item.side {
          height: 340px;
          width: 80px;
        }

        .vm-gallery-item.low {
          height: 172px;
          width: 230px;
        }

        .vm-gallery-item.high {
          height: 340px;
          width: 156px;
        }

        .vm-gallery-item.middle {
          height: 236px;
          width: 140px;
        }

        .vm-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .vm-gallery-viewport::before,
        .vm-gallery-viewport::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 3;
          pointer-events: none;
        }

        .vm-gallery-viewport::before {
          left: 0;
          background: linear-gradient(to right, #fff, transparent);
        }

        .vm-gallery-viewport::after {
          right: 0;
          background: linear-gradient(to left, #fff, transparent);
        }

        @keyframes vmGalleryMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 800px) {
          .vm-gallery {
            height: 350px;
          }

          .vm-gallery-item.side {
            height: 230px;
            width: 65px;
          }

          .vm-gallery-item.low {
            height: 125px;
            width: 155px;
          }

          .vm-gallery-item.high {
            height: 230px;
            width: 115px;
          }

          .vm-gallery-item.middle {
            height: 170px;
            width: 105px;
          }

          .vm-gallery-watermark {
            top: 45px;
            font-size: 65px;
          }
        }
      `}</style>

      <section className="vm-gallery">
        <div className="vm-gallery-watermark">
          వేద యాగాలు
        </div>

        <div className="vm-gallery-viewport">
          <div className="vm-gallery-track">
            {[...galleryImages, ...galleryImages].map((src, index) => (
              <div
                className={`vm-gallery-item ${heights[index % heights.length]}`}
                key={index}
              >
                <img
                  src={src}
                  alt={`Vedic puja ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
