import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLinkClick = (e, targetHash) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(targetHash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', targetHash)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      e.preventDefault()
      navigate(`/${targetHash}`)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-name">Physio.</div>
            <p className="footer__brand-description">
              Dedicated to helping you recover, move better, and live a
              healthier life through expert physiotherapy care.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
              <a href="#" className="footer__social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="footer__social-link" aria-label="Instagram">📷</a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Quick Links</h4>
            <ul>
              <li><a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>Home</a></li>
              <li><Link to="/treatment">Treatment</Link></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a></li>
              <li><a href="#online-consult" onClick={(e) => handleLinkClick(e, '#online-consult')}>Online Consult</a></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><a href="#timing" onClick={(e) => handleLinkClick(e, '#timing')}>Timing</a></li>
              <li><Link to="/contact#location">Location</Link></li>
              <li><a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>FAQ</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Our Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Physiotherapy</a></li>
              <li><a href="#online-consult" onClick={(e) => handleLinkClick(e, '#online-consult')}>Online Consultation 🌐</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Yoga</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Aerobics</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Pilates</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Diet & Nutrition</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Healing</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Contact Info</h4>
            <ul>
              <li><a href="https://www.google.com/maps/dir/?api=1&destination=275+Triveni+Apartment+Near+ESIC+Hospital+Jhilmil+Colony+Delhi+110095" target="_blank" rel="noopener noreferrer">📍 275 Triveni Apartment, Jhilmil Colony, Delhi 110095</a></li>
              <li><a href="tel:+919560952179">📞 +91 9560952179</a></li>
              <li><a href="mailto:hello@physio.com">✉️ hello@physio.com</a></li>
              <li><a href="#timing" onClick={(e) => handleLinkClick(e, '#timing')}>🕐 Mon–Sat: 6PM – 9PM | Sun: 12PM – 3PM</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Physio. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
