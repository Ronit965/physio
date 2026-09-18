import { useState } from 'react'

// Real uploaded photos & clinic gallery images
import imgKneeRehab from '../assets/gallery-knee-rehab.jpg'
import imgElectroTens from '../assets/gallery-electrotherapy-tens.webp'
import imgShoulderAssessment from '../assets/gallery-shoulder-assessment.jpg'
import imgCervicalNeck from '../assets/gallery-cervical-neck-therapy.jpg'
import imgOutdoorMeditation from '../assets/gallery-outdoor-meditation.jpg'
import imgEaglePose from '../assets/gallery-eagle-pose-yoga.jpg'
import imgArmBalance from '../assets/gallery-arm-balance-strength.jpg'
import imgBackbend from '../assets/gallery-backbend-flexibility.jpg'
import imgAerobicsFitness from '../assets/gallery-aerobics-group-fitness.jpg'
import imgHotStone from '../assets/gallery-hot-stone-therapy.jpg'
import imgLegJointMobilization from '../assets/gallery-leg-joint-mobilization.webp'
import imgGaitBalanceRehab from '../assets/gallery-gait-balance-rehab.jpg'
import imgManualTherapy from '../assets/bg-manual-therapy.jpg'
import imgSportsRehab from '../assets/bg-sports-rehab.jpg'
import imgFitness from '../assets/bg-fitness.jpg'
import imgThermal from '../assets/bg-thermal-therapy.jpg'
import imgNeuro from '../assets/bg-neuro-rehab.jpg'
import imgYoga from '../assets/bg-yoga-wellness.jpg'
import imgSoftTissue from '../assets/bg-soft-tissue.jpg'
import imgGeriatric from '../assets/bg-geriatric.jpg'
import imgAssessment from '../assets/bg-assessment.jpg'
import imgElectro from '../assets/bg-electrotherapy.jpg'
import imgOrtho from '../assets/bg-orthopedic-rehab.jpg'
import imgHeatRecovery from '../assets/bg-heat-recovery.jpg'
import imgNutrition from '../assets/bg-nutrition.jpg'
import imgSkinAesthetic from '../assets/bg-skin-aesthetic.jpg'
import imgRelaxation from '../assets/bg-relaxation.jpg'

const galleryImages = [
  { id: 1, src: imgCervicalNeck, alt: 'Cervical Spine & Neck Mobilization' },
  { id: 2, src: imgShoulderAssessment, alt: 'Physiotherapy Assessment' },
  { id: 3, src: imgLegJointMobilization, alt: 'Knee & Joint Mobility Therapy' },
  { id: 4, src: imgHotStone, alt: 'Hot Stone & Thermal Muscle Recovery' },
  { id: 5, src: imgGaitBalanceRehab, alt: 'Gait Training & Dynamic Balance Rehabilitation' },
  { id: 6, src: imgOutdoorMeditation, alt: 'Outdoor Meditation & Breathwork' },
  { id: 7, src: imgManualTherapy, alt: 'Manual Therapy Suite' },
  { id: 8, src: imgEaglePose, alt: 'Yoga Posture & Balance Therapy' },
  { id: 9, src: imgKneeRehab, alt: 'Knee & Joint Rehabilitation' },
  { id: 10, src: imgArmBalance, alt: 'Advanced Balance & Core Strength' },
  { id: 11, src: imgSportsRehab, alt: 'Sports Rehab' },
  { id: 12, src: imgBackbend, alt: 'Spinal Flexibility & Mobility' },
  { id: 13, src: imgElectroTens, alt: 'Electrotherapy TENS' },
  { id: 14, src: imgAerobicsFitness, alt: 'Group Aerobics & Fitness Session' },
  { id: 15, src: imgFitness, alt: 'Rehab Gym' },
  { id: 16, src: imgThermal, alt: 'Thermal Therapy' },
  { id: 17, src: imgNeuro, alt: 'Neuro Rehab' },
  { id: 18, src: imgYoga, alt: 'Yoga & Posture Studio' },
  { id: 19, src: imgSoftTissue, alt: 'Soft Tissue Therapy' },
  { id: 20, src: imgGeriatric, alt: 'Geriatric Care' },
  { id: 21, src: imgAssessment, alt: 'Assessment Room' },
  { id: 22, src: imgElectro, alt: 'Electrotherapy' },
  { id: 23, src: imgOrtho, alt: 'Orthopedic Care' },
  { id: 24, src: imgHeatRecovery, alt: 'Heat Recovery' },
  { id: 25, src: imgNutrition, alt: 'Nutrition & Wellness' },
  { id: 26, src: imgSkinAesthetic, alt: 'Clinical Aesthetics' },
  { id: 27, src: imgRelaxation, alt: 'Relaxation Bay' },
]

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">
            Our <span>Gallery</span>
          </h1>
        </div>
      </div>

      {/* Pure Gallery Section - Only Images */}
      <section className="gallery-content">
        <div className="container">
          <div className="masonry-grid">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="masonry-item"
                onClick={() => setSelectedImg(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedImg(item)
                }}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Image Modal */}
      {selectedImg && (
        <div className="masonry-lightbox" onClick={() => setSelectedImg(null)}>
          <div className="masonry-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="masonry-lightbox__close"
              onClick={() => setSelectedImg(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img src={selectedImg.src} alt={selectedImg.alt} />
          </div>
        </div>
      )}
    </div>
  )
}
