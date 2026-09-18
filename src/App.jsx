import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TreatmentPage from './pages/TreatmentPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import './App.css'

// Helper component to handle smooth scrolling to hash anchors and top-of-page on route change
function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return null
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <>
      <ScrollToHash />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatment" element={<TreatmentPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
