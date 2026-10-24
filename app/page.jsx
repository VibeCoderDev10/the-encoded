import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ReelsShowcase from '../components/ReelsShowcase';
import QuoteBlock from '../components/QuoteBlock';
import Services from '../components/Services';
import IntakeForm from '../components/IntakeForm';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="te-root min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main id="top">
        <Hero />
        <ReelsShowcase />
        <QuoteBlock />
        <Services />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
}
