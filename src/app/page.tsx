// src/app/page.tsx

import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Articles from '../components/Articles'
import Contact from '../components/Contact'

// import SegmentationDemo from '../components/SegmentationDemo'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a174e]">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20">
        <Skills />
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20">
        <Education />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20">
        <Projects />
      </section>

      {/* Publications Section */}
      <section id="articles" className="py-16 sm:py-20">
        <Articles />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 sm:py-20">
        <Certifications />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20">
        <Contact />
      </section>

      {/* <PoseEstimationDemo /> */}
      {/* <SegmentationDemo /> */}
    </>
  )
}
