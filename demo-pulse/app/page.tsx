import HeroSection from './components/sections/HeroSection'
import ScarcitySection from './components/sections/ScarcitySection'
import FeaturesSection from './components/sections/FeaturesSection'
import BenefitsSection from './components/sections/BenefitsSection'
import SocialProofSection from './components/sections/SocialProofSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import PricingSection from './components/sections/PricingSection'
import FAQSection from './components/sections/FAQSection'
import CTASection from './components/sections/CTASection'
import FooterSection from './components/sections/FooterSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScarcitySection />
      <FeaturesSection />
      <BenefitsSection />
      <SocialProofSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}
