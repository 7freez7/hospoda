import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Zde by šel kód na odeslání na backend
    console.log("Formulář odeslán:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <div className="headerImage">
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/tavern.jpg`}
          alt="Kontakt"
        />
        <div className="Description">
          <h1>Kontaktujte Nás</h1>
          <p>Jsme tu pro vás — zeptejte se na cokoli nebo si rezervujte akci.</p>
        </div>
      </div>

      <div className="sections-container">
        {/* Kontaktní informace */}
        <section className="contact-info-section">
          <h2>Kontaktní Informace</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h3>Telefon</h3>
              <p>
                <a href="tel:+420123456789">+420 123 456 789</a>
              </p>
            </div>
            <div className="contact-item">
              <h3>E-mail</h3>
              <p>
                <a href="mailto:info@hospodahusků.cz">info@hospodahusků.cz</a>
              </p>
            </div>
            <div className="contact-item">
              <h3>Adresa</h3>
              <p>Běleč nad Orlicí<br />Královéhradecký kraj</p>
            </div>
            <div className="contact-item">
              <h3>Otevírací Doba</h3>
              <p>
                Po - Pá: 11:00 - 22:00<br />
                So - Ne: 10:00 - 22:00
              </p>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="map-section">
          <h2>Kde Nás Najdete</h2>
          <div className="map-container">
            <iframe
              title="Mapa - Hospoda U Hušků"
              src="https://www.google.com/maps?q=Běleč%20nad%20Orlicí&output=embed"
              width="100%"
              height="400"
              style={{ border: "0", borderRadius: "15px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>


        {/* Kontaktní formulář */}
        <section className="contact-form-section">
          <h2>Pošlete Nám Zprávu</h2>
          {submitted && (
            <div className="form-success">
              ✓ Vaše zpráva byla úspěšně odeslána. Děkujeme!
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Jméno *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Vaše jméno"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="váš@email.cz"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+420 123 456 789"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Předmět *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Například: Rezervace, Dotaz o pivu..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Zpráva *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Vaša zpráva..."
                rows={6}
              />
            </div>

            <button type="submit" className="contact-btn">
              Odeslat Zprávu
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;