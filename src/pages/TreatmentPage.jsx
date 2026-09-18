
import bgManualTherapy from '../assets/bg-manual-therapy.jpg'
import bgElectrotherapy from '../assets/bg-electrotherapy.jpg'
import bgThermalTherapy from '../assets/bg-thermal-therapy.jpg'
import bgOrthopedicRehab from '../assets/bg-orthopedic-rehab.jpg'
import bgSportsRehab from '../assets/bg-sports-rehab.jpg'
import bgNeuroRehab from '../assets/bg-neuro-rehab.jpg'
import bgGeriatric from '../assets/bg-geriatric.jpg'
import bgYogaWellness from '../assets/bg-yoga-wellness.jpg'
import bgFitness from '../assets/bg-fitness.jpg'
import bgHeatRecovery from '../assets/bg-heat-recovery.jpg'
import bgSoftTissue from '../assets/bg-soft-tissue.jpg'
import bgNutrition from '../assets/bg-nutrition.jpg'
import bgSkinAesthetic from '../assets/bg-skin-aesthetic.jpg'
import bgRelaxation from '../assets/bg-relaxation.jpg'
import bgAssessment from '../assets/bg-assessment.jpg'
export default function TreatmentPage() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-hero">
        <div className="container">
          <span className="section-subtitle">Clinical Excellence</span>
          <h1 className="page-hero__title">
            Specialized <span>Treatments</span> & Therapies
          </h1>
          <p className="page-hero__description">
            Explore our clinical-grade physiotherapy modalities tailored for pain relief,
            functional recovery, and lasting mobility improvement.
          </p>
        </div>
      </div>

      {/* Featured Treatment Box — Physiotherapy & Pain Management */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgManualTherapy})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🤲</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Physiotherapy &amp; Pain Management
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Manual &amp; Hands-on Therapies
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Our core hands-on physiotherapy services combine evidence-based manual techniques
              with clinical expertise to relieve pain, restore mobility, and improve your
              overall quality of life.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Joint mobilization</li>
                <li><span className="service-dot"></span> Soft-tissue mobilization</li>
                <li><span className="service-dot"></span> Myofascial release</li>
                <li><span className="service-dot"></span> Trigger-point therapy</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Muscle stretching</li>
                <li><span className="service-dot"></span> Manual lymphatic techniques</li>
                <li><span className="service-dot"></span> Therapeutic massage where within scope</li>
                <li><span className="service-dot"></span> Postural correction</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Electrotherapy */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgElectrotherapy})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">⚡</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Electrotherapy
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Advanced Electrical Stimulation Modalities
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              State-of-the-art electrotherapy techniques that harness controlled electrical
              currents to relieve pain, reduce inflammation, stimulate muscle recovery, and
              accelerate the body's natural healing processes.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> TENS</li>
                <li><span className="service-dot"></span> IFT</li>
                <li><span className="service-dot"></span> NMES / EMS</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Ultrasound therapy</li>
                <li><span className="service-dot"></span> Electrical muscle re-education</li>
                <li><span className="service-dot"></span> Other appropriate electrotherapy modalities</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Thermal Therapies */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgThermalTherapy})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🔥</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Thermal Therapies
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Heat &amp; Cold Recovery Treatments
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Targeted thermal modalities using controlled heat and cold applications to
              reduce inflammation, ease muscle tension, improve circulation, and promote
              faster tissue recovery.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Hot packs</li>
                <li><span className="service-dot"></span> Cold therapy</li>
                <li><span className="service-dot"></span> Cryotherapy</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Paraffin wax therapy</li>
                <li><span className="service-dot"></span> Contrast therapy</li>
                <li><span className="service-dot"></span> Heat-based recovery treatments</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Rehabilitation (Orthopedic Rehabilitation) */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgOrthopedicRehab})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div>
                <h2 className="featured-treatment-box__title">
                  Rehabilitation
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Orthopedic Rehabilitation
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Comprehensive and individualized orthopedic rehabilitation programs designed to
              restore joint function, relieve spinal pain, rebuild strength, and guide full recovery
              after injuries or surgeries.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Back pain rehabilitation</li>
                <li><span className="service-dot"></span> Neck/cervical rehabilitation</li>
                <li><span className="service-dot"></span> Sciatica rehabilitation</li>
                <li><span className="service-dot"></span> Knee rehabilitation</li>
                <li><span className="service-dot"></span> Shoulder rehabilitation</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Hip rehabilitation</li>
                <li><span className="service-dot"></span> Arthritis management</li>
                <li><span className="service-dot"></span> Post-fracture rehabilitation</li>
                <li><span className="service-dot"></span> Post-operative rehabilitation</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Sports Rehabilitation */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgSportsRehab})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🏃</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Sports Rehabilitation
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Athletic Injury Recovery &amp; Return-to-Sport
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Specialized recovery programs designed for athletes and active individuals to treat acute injuries, restore peak biomechanics, and safely return to sport.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Sports injury rehabilitation</li>
                <li><span className="service-dot"></span> Muscle strains</li>
                <li><span className="service-dot"></span> Ligament injuries</li>
                <li><span className="service-dot"></span> Tendon injuries</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Return-to-sport programs</li>
                <li><span className="service-dot"></span> Strength &amp; conditioning</li>
                <li><span className="service-dot"></span> Injury prevention</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Neurological Rehabilitation */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgNeuroRehab})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🧠</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Neurological Rehabilitation
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Neuro-Plasticity &amp; Functional Movement Recovery
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Specialized therapeutic interventions focused on restoring neural pathways, balance, motor coordination, and daily functional independence.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Stroke rehabilitation</li>
                <li><span className="service-dot"></span> Balance training</li>
                <li><span className="service-dot"></span> Gait training</li>
                <li><span className="service-dot"></span> Coordination training</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Parkinson&apos;s rehabilitation</li>
                <li><span className="service-dot"></span> Neurological strengthening</li>
                <li><span className="service-dot"></span> Functional mobility training</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Geriatric Rehabilitation */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgGeriatric})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🤝</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Geriatric Rehabilitation
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Senior Independence &amp; Fall Prevention
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Compassionate and evidence-based rehabilitation protocols tailored to improve balance, bone strength, mobility, and confidence for older adults.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Fall prevention</li>
                <li><span className="service-dot"></span> Balance training</li>
                <li><span className="service-dot"></span> Mobility programs</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Strengthening for older adults</li>
                <li><span className="service-dot"></span> Functional independence training</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Wellness & Mind-Body Services */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgYogaWellness})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🧘</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Wellness &amp; Mind-Body Services
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Holistic Yoga, Breathing &amp; Stress Management
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Integrative movement and mindfulness practices to align physical posture, mental clarity, and nervous system relaxation.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Therapeutic yoga</li>
                <li><span className="service-dot"></span> General yoga</li>
                <li><span className="service-dot"></span> Meditation</li>
                <li><span className="service-dot"></span> Pranayama/breathing exercises</li>
                <li><span className="service-dot"></span> Stress-management programs</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Relaxation sessions</li>
                <li><span className="service-dot"></span> Mobility classes</li>
                <li><span className="service-dot"></span> Posture &amp; movement classes</li>
                <li><span className="service-dot"></span> Sleep/wellness education</li>
                <li><span className="service-dot"></span> Guided relaxation</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Fitness & Body Conditioning */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgFitness})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🏋️</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Fitness &amp; Body Conditioning
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Functional Training, Core Strength &amp; Specialized Programs
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Comprehensive fitness prescriptions tailored to all levels—from beginners and desk workers to competitive athletes seeking peak conditioning.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Personal training</li>
                <li><span className="service-dot"></span> Functional training</li>
                <li><span className="service-dot"></span> Strength training</li>
                <li><span className="service-dot"></span> Weight-management exercise programs</li>
                <li><span className="service-dot"></span> Mobility training</li>
                <li><span className="service-dot"></span> Flexibility training</li>
                <li><span className="service-dot"></span> Core conditioning</li>
                <li><span className="service-dot"></span> Pilates</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Aerobics</li>
                <li><span className="service-dot"></span> Zumba</li>
                <li><span className="service-dot"></span> Low-impact fitness</li>
                <li><span className="service-dot"></span> Senior fitness</li>
                <li><span className="service-dot"></span> Women&apos;s fitness</li>
                <li><span className="service-dot"></span> Men&apos;s fitness</li>
                <li><span className="service-dot"></span> Beginner fitness programs</li>
                <li><span className="service-dot"></span> Sports conditioning</li>
              </ul>
            </div>

            <h3 className="featured-treatment-box__group-title">Specialized Programs</h3>
            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Weight-loss program</li>
                <li><span className="service-dot"></span> Muscle-building program</li>
                <li><span className="service-dot"></span> Body-toning program</li>
                <li><span className="service-dot"></span> Posture program</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Desk-worker fitness</li>
                <li><span className="service-dot"></span> Corporate wellness</li>
                <li><span className="service-dot"></span> Athlete conditioning</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Heat, Recovery & Relaxation */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgHeatRecovery})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">♨️</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Heat, Recovery &amp; Relaxation
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Thermal, Hydro &amp; Contrast Recovery Modalities
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Deep-soothing heat and aquatic recovery therapies to ease muscular strain, accelerate metabolic waste clearance, and promote deep systemic relaxation.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Therapeutic heat therapy</li>
                <li><span className="service-dot"></span> Hot-pack therapy</li>
                <li><span className="service-dot"></span> Infrared-based wellness treatments where appropriate</li>
                <li><span className="service-dot"></span> Sauna, if legally and medically appropriate</li>
                <li><span className="service-dot"></span> Steam therapy</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Hydrotherapy</li>
                <li><span className="service-dot"></span> Warm-water recovery</li>
                <li><span className="service-dot"></span> Contrast recovery</li>
                <li><span className="service-dot"></span> Relaxation/recovery sessions</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Circulation, Recovery & Soft-Tissue Services */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgSoftTissue})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🩹</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Circulation, Recovery &amp; Soft-Tissue Services
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Advanced Soft-Tissue, Lymphatic &amp; Fascial Care
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Targeted manual and instrument-assisted techniques to improve lymphatic circulation, reduce post-workout fatigue, and resolve stubborn muscular restrictions.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Manual lymphatic drainage</li>
                <li><span className="service-dot"></span> Compression-based recovery</li>
                <li><span className="service-dot"></span> Recovery massage</li>
                <li><span className="service-dot"></span> Sports massage</li>
                <li><span className="service-dot"></span> Myofascial techniques</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Cupping therapy</li>
                <li><span className="service-dot"></span> Dry needling only by appropriately trained/authorized professionals</li>
                <li><span className="service-dot"></span> Taping</li>
                <li><span className="service-dot"></span> Recovery mobility sessions</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Diet & Nutrition */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgNutrition})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🥗</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Diet &amp; Nutrition
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Clinical &amp; Lifestyle Nutrition Counseling
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Evidence-backed dietary guidance and personalized nutrition strategies designed to fuel active lifestyles, support weight goals, and manage chronic conditions.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Weight-loss nutrition</li>
                <li><span className="service-dot"></span> Weight-gain nutrition</li>
                <li><span className="service-dot"></span> Sports nutrition</li>
                <li><span className="service-dot"></span> Muscle-building nutrition</li>
                <li><span className="service-dot"></span> General healthy eating</li>
                <li><span className="service-dot"></span> Lifestyle nutrition</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Senior nutrition</li>
                <li><span className="service-dot"></span> Women&apos;s nutrition</li>
                <li><span className="service-dot"></span> Men&apos;s nutrition</li>
                <li><span className="service-dot"></span> Recovery nutrition</li>
                <li><span className="service-dot"></span> Nutrition for physically active clients</li>
              </ul>
            </div>

            <h3 className="featured-treatment-box__group-title">Specialized Support</h3>
            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Diabetes-friendly nutrition</li>
                <li><span className="service-dot"></span> Hypertension-friendly nutrition</li>
                <li><span className="service-dot"></span> Fatty-liver-friendly nutrition</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> High-cholesterol nutrition</li>
                <li><span className="service-dot"></span> Digestive-health nutrition</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Skin & Aesthetic Wellness */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgSkinAesthetic})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">✨</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Skin &amp; Aesthetic Wellness
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Non-Invasive Dermal Care &amp; Clinical Aesthetics
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Professional, non-invasive dermal therapies and skin rejuvenation treatments to restore natural skin vitality, clarity, and radiance.
            </p>

            <h3 className="featured-treatment-box__group-title">Non-invasive Skin Wellness</h3>
            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Basic skin assessment</li>
                <li><span className="service-dot"></span> Skin-care consultation</li>
                <li><span className="service-dot"></span> Hydration-focused facial treatments</li>
                <li><span className="service-dot"></span> Cleansing treatments</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Exfoliation</li>
                <li><span className="service-dot"></span> Facial massage</li>
                <li><span className="service-dot"></span> Non-invasive rejuvenation treatments</li>
                <li><span className="service-dot"></span> Post-treatment skin-care guidance</li>
              </ul>
            </div>

            <h3 className="featured-treatment-box__group-title">Possible Aesthetic Services</h3>
            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Hydrafacial-type treatments</li>
                <li><span className="service-dot"></span> LED light therapy</li>
                <li><span className="service-dot"></span> Non-invasive skin rejuvenation</li>
                <li><span className="service-dot"></span> Superficial peels</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Microdermabrasion</li>
                <li><span className="service-dot"></span> Acne-care programs</li>
                <li><span className="service-dot"></span> Pigmentation-care programs</li>
                <li><span className="service-dot"></span> Anti-aging skin programs</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Relaxation & Wellness */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgRelaxation})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">🌿</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Relaxation &amp; Wellness
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Restorative Therapy &amp; Mindful Stress Relief
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Dedicated unwinding sessions combining targeted touch, breathwork, and mindful recovery to relieve daily tension and reset mental well-being.
            </p>

            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Relaxation massage</li>
                <li><span className="service-dot"></span> Head/neck relaxation</li>
                <li><span className="service-dot"></span> Foot relaxation</li>
                <li><span className="service-dot"></span> Guided breathing</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Meditation</li>
                <li><span className="service-dot"></span> Stretch &amp; relax sessions</li>
                <li><span className="service-dot"></span> Recovery sessions</li>
                <li><span className="service-dot"></span> Wellness consultations</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatment Box — Assessment & Preventive Services */}
      <section className="featured-treatment-section">
        <div className="container">
          <div className="featured-treatment-box">
            <div className="featured-treatment-box__bg" style={{ backgroundImage: `url(${bgAssessment})` }}></div>
            <div className="featured-treatment-box__badge">Featured</div>
            <div className="featured-treatment-box__header">
              <div className="featured-treatment-box__icon">📋</div>
              <div>
                <h2 className="featured-treatment-box__title">
                  Assessment &amp; Preventive Services
                </h2>
                <p className="featured-treatment-box__subtitle">
                  Clinical Diagnosis, Movement Screening &amp; Injury Prevention
                </p>
              </div>
            </div>

            <p className="featured-treatment-box__desc">
              Thorough biomechanical evaluations, ergonomic audits, and proactive prevention programs to detect imbalances early and protect long-term physical health.
            </p>

            <h3 className="featured-treatment-box__group-title">Initial Assessments</h3>
            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Physiotherapy assessment</li>
                <li><span className="service-dot"></span> Posture assessment</li>
                <li><span className="service-dot"></span> Gait assessment</li>
                <li><span className="service-dot"></span> Movement screening</li>
                <li><span className="service-dot"></span> Flexibility assessment</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Muscle-strength assessment</li>
                <li><span className="service-dot"></span> Balance assessment</li>
                <li><span className="service-dot"></span> Fitness assessment</li>
                <li><span className="service-dot"></span> Body-composition assessment</li>
                <li><span className="service-dot"></span> Ergonomic assessment</li>
              </ul>
            </div>

            <h3 className="featured-treatment-box__group-title">Preventive Programs</h3>
            <div className="featured-treatment-box__services">
              <ul>
                <li><span className="service-dot"></span> Back-pain prevention</li>
                <li><span className="service-dot"></span> Neck-pain prevention</li>
                <li><span className="service-dot"></span> Fall prevention</li>
                <li><span className="service-dot"></span> Sports injury prevention</li>
              </ul>
              <ul>
                <li><span className="service-dot"></span> Workplace wellness</li>
                <li><span className="service-dot"></span> Corrective exercise</li>
                <li><span className="service-dot"></span> Lifestyle modification</li>
              </ul>
            </div>

            <div className="featured-treatment-box__action">
              <a
                href="https://calendly.com/moveana7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process & CTA */}
      <section className="treatment-content">
        <div className="container">
          {/* Treatment Process */}
          <div className="treatment-process">
            <div className="section-header">
              <span className="section-subtitle">How It Works</span>
              <h2 className="section-title">Our 4-Step Recovery Process</h2>
              <p className="section-description">
                Every patient follows a structured clinical path to guarantee measurable, sustained recovery.
              </p>
            </div>

            <div className="treatment-process__grid">
              <div className="treatment-process__step">
                <div className="step-badge">1</div>
                <h4>Comprehensive Evaluation</h4>
                <p>Detailed physical examination, range of motion tests, and medical history analysis.</p>
              </div>

              <div className="treatment-process__step">
                <div className="step-badge">2</div>
                <h4>Personalized Plan</h4>
                <p>Targeted therapy selection matching your symptoms, lifestyle, and recovery timeline.</p>
              </div>

              <div className="treatment-process__step">
                <div className="step-badge">3</div>
                <h4>Active Treatment</h4>
                <p>Guided hands-on treatment sessions and progressive strengthening exercises.</p>
              </div>

              <div className="treatment-process__step">
                <div className="step-badge">4</div>
                <h4>Prevention & Home Care</h4>
                <p>Ergonomic advice and home exercise programs to prevent future recurrence.</p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="treatment-cta-box">
            <div className="treatment-cta-box__content">
              <h3>Unsure which treatment fits your condition?</h3>
              <p>Schedule a 1-on-1 assessment with our chief physiotherapist to determine the optimal care plan.</p>
            </div>
            <a href="https://calendly.com/moveana7/30min" target="_blank" rel="noopener noreferrer" className="btn-white" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Schedule Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
