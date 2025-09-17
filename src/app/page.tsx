import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import OfflineCenters from '@/components/sections/offline-centers';
import Class6To10Section from '@/components/sections/class-6-10';
import SscHscSection from '@/components/sections/ssc-hsc';
import SkillsSection from '@/components/sections/skills';
import AdmissionSection from '@/components/sections/admission';
import JobPreparationSection from '@/components/sections/job-preparation';
import Testimonials from '@/components/sections/testimonials';
import FreeResources from '@/components/sections/free-resources';
import AdmissionSuccess from '@/components/sections/admission-success';
import MobileAppSection from '@/components/sections/mobile-app';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-16">
          <OfflineCenters />
        </div>
        <Class6To10Section />
        <SscHscSection />
        <SkillsSection />
        <AdmissionSection />
        <JobPreparationSection />
        <Testimonials />
        <FreeResources />
        <AdmissionSuccess />
        <MobileAppSection />
      </main>
      <Footer />
    </div>
  );
}