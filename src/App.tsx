import { useState, useEffect, useRef, type ReactNode } from 'react';

/* ── Constants ── */
const PHONE = '0526660845';
const PHONE_DISPLAY = '052-666-0845';
const PHONE_INTL = '+972526660845';
const WHATSAPP_URL = `https://wa.me/972526660845?text=${encodeURIComponent('שלום, אשמח לקבל שירות מנעולן')}`;
const SITE_URL = 'https://dvir-locksmith.com';
const BUSINESS_NAME = 'דביר המנעולן';

/* ── Data ── */
const services = [
  {
    title: 'פריצת דלתות',
    description: 'פתיחת דלתות נעולות לבתים, דירות ומשרדים – מהיר, מקצועי וללא נזק.',
    img: '/images/service-doors.jpg',
  },
  {
    title: 'פריצת רכבים',
    description: 'פתיחת רכבים נעולים – מפתח שנשכח או ננעל בתוך הרכב? אנחנו כאן.',
    img: '/images/service-cars.jpg',
  },
  {
    title: 'החלפת מנעולים',
    description: 'החלפת צילינדרים ומנעולים – לאחר תקלה, אובדן מפתח או מעבר דירה.',
    img: '/images/service-replace.jpg',
  },
  {
    title: 'תיקון מנעולים',
    description: 'אבחון ותיקון מנעולים תקולים – לדלתות כניסה, דלתות פנים ועסקים.',
    img: '/images/service-repair.jpg',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'פנייה ואבחון ראשוני',
    text: 'מתקשרים אלינו בכל שעה, מתארים את הבעיה ומקבלים הערכת מחיר וזמן הגעה מיידיים.',
  },
  {
    num: '02',
    title: 'הגעה מהירה לשטח',
    text: 'המנעולן מגיע עם כל הציוד הנדרש – ממוצע הגעה של 20-40 דקות לאזור תל אביב והמרכז.',
  },
  {
    num: '03',
    title: 'ביצוע מקצועי ומסירה',
    text: 'עבודה מקצועית, נקייה ובטוחה. בסיום – מסירה מסודרת, הסבר ללקוח וערבות על העבודה.',
  },
];

const testimonials = [
  {
    name: 'איילת, תל אביב',
    text: 'נתקעתי מחוץ לבית בשעת לילה. דביר הגיע מהר מאוד, פתר את הבעיה בלי לגרום נזק והכל עם יחס אדיב ומקצועי.',
  },
  {
    name: 'רועי, רמת גן',
    text: 'שירות מעולה! החלפת צילינדר בוצעה בצורה נקייה ומהירה. מחיר הוגן, הסבר ברור ושקט נפשי מלא.',
  },
  {
    name: 'דנה, גבעתיים',
    text: 'ננעלתי מחוץ לרכב וקיבלתי מענה תוך דקות. עבודה מקצועית, תקשורת מצוינת ואמינות ברמה גבוהה.',
  },
];

const faqItems = [
  { question: 'כמה עולה פריצת דלת?', answer: 'המחיר משתנה בהתאם לסוג הדלת והמנעול. צרו קשר לקבלת הצעת מחיר מיידית ללא התחייבות.' },
  { question: 'תוך כמה זמן מגיע מנעולן?', answer: 'זמן ההגעה הממוצע הוא 20-40 דקות לאזור תל אביב והמרכז, בהתאם למיקום ולזמינות.' },
  { question: 'האם השירות זמין 24/7?', answer: 'כן! דביר המנעולן מעניק שירות חירום 24 שעות ביממה, 7 ימים בשבוע, כולל חגים וסופי שבוע.' },
  { question: 'באילו אזורים ניתן שירות?', answer: 'השירות ניתן בתל אביב, רמת גן, גבעתיים, חולון, בת ים והסביבה – עם הגעה מהירה לכל אזור המרכז.' },
];

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: BUSINESS_NAME,
    url: SITE_URL,
    description: 'דביר המנעולן – מנעולן בתל אביב 24/7. פריצת דלתות, רכבים, החלפת מנעולים ושירות חירום מהיר ואמין.',
    telephone: PHONE_INTL,
    email: 'dvirsarig@gmail.com',
    image: `${SITE_URL}/logo.png`,
    priceRange: '₪',
    address: { '@type': 'PostalAddress', addressLocality: 'תל אביב', addressRegion: 'תל אביב', addressCountry: 'IL' },
    geo: { '@type': 'GeoCoordinates', latitude: 32.0853, longitude: 34.7818 },
    areaServed: [
      { '@type': 'City', name: 'תל אביב' },
      { '@type': 'City', name: 'רמת גן' },
      { '@type': 'City', name: 'גבעתיים' },
      { '@type': 'City', name: 'חולון' },
      { '@type': 'City', name: 'בת ים' },
    ],
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '00:00', closes: '23:59' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'שירותי מנעולנות',
      itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.description } })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  },
];

/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

/* ── Components ── */
function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <h3>{question}</h3>
        <span className="faq-chevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
        </span>
      </button>
      <div className="faq-answer" aria-hidden={!open}><p>{answer}</p></div>
    </div>
  );
}

/* Phone icon reused */
const PhoneIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const WhatsAppIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Main App ── */
function App() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* ===== NAVBAR (sticky, transparent → solid on scroll) ===== */}
      <nav className={`navbar${navScrolled ? ' navbar-solid' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo">
            <img src="/logo.png" alt={BUSINESS_NAME} width="200" height="60" />
          </a>
          <div className="navbar-links">
            <a href="#about">אודות</a>
            <a href="#services">שירותים</a>
            <a href="#process">איך זה עובד</a>
            <a href="#testimonials">המלצות</a>
            <a href="#faq">שאלות נפוצות</a>
            <a href="#contact">צור קשר</a>
          </div>
          <a className="navbar-cta" href={`tel:${PHONE}`}>
            {PhoneIcon}
            <span>חייגו עכשיו</span>
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <Reveal>
            <span className="hero-badge">שירות חירום 24/7</span>
            <h1>דביר המנעולן<br /><span className="hero-h1-sub">מנעולן בתל אביב 24/7</span></h1>
            <p className="hero-subtitle">שירותי פריצה, החלפת מנעולים ופריצת רכבים בתל אביב והמרכז – הגעה מהירה ושירות אמין</p>
            <div className="hero-actions">
              <a className="btn btn-accent btn-lg" href={`tel:${PHONE}`}>{PhoneIcon} לשיחת ייעוץ חינם</a>
              <a className="btn btn-outline-white btn-lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WhatsAppIcon} WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ===== TRUST STRIP ===== */}
      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <Reveal className="trust-item" delay={0}>
            <div className="trust-num">24/7</div>
            <div className="trust-label">זמינות מלאה</div>
          </Reveal>
          <Reveal className="trust-item" delay={100}>
            <div className="trust-num">20-40</div>
            <div className="trust-label">דקות הגעה</div>
          </Reveal>
          <Reveal className="trust-item" delay={200}>
            <div className="trust-num">100%</div>
            <div className="trust-label">שירות מקצועי</div>
          </Reveal>
          <Reveal className="trust-item" delay={300}>
            <div className="trust-num">★★★★★</div>
            <div className="trust-label">שירות אמין ומקצועי</div>
          </Reveal>
        </div>
      </section>

      <main>
        {/* ===== ABOUT ===== */}
        <section id="about" className="section section-white">
          <div className="container about-grid">
            <Reveal className="about-image-wrap">
              <div className="about-image">
                <img src="/images/about.jpg" alt="דביר המנעולן בעבודה" />
              </div>
            </Reveal>
            <Reveal className="about-text" delay={150}>
              <span className="section-label">אודות</span>
              <h2>איכות, אמינות ושירות אישי</h2>
              <p>
                דביר המנעולן מספק שירותי מנעולנות בתל אביב, רמת גן, גבעתיים, חולון והסביבה.
                השירות כולל פריצת דלתות, פריצת רכבים, החלפת צילינדרים ושירות חירום 24/7.
              </p>
              <p>
                עם ניסיון רב ושירות אישי, אנו מספקים מענה מהיר ומקצועי בכל שעה – בין אם מדובר בנעילה בלתי צפויה,
                צורך בהחלפת מנעול לאחר מעבר דירה, או כל בעיית מנעולנות אחרת. הלקוחות שלנו נהנים משקט נפשי
                בזכות שקיפות מלאה, עמידה בזמנים ואפס פשרות על סטנדרטי איכות.
              </p>
              <a className="btn btn-primary btn-md" href={`tel:${PHONE}`}>{PhoneIcon} צרו קשר</a>
            </Reveal>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="section section-gray">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-label">שירותים</span>
              <h2>השירותים שלנו</h2>
              <p className="section-desc">פתרונות מנעולנות מקצועיים לכל מצב</p>
            </Reveal>
            <div className="services-grid">
              {services.map((s, i) => (
                <Reveal key={s.title} className="svc-card" delay={i * 100}>
                  <div className="svc-card-img">
                    <img src={s.img} alt={s.title} loading="lazy" />
                  </div>
                  <div className="svc-card-body">
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section id="process" className="section section-white">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-label">התהליך</span>
              <h2>איך זה עובד?</h2>
            </Reveal>
            <div className="process-grid">
              {processSteps.map((step, i) => (
                <Reveal key={step.num} className="process-card" delay={i * 120}>
                  <div className="process-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section id="testimonials" className="section section-gray testimonials-section">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-label">לקוחות ממליצים</span>
              <h2>המלצות של לקוחות</h2>
              <p className="section-desc">אמינות, מקצועיות ושירות אישי הם מה שמוביל אותנו בכל עבודה</p>
            </Reveal>

            <div className="testimonials-grid">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} className="testimonial-card" delay={index * 100}>
                  <div className="testimonial-stars" aria-hidden="true">★★★★★</div>
                  <p className="testimonial-text">"{item.text}"</p>
                  <div className="testimonial-author">{item.name}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="section section-gray">
          <div className="container faq-container">
            <Reveal className="section-header">
              <span className="section-label">שאלות נפוצות</span>
              <h2>שאלות ותשובות</h2>
            </Reveal>
            <div className="faq-list">
              {faqItems.map((item) => (
                <FaqAccordion key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section className="cta-banner">
          <div className="cta-banner-overlay" />
          <div className="container cta-banner-inner">
            <Reveal>
              <h2>צריכים מנעולן? אנחנו כאן בשבילכם</h2>
              <p>שירות מהיר, מקצועי ואמין – 24 שעות ביממה, 7 ימים בשבוע</p>
              <div className="cta-banner-actions">
                <a className="btn btn-accent btn-lg" href={`tel:${PHONE}`}>{PhoneIcon} חייגו {PHONE_DISPLAY}</a>
                <a className="btn btn-outline-white btn-lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WhatsAppIcon} שלחו הודעה</a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="section section-white">
          <div className="container">
            <Reveal className="section-header">
              <span className="section-label">צור קשר</span>
              <h2>דברו איתנו</h2>
            </Reveal>
            <div className="contact-grid">
              <Reveal className="contact-card" delay={0}>
                <div className="contact-card-icon">{PhoneIcon}</div>
                <h3>טלפון</h3>
                <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
              </Reveal>
              <Reveal className="contact-card" delay={100}>
                <div className="contact-card-icon contact-card-icon-wa">{WhatsAppIcon}</div>
                <h3>WhatsApp</h3>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">שלחו הודעה</a>
              </Reveal>
              <Reveal className="contact-card" delay={200}>
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3>אזור שירות</h3>
                <span>תל אביב, רמת גן, גבעתיים, חולון</span>
              </Reveal>
              <Reveal className="contact-card" delay={300}>
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <h3>שעות פעילות</h3>
                <span>24/7 כולל חגים וסופי שבוע</span>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container footer-inner">
          <img src="/logo.png" alt={BUSINESS_NAME} className="footer-logo" />
          <p>© {new Date().getFullYear()} {BUSINESS_NAME} – מנעולן בתל אביב | כל הזכויות שמורות</p>
        </div>
      </footer>

      {/* ===== MOBILE STICKY CTA ===== */}
      <a className="mobile-sticky-cta" href={`tel:${PHONE}`} aria-label="חייג עכשיו">
        {PhoneIcon} חייג עכשיו
      </a>
    </>
  );
}

export default App;
