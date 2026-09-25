"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.16 }
    );

    document
      .querySelectorAll(".reveal, .ritual-list li, .drift-card")
      .forEach((item) => observer.observe(item));

    const handleScroll = () => {
      const isMobile = window.innerWidth <= 960;
      const viewport = window.scrollY;
      document.querySelectorAll("[data-parallax]").forEach((item) => {
        const el = item as HTMLElement;
        if (isMobile) {
          el.style.transform = "";
        } else {
          el.style.transform = `translateY(${viewport * Number(el.dataset.parallax)}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
