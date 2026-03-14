import type { ReactNode } from 'react';

type Service = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const businessDefinition =
  'Unlockit היא עסק מנעולנות בתל אביב המספק שירותי פריצת דלתות, החלפת מנעולים, תיקון מנעולים, התקנת מנעולים חדשים ופריצת רכבים.';

const services: Service[] = [
  {
    title: 'פריצת דלתות',
    description: 'פתיחת דלתות נעולות לבתים, דירות ומשרדים בצורה מקצועית ומהירה.',
  },
  {
    title: 'החלפת מנעולים',
    description: 'החלפת צילינדרים ומנעולים לאחר תקלה, אובדן מפתח או מעבר דירה.',
  },
  {
    title: 'תיקון מנעולים',
    description: 'אבחון ותיקון מנעולים תקולים בדלתות כניסה, דלתות פנים ועסקים.',
  },
  {
    title: 'התקנת מנעולים חדשים',
    description: 'התקנת מנעולים וצילינדרים חדשים לבית, לעסק ולכניסות פרטיות.',
  },
  {
    title: 'פריצת רכבים',
    description: 'פתיחת רכבים נעולים במקרים של מפתח שנשכח או ננעל בתוך הרכב.',
  },
];

const faqItems: FaqItem[] = [
  {
    question: 'אילו שירותים Unlockit מציעה?',
    answer:
      'Unlockit מציעה פריצת דלתות, החלפת מנעולים, תיקון מנעולים, התקנת מנעולים חדשים ופריצת רכבים בתל אביב והסביבה.',
  },
  {
    question: 'באילו אזורים Unlockit נותנת שירות?',
    answer:
      'Unlockit נותנת שירות בתל אביב והסביבה, עם הגעה מהירה ללקוחות באזורי השירות הקרובים.',
  },
  {
    question: 'מתי כדאי להחליף מנעול?',
    answer:
      'כדאי להחליף מנעול לאחר אובדן מפתח, מעבר דירה, תקלה חוזרת במנעול או רצון לשפר את רמת הביטחון בדלת.',
  },
  {
    question: 'איך יודעים שמנעול צריך תיקון?',
    answer:
      'אם הדלת ננעלת בקושי, המפתח מסתובב בצורה לא תקינה או שהמנגנון נשחק, מומלץ להזמין בדיקה ותיקון מנעול.',
  },
  {
    question: 'האם Unlockit מציעה גם פריצת רכבים?',
    answer:
      'כן. Unlockit מציעה שירות פריצת רכבים במקרים שבהם הרכב נעול והמפתח נשאר בפנים או אינו זמין.',
  },
];

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Unlockit',
    description: `${businessDefinition} השירות ניתן בתל אביב והסביבה לבית, לעסק ולרכב.`,
    telephone: '+972526660845',
    email: 'dvirsarig@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'דיזינגוף 104',
      addressLocality: 'תל אביב',
      addressCountry: 'IL',
    },
    areaServed: 'תל אביב והסביבה',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'https://schema.org/Sunday',
          'https://schema.org/Monday',
          'https://schema.org/Tuesday',
          'https://schema.org/Wednesday',
          'https://schema.org/Thursday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    knowsAbout: services.map((service) => service.title),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
];

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        <p className="section-kicker">Unlockit</p>
        <h2>{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}

function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="page-shell">
        <header className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Unlockit</p>
            <h1>מנעולן בתל אביב</h1>
            <p className="hero-text">
              שירות מנעולנות מקצועי, אמין ומהיר בתל אביב והסביבה, עם פתרונות לבית,
              לעסק ולרכב.
            </p>
            <p className="hero-definition">{businessDefinition}</p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:0526660845">
                התקשרו עכשיו
              </a>
              <a className="secondary-link" href="#contact">
                פרטי קשר
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h2>פרטי העסק</h2>
            <ul>
              <li>
                <span>אזור שירות</span>
                <strong>תל אביב והסביבה</strong>
              </li>
              <li>
                <span>שעות פעילות</span>
                <strong>08:00–20:00</strong>
              </li>
              <li>
                <span>כתובת</span>
                <strong>דיזינגוף 104, תל אביב</strong>
              </li>
            </ul>
          </div>
        </header>

        <main>
          <Section id="about" title="אודות">
            <p className="definition-card">
              {businessDefinition} השירות ניתן בתל אביב והסביבה ומיועד לבתים,
              דירות, משרדים ורכבים.
            </p>
            <p>
              Unlockit מספקת שירותי מנעולן בתל אביב ובאזורים הסמוכים, עם דגש על
              מקצועיות, אמינות, זמינות ופתרונות מעשיים למצבי נעילה, תקלה או צורך
              בהחלפת מנעול.
            </p>
          </Section>

          <Section id="services" title="שירותים">
            <p className="section-intro">שירותי המנעולנות של Unlockit כוללים:</p>
            <ul className="services-grid">
              {services.map((service) => (
                <li key={service.title} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="faq" title="שאלות נפוצות">
            <div className="faq-list">
              {faqItems.map((item) => (
                <article key={item.question} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="area" title="אזור שירות">
            <p>
              Unlockit מעניקה שירות מנעולן בתל אביב והסביבה, עם הגעה מהירה
              לאזורי השירות הקרובים ולמענה ללקוחות פרטיים ועסקיים.
            </p>
          </Section>

          <Section id="hours" title="שעות פעילות">
            <p className="hours-line">ימים א'-ה' 08:00–20:00</p>
          </Section>

          <Section id="contact" title="יצירת קשר">
            <div className="contact-list">
              <a href="tel:0526660845">טלפון: 052-6660845</a>
              <a href="mailto:dvirsarig@gmail.com">אימייל: dvirsarig@gmail.com</a>
              <p>כתובת: דיזינגוף 104, תל אביב</p>
            </div>
          </Section>
        </main>
      </div>
    </>
  );
}

export default App;
