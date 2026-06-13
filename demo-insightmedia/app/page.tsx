import HeroSection from './components/sections/HeroSection'
import SocialProofSection from './components/sections/SocialProofSection'
import FeaturesSection from './components/sections/FeaturesSection'
import BenefitsSection from './components/sections/BenefitsSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CTASection from './components/sections/CTASection'
import FAQSection from './components/sections/FAQSection'
import FooterSection from './components/sections/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
