type Service = {
  title: string;
};

const services: Service[] = [
  { title: 'פריצת דלתות' },
  { title: 'החלפת מנעולים' },
  { title: 'תיקון מנעולים' },
  { title: 'התקנת מנעולים חדשים' },
  { title: 'פריצת רכבים' },
];

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
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
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Unlockit</p>
          <h1>מנעולן בתל אביב</h1>
          <p className="hero-text">
            שירות מנעולנות מקצועי, אמין ומהיר בתל אביב והסביבה, עם יחס אישי
            וזמינות לאורך היום.
          </p>
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
          <p>
            Unlockit מספקת שירותי מנעולן בתל אביב ובאזורים הסמוכים, עם דגש על
            מקצועיות, אמינות ופתרונות מהירים לבית, לעסק ולרכב.
          </p>
        </Section>

        <Section id="services" title="שירותים">
          <ul className="services-grid">
            {services.map((service) => (
              <li key={service.title} className="service-card">
                {service.title}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="area" title="אזור שירות">
          <p>השירות זמין בתל אביב והסביבה, עם הגעה מהירה לאזורי השירות הקרובים.</p>
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
  );
}

export default App;
