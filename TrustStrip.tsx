
interface TrustStripProps {
  icons: Record<string, any>;
}

export default function TrustStrip({ icons }: TrustStripProps) {
  const { Video, ShieldCheck, Landmark, MessageCircle } = icons;

  const items = [
    { icon: Video, text: "మీ సంకల్పం కోసం పూజ" },
    { icon: ShieldCheck, text: "పవిత్ర క్షేత్రాలే నిర్వహణ" },
    { icon: Landmark, text: "పూజను ప్రత్యక్షంగా చూడండి" },
    { icon: MessageCircle, text: "24 గంటల్లో మీ WhatsAppకు" }
  ];

  return (
    <>
      <style>{`
        .vm-trust-new {
          width: 100%;
          padding: 35px 24px;
          background: #faf5f4;
          box-sizing: border-box;
        }

        .vm-trust-new-inner {
          max-width: 1280px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .vm-trust-new-item {
          min-height: 54px;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid #83cba5;
          border-radius: 40px;
          background: #e8f0e9;
          color: #252525;
          font-size: 15px;
          font-weight: 500;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .vm-trust-new-item svg {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .vm-trust-new-inner {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .vm-trust-new-item {
            white-space: normal;
            font-size: 13px;
          }
        }

        @media (max-width: 500px) {
          .vm-trust-new-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="vm-trust-new">
        <div className="vm-trust-new-inner">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="vm-trust-new-item" key={index}>
                <Icon />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
