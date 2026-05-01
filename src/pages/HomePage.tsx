import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CertificationSection from '../components/CertificationSection';
import StudentAchievements from '../components/StudentAchievements';
import TrustBar from '../components/TrustBar';
import Courses from '../components/Courses';
import AboutPreview from '../components/AboutPreview';
import UpcomingEvents from '../components/UpcomingEvents';
import GalleryPreview from '../components/GalleryPreview';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CertificationSection />
        <StudentAchievements />
        <TrustBar />
        <Courses />
        <UpcomingEvents />
        <AboutPreview />
        <GalleryPreview />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
