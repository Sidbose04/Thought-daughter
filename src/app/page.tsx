import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DriftStage from "@/components/DriftStage";
import RitualSection from "@/components/RitualSection";
import FeatureSections from "@/components/FeatureSections";
import PromptGrid from "@/components/PromptGrid";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <DriftStage />
        <RitualSection />
        <FeatureSections />
        <PromptGrid />
        <GallerySection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
