import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('275 Ground Floor Triveni Apartment Near ESIC Hospital, Jhilmil Colony Delhi 110095')
    setCopiedAddress(true)
    setTimeout(() => setCopiedAddress(false), 2200)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Build the WhatsApp message from form data
    const whatsappNumber = '919560952179'
    const lines = [
      `*New Inquiry from Website*`,
      ``,
      `*Name:* ${formData.name}`,
      formData.phone ? `*Phone:* ${formData.phone}` : '',
      `*Email:* ${formData.email}`,
      `*Subject:* ${formData.subject}`,
      ``,
      `*Message:*`,
      formData.message,
    ].filter(Boolean).join('\n')

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines)}`
    window.open(whatsappURL, '_blank')

    setLoading(false)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
    })
  }

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="section-subtitle">Get In Touch</span>
          <h1 className="page-hero__title">
            Contact <span>Our Clinic</span>
          </h1>
          <p className="page-hero__description">
            Have questions about our treatments, facility, or working hours?
            Send us a message or connect directly with our front desk.
          </p>
        </div>
      </div>

      <section className="contact-page-content">
        <div className="container">
          {/* Contact Info Cards */}
          <div className="contact-cards-grid">
            <div className="contact-info-card">
              <div className="contact-info-card__icon">📍</div>
              <h3>Visit Us</h3>
              <p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=275+Triveni+Apartment+Near+ESIC+Hospital+Jhilmil+Colony+Delhi+110095"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  275 Ground Floor Triveni Apartment Near ESIC Hospital, Jhilmil Colony Delhi 110095
                </a>
              </p>
              <span className="contact-info-card__sub">Free parking available on-site</span>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__icon">📞</div>
              <h3>Call Us</h3>
              <p><a href="tel:+91 9560952179">+91 9560952179</a></p>
              <span className="contact-info-card__sub">Direct reception line</span>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__icon">✉️</div>
              <h3>Email Us</h3>
              <p><a href="mailto:hello@physio.com">hello@physio.com</a></p>
              <span className="contact-info-card__sub">Replies within 2 business hours</span>
            </div>

            <div className="contact-info-card contact-info-card--highlight">
              <div className="contact-info-card__icon">🕐</div>
              <h3>Clinic Hours</h3>
              <p><strong>Mon – Sat:</strong> 6:00 PM – 9:00 PM</p>
              <p><strong>Sunday:</strong> 12:00 PM – 3:00 PM</p>
            </div>
          </div>

          {/* Main Form & Map Grid */}
          <div className="contact-split-grid">
            {/* Form Box */}
            <div className="contact-form-box">
              <div className="contact-form-header">
                <h2>Send Us a Message</h2>
                <p>Leave your inquiry below and our administrative team will get back to you promptly.</p>
              </div>

              {submitted ? (
                <div className="contact-success-state">
                  <div className="contact-success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>{formData.subject}</strong>.
                  </p>
                  <div className="booking-summary-box">
                    <div><span>Subject:</span> {formData.subject}</div>
                    <div><span>Email:</span> {formData.email}</div>
                    {formData.phone && <div><span>Phone:</span> {formData.phone}</div>}
                  </div>
                  <p className="contact-success-subtext">
                    Our team will reply to your email or call you within 2 business hours.
                  </p>
                  <button type="button" className="btn-primary" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Inquiry Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Online Consultation">🌐 Online Consultation (Video Session)</option>
                        <option value="Physiotherapy">Physiotherapy (Clinic Visit)</option>
                        <option value="Yoga">Yoga Sessions</option>
                        <option value="Aerobics">Aerobics & Fitness</option>
                        <option value="Pilates">Pilates Training</option>
                        <option value="Diet and Nutrition">Diet & Nutrition Guidance</option>
                        <option value="Healing">Holistic Healing Therapy</option>
                        <option value="Treatment Information">Treatment & Therapy Details</option>
                        <option value="Clinic Timings & Location">Clinic Timings & Location</option>
                        <option value="Insurance & Billing">Insurance & Billing Questions</option>
                        <option value="Feedback & Support">Feedback & Patient Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your question, feedback, or inquiry here..."
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn" disabled={loading}>
                    {loading ? 'Sending Message...' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Location & Visitor Info */}
            <div className="contact-details-side" id="location">
              <div className="location-card">
                <div className="location-card__header">
                  <div className="location-card__title-group">
                    <div className="location-card__icon">📍</div>
                    <div>
                      <h3 className="location-card__title">Find Our Clinic</h3>
                      <p className="location-card__subtitle">Jhilmil Colony, East Delhi</p>
                    </div>
                  </div>
                  <span className="location-card__badge">
                    <span className="location-pulse-dot"></span> Open Today
                  </span>
                </div>

                <div className="location-card__map-frame">
                  <iframe
                    title="Clinic Google Map"
                    src="https://maps.google.com/maps?q=275+Triveni+Apartment+Near+ESIC+Hospital+Jhilmil+Colony+Delhi+110095&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="270"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="location-card__map-overlay-tag">
                    <span>🏢 Triveni Apartment, Ground Floor</span>
                  </div>
                </div>

                <div className="location-card__body">
                  <div className="location-card__address-box">
                    <div className="location-card__address-text">
                      <strong>275 Ground Floor Triveni Apartment</strong>
                      <span>Near ESIC Hospital, Jhilmil Colony, Delhi 110095</span>
                    </div>
                    <button
                      type="button"
                      className={`location-card__copy-btn ${copiedAddress ? 'copied' : ''}`}
                      onClick={handleCopyAddress}
                      title="Copy full address"
                      aria-label="Copy Address"
                    >
                      {copiedAddress ? (
                        <>
                          <span className="copy-icon">✓</span>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <span className="copy-icon">📋</span>
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="location-card__chips">
                    <span className="location-chip">🏥 Near ESIC Hospital</span>
                    <span className="location-chip">🚗 Free On-Site Parking</span>
                    <span className="location-chip">♿ Ground Floor Access</span>
                  </div>

                  <div className="location-card__actions">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=275+Triveni+Apartment+Near+ESIC+Hospital+Jhilmil+Colony+Delhi+110095"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-btn location-btn--primary"
                    >
                      <span>🧭</span> Get Directions
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=275+Triveni+Apartment+Near+ESIC+Hospital+Jhilmil+Colony+Delhi+110095"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-btn location-btn--secondary"
                    >
                      <span>🗺️</span> Open in Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="visitor-guide-box">
                <h3>Clinic Visitor Information</h3>
                <ul className="visitor-guide-list">
                  <li>
                    <span className="guide-icon">📍</span>
                    <div>
                      <strong>Easy Accessibility:</strong>
                      <p>Located near ESIC Hospital, Jhilmil Colony with step-free entry and wide doorways.</p>
                    </div>
                  </li>
                  <li>
                    <span className="guide-icon">🅿️</span>
                    <div>
                      <strong>Free On-Site Parking:</strong>
                      <p>Dedicated reserved parking stalls directly in front of the clinic.</p>
                    </div>
                  </li>
                  <li>
                    <span className="guide-icon">🕐</span>
                    <div>
                      <strong>Evening & Weekend Hours:</strong>
                      <p>Open Monday–Saturday 6PM–9PM and Sunday 12 Noon–3PM.</p>
                    </div>
                  </li>
                  <li>
                    <span className="guide-icon">🛡️</span>
                    <div>
                      <strong>Direct Inquiries:</strong>
                      <p>Our team is available by phone and email during working hours for quick responses.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
