"use client";

import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import CalloutBanner from "@/components/CalloutBanner/CalloutBanner";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <HeroSection />
      <CalloutBanner />
      <WhoWeAre />
      <FeaturedProjects />
      <ScrollToTop />
    </main>
  );
}
