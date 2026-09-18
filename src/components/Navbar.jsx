import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetHash) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(targetHash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', targetHash)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', '/')
      }
    } else {
      // If on another page, navigate to home with the hash
      e.preventDefault()
      navigate(`/${targetHash}`)
    }
  }

  const isHome = location.pathname === '/'
  const isTreatment = location.pathname === '/treatment'
  const isGallery = location.pathname === '/gallery'
  const isContact = location.pathname === '/contact'

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          Moveàna
        </Link>

        <div className={`navbar__links${menuOpen ? ' active' : ''}`}>
          <a
            href="#hero"
            className={isHome && (!location.hash || location.hash === '#hero') ? 'active-link' : ''}
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            Home
          </a>
          <Link
            to="/treatment"
            className={isTreatment ? 'active-link' : ''}
            onClick={() => {
              setMenuOpen(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Treatment
          </Link>
          <a
            href="#services"
            className={isHome && location.hash === '#services' ? 'active-link' : ''}
            onClick={(e) => handleNavClick(e, '#services')}
          >
            Services
          </a>
          <a
            href="#online-consult"
            className={isHome && location.hash === '#online-consult' ? 'active-link' : ''}
            onClick={(e) => handleNavClick(e, '#online-consult')}
          >
            Online Consult
          </a>
          <Link
            to="/gallery"
            className={isGallery ? 'active-link' : ''}
            onClick={() => {
              setMenuOpen(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={isContact ? 'active-link' : ''}
            onClick={() => {
              setMenuOpen(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Contact Us
          </Link>

          <button
            type="button"
            className={`theme-toggle${darkMode ? ' theme-toggle--dark' : ''}`}
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            <span className="theme-toggle__icon theme-toggle__sun">☀️</span>
            <span className="theme-toggle__icon theme-toggle__moon">🌙</span>
            <span className="theme-toggle__slider" />
          </button>

          <div className="navbar__mobile-cta">
            <a
              href="https://calendly.com/moveana7/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta"
            >
              Book Appointment
            </a>
          </div>
        </div>

        <div className="navbar__actions">
          <a
            href="https://calendly.com/moveana7/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta navbar__desktop-cta"
          >
            Book Appointment
          </a>

          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
