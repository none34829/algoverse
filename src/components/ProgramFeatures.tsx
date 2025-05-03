
import { featuredContent, programBenefits } from "./features/data";
import FeaturedBanner from "./features/FeaturedBanner";
import BenefitsCarousel from "./features/BenefitsCarousel";
import SuccessStories from "./features/SuccessStories";

const ProgramFeatures = () => {
  return (
    <section id="program-features" className="relative py-24 overflow-hidden">
      {/* The main feature banner */}
      {featuredContent.map((content) => (
        <FeaturedBanner key={content.id} content={content} />
      ))}
      
      {/* Program benefits section with visual cards */}
      <BenefitsCarousel benefits={programBenefits} />
      
      {/* Featured success stories */}
      <SuccessStories />
    </section>
  );
};

export default ProgramFeatures;
