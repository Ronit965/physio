import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero-physio.jpg'
import imgSportsTherapist from '../assets/gallery-knee-rehab.jpg'
import imgNeuroTherapist from '../assets/gallery-gait-balance-rehab.jpg'
import imgYogaTherapist from '../assets/gallery-eagle-pose-yoga.jpg'

const faqs = [
  {
    q: "Do I need a doctor's referral to start physiotherapy?",
    a: "No, a doctor's referral or prescription is not required. You can consult with our licensed physiotherapists directly. However, if you have recent diagnostic scans (X-ray, MRI) or previous surgical notes, please bring them along to help us formulate the most precise treatment plan."
  },
  {
    q: "What medical conditions do you treat at your clinic?",
    a: "We specialize in treating acute and chronic conditions including lower back pain, sciatica, neck stiffness, sports injuries (ACL/ligament tears, ankle sprains), rotator cuff injuries, post-operative joint rehabilitation, arthritis, postural deviations, and neurological balance conditions."
  },
  {
    q: "What should I expect during my initial assessment session?",
    a: "Your initial session lasts approximately 45 to 60 minutes. Your physiotherapist will review your medical history, perform a physical examination of joint mobility, posture, and muscular strength, provide immediate hands-on relief therapy, and design a customized rehabilitation program."
  },
  {
    q: "What are your clinic's working hours and availability?",
    a: "Our clinic is open Monday through Saturday from 6:00 PM to 9:00 PM for convenient evening consultations, and on Sunday from 12:00 Noon to 3:00 PM for weekend therapy sessions."
  },
  {
    q: "How many physiotherapy sessions will I need to see results?",
    a: "Most patients experience noticeable pain relief within 2 to 4 sessions. The total duration depends on the severity and chronicity of your condition—acute muscle strains often resolve in 3 to 6 visits, while complex surgical recovery may require 6 to 12 weeks of guided care."
  },
  {
    q: "Is physiotherapy treatment painful or uncomfortable?",
    a: "Our core mission is pain reduction. While some deep tissue mobilization or muscle release techniques might cause mild temporary soreness, treatments are calibrated to your personal pain threshold. Our therapists continually check in with you to ensure comfort."
  },
  {
    q: "What should I wear to my physiotherapy appointment?",
    a: "Please wear loose, comfortable, athletic clothing (such as gym shorts, track pants, or a t-shirt) that permits easy movement and allows the therapist to examine the affected joint or body area without restriction."
  },

  {
    q: "Can physiotherapy help me avoid surgery?",
    a: "In many cases, yes. Conservative physical therapy is recognized as an effective first-line approach to strengthen stabilizing musculature, reduce nerve compression, and restore joint mechanics—frequently preventing the necessity of surgery for disc bulges, tendon tears, and arthritis."
  },

  {
    q: "How do I book, cancel, or reschedule an appointment?",
    a: "You can book directly by calling us at +91 9560952179 or by using our online Contact Us form. If you need to reschedule or cancel, we kindly request at least 4 hours advance notice so another patient in pain can be accommodated."
  },
  {
    q: "Is parking available at the clinic and is it accessible?",
    a: "Yes, our clinic provides free dedicated customer parking directly outside our facility. The entire facility is wheelchair friendly with level ground entry and ramp access."
  }
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0)
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero__content">
            <span className="hero__badge">✨ Expert Physiotherapy Care</span>
            <h1 className="hero__title">
              Your Path to <span>Recovery</span> & Wellness
            </h1>
            <p className="hero__description">
              Experience personalized physiotherapy treatments designed to help you
              recover faster, move better, and live pain-free. Our expert team is
              dedicated to your well-being.
            </p>
            <div className="hero__buttons">
              <a href="https://calendly.com/moveana7/30min" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Book Appointment
              </a>
              <a href="#services" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Explore Services
              </a>
            </div>
          </div>

          <div className="hero__image">
            <div className="hero__image-wrapper">
              <img src={heroImg} alt="Physiotherapy and wellness" className="hero__img" />
            </div>
            <div className="hero__stat hero__stat--top">
              <div className="hero__stat-number">500+</div>
              <div className="hero__stat-label">Happy Patients</div>
            </div>
            <div className="hero__stat hero__stat--bottom">
              <div className="hero__stat-number">100%</div>
              <div className="hero__stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stat-item">
            <div className="stat-item__number">1+</div>
            <div className="stat-item__label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__number">500+</div>
            <div className="stat-item__label">Happy Patients</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__number">6+</div>
            <div className="stat-item__label">Services</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__number">100%</div>
            <div className="stat-item__label">Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Online Consultation Section */}
      <section className="online-consult" id="online-consult">
        <div className="container">
          <div className="online-consult__card">
            <div className="online-consult__content">
              <div className="online-consult__badge-row">
                <span className="online-consult__badge">🌐 Virtual Healthcare</span>
                <span className="online-consult__status">
                  <span className="location-pulse-dot"></span> Accepting Online Patients
                </span>
              </div>

              <h2 className="online-consult__title">
                Online Consultation <span>From Comfort of Home</span>
              </h2>

              <p className="online-consult__desc">
                Can't visit our clinic in person? Connect directly with our certified senior physiotherapists
                through secure 1-on-1 video sessions. Get accurate pain diagnostics, posture assessment, and customized guided recovery exercises.
              </p>

              {/* Key Features Grid */}
              <div className="online-consult__features">
                <div className="oc-feature-item">
                  <div className="oc-feature-item__icon">📹</div>
                  <div>
                    <h4>Live HD Video Assessment</h4>
                    <p>Detailed physical mobility & posture evaluation in real-time.</p>
                  </div>
                </div>

                <div className="oc-feature-item">
                  <div className="oc-feature-item__icon">📋</div>
                  <div>
                    <h4>Customized Home Routine</h4>
                    <p>Personalized exercise plan & guidance sent to your WhatsApp/Email.</p>
                  </div>
                </div>

                <div className="oc-feature-item">
                  <div className="oc-feature-item__icon">💬</div>
                  <div>
                    <h4>Ongoing Chat Follow-Up</h4>
                    <p>Direct chat support for continuous monitoring and recovery tracking.</p>
                  </div>
                </div>

                <div className="oc-feature-item">
                  <div className="oc-feature-item__icon">🕒</div>
                  <div>
                    <h4>Flexible Evening Slots</h4>
                    <p>Easily fit sessions around your work schedule or rest hours.</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="online-consult__cta-group">
                <a href="https://calendly.com/moveana7/30min" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Right Interactive Visual / Steps Card */}
            <div className="online-consult__sidebar">
              <div className="oc-steps-box">
                <div className="oc-steps-box__header">
                  <div className="oc-steps-box__dot"></div>
                  <h3>How Online Care Works</h3>
                </div>

                <div className="oc-step">
                  <div className="oc-step__num">1</div>
                  <div className="oc-step__info">
                    <strong>Schedule Your Slot</strong>
                    <p>Message us or send an inquiry with your preferred day & time.</p>
                  </div>
                </div>

                <div className="oc-step">
                  <div className="oc-step__num">2</div>
                  <div className="oc-step__info">
                    <strong>Join 1-on-1 Video Session</strong>
                    <p>Connect over WhatsApp Video, Google Meet, or Zoom with our expert.</p>
                  </div>
                </div>

                <div className="oc-step">
                  <div className="oc-step__num">3</div>
                  <div className="oc-step__info">
                    <strong>Get Your Action Plan</strong>
                    <p>Receive step-by-step rehabilitation exercises and daily posture tips.</p>
                  </div>
                </div>

                <div className="oc-trust-bar">
                  <div className="oc-trust-item">
                    <span>⚡</span> Instant Confirmation
                  </div>
                  <div className="oc-trust-item">
                    <span>🔒</span> 100% Private
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Services</span>
            <h2 className="section-title">Comprehensive Wellness & Care Solutions</h2>
            <p className="section-description">
              From expert physical rehabilitation to mindful movement and personalized nutrition,
              we provide integrated services designed for your complete health and vitality.
            </p>
          </div>

          <div className="services__grid">
            <div className="service-card">
              <div className="service-card__icon">🩺</div>
              <h3 className="service-card__title">Physiotherapy</h3>
              <p className="service-card__description">
                Evidence-based clinical rehabilitation, pain relief therapy, joint mobilization,
                and personalized recovery programs to restore maximum movement and function.
              </p>
              <Link to="/treatment" className="service-card__link">
                Explore treatments →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card__icon">🧘</div>
              <h3 className="service-card__title">Yoga</h3>
              <p className="service-card__description">
                Therapeutic and restorative yoga sessions combining posture alignment, flexibility
                training, breathwork, and mindfulness to relieve stress and tension.
              </p>
              <Link to="/contact" className="service-card__link">
                Join a session →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card__icon">🤸</div>
              <h3 className="service-card__title">Aerobics</h3>
              <p className="service-card__description">
                High-energy cardiovascular routines tailored to boost stamina, improve heart
                health, burn calories, and elevate your overall daily energy.
              </p>
              <Link to="/contact" className="service-card__link">
                Explore classes →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card__icon">🩰</div>
              <h3 className="service-card__title">Pilates</h3>
              <p className="service-card__description">
                Precision core-strengthening workouts focusing on pelvic stability, spinal
                alignment, muscular balance, and deep postural support for injury prevention.
              </p>
              <Link to="/contact" className="service-card__link">
                Discover Pilates →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card__icon">🥗</div>
              <h3 className="service-card__title">Diet & Nutrition</h3>
              <p className="service-card__description">
                Personalized dietary assessments and customized meal planning to nourish
                tissue repair, manage healthy weight, and fuel your long-term wellness.
              </p>
              <Link to="/contact" className="service-card__link">
                Consult nutritionist →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-card__icon">✨</div>
              <h3 className="service-card__title">Healing</h3>
              <p className="service-card__description">
                Holistic therapeutic healing and restorative therapies focused on stress relief,
                energy rebalancing, deep relaxation, and natural mind-body rejuvenation.
              </p>
              <Link to="/contact" className="service-card__link">
                Experience healing →
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-description">
              Hear from the people whose lives we've helped transform through
              dedicated physiotherapy care.
            </p>
          </div>

          <div className="testimonials__grid">
            <div className="testimonial-card">
              <div className="testimonial-card__stars">★★★★★</div>
              <p className="testimonial-card__text">
                "I came in with severe, chronic back and joint pain that made even basic daily movement exhausting. After working through a tailored physiotherapy plan, the improvement has been incredible. The therapist was patient, explained every exercise clearly, and helped me regain mobility without pushing me past my pain threshold. I’m now back to my routine completely pain-free"
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">AK</div>
                <div>
                  <div className="testimonial-card__name">Akash Kumar</div>
                  <div className="testimonial-card__role">Musculoskeletal Issues Patient</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-card__stars">★★★★★</div>
              <p className="testimonial-card__text">
                "inding a physiotherapist who truly understands senior mobility challenges made all the difference. My balance and walking stability had deteriorated significantly, leaving me anxious about falling. Thanks to steady balance training and gentle strength building, I feel confident on my feet again. The care, warmth, and attention given throughout the treatment were exceptional.!"
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">RV</div>
                <div>
                  <div className="testimonial-card__name">Raghav Verma</div>
                  <div className="testimonial-card__role">Geriatric Movement Loss Patient</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-card__stars">★★★★★</div>
              <p className="testimonial-card__text">
                

"I suffered a severe ACL tear playing basketball and was terrified I wouldn't get back to full speed. The sports rehab program here was an absolute game-changer. They mapped out a step-by-step strength, agility, and plyometric routine that rebuilt my knee stability and confidence. Back on the court now feeling 100%—couldn't have done it without their expertise!"
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">HI</div>
                <div>
                  <div className="testimonial-card__name">Himanshi</div>
                  <div className="testimonial-card__role">Sports Injuries Loss</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="timing" id="timing">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Working Hours</span>
            <h2 className="section-title">Clinic Timing</h2>
            <p className="section-description">
              We're here when you need us. Check our working hours and plan
              your visit accordingly.
            </p>
          </div>

          <div className="timing__highlights">
            <div className="timing__highlight-card">
              <div className="timing__highlight-days">Monday – Saturday</div>
              <div className="timing__highlight-hours">6:00 PM – 9:00 PM</div>
              <span className="timing__highlight-note">Evening Sessions</span>
            </div>
            <div className="timing__highlight-card timing__highlight-card--special">
              <div className="timing__highlight-days">Sunday</div>
              <div className="timing__highlight-hours">12:00 PM – 3:00 PM</div>
              <span className="timing__highlight-note">Noon Sessions</span>
            </div>
          </div>

          <div className="timing__table-wrapper">
            <table className="timing__table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                  <th>Session</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>6:00 PM – 9:00 PM</td>
                  <td>Evening Session</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>6:00 PM – 9:00 PM</td>
                  <td>Evening Session</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>6:00 PM – 9:00 PM</td>
                  <td>Evening Session</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>6:00 PM – 9:00 PM</td>
                  <td>Evening Session</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>6:00 PM – 9:00 PM</td>
                  <td>Evening Session</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>6:00 PM – 9:00 PM</td>
                  <td>Evening Session</td>
                </tr>
                <tr className="timing__sunday">
                  <td>Sunday</td>
                  <td>12:00 PM – 3:00 PM</td>
                  <td>Afternoon (Noon) Session</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-faq" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Find clear answers to common questions about our physiotherapy treatments, appointments, and clinic policies.
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className={`faq-item${isOpen ? ' active' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking / CTA Section */}
      <section className="cta" id="cta">
        <div className="container">
          <div className="cta__box">
            <h2 className="cta__title">Ready to Start Your Recovery?</h2>
            <p className="cta__description">
              Call us directly at +91 9560952179 or visit our clinic during working hours to schedule your session.
            </p>
            <div className="cta__buttons">
              <a href="https://calendly.com/moveana7/30min" target="_blank" rel="noopener noreferrer" className="btn-white" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Book Appointment
              </a>
              <Link to="/contact" className="btn-outline-white" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
