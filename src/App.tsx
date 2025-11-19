import { Header } from './components/Header';
import { HeroBento } from './components/HeroBento';
import { LogosStrip } from './components/LogosStrip';
import { PopularCourses } from './components/PopularCourses';
import { OutcomeSection } from './components/OutcomeSection';
import { CommunitySection } from './components/CommunitySection';
import { PricingSection } from './components/PricingSection';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBento />
      <LogosStrip />
      <PopularCourses />
      <OutcomeSection />
      <CommunitySection />
      <PricingSection />
      <FinalCTA />
    </div>
  );
}
