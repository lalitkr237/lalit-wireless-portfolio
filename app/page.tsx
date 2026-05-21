import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { PublicationsSection } from "@/components/publications-section"
import { ExperienceSection } from "@/components/experience-section"
import { ResearchVisualization } from "@/components/research-visualization"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Scanline Effect */}
      <div className="scanline" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Publications Section */}
      <PublicationsSection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Research Visualizations */}
      <ResearchVisualization />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
