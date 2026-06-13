import HeroSection from './components/sections/HeroSection'
import FeaturesSection from './components/sections/FeaturesSection'
import BenefitsSection from './components/sections/BenefitsSection'
import SocialProofSection from './components/sections/SocialProofSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CTASection from './components/sections/CTASection'
import FAQSection from './components/sections/FAQSection'
import FooterSection from './components/sections/FooterSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <SocialProofSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
