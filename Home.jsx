
export default function Home({ icons, components, pujas, faqs }) {
  const {
    Navbar,
    Hero,
    TrustStrip,
    BookingProcess,
    PujaSection,
    PujaGallery,
    TrustBadges,
    Testimonials,
    FAQ,
    Footer,
    FloatingContact
  } = components;

  return (
    <>
      <Navbar icons={icons} />

      <Hero icons={icons} />

      <TrustStrip icons={icons} />

      <BookingProcess icons={icons} />

      <PujaSection
        icons={icons}
        pujas={pujas}
      />

      {/* PUJA GALLERY */}
      <PujaGallery />

      {/* FOUR GREEN TELUGU BADGES */}
      <TrustBadges icons={icons} />

      {/* TESTIMONIALS */}
      <Testimonials icons={icons} />

      <FAQ
  icons={icons}
  faqs={faqs}
/>

      <Footer icons={icons} />

      <FloatingContact icons={icons} />
    </>
  );
}
