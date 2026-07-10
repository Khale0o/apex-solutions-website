import { AmbientBackground } from "@/components/ambient-background";
import { ContactForm } from "@/components/contact-form";
import { CursorGlow } from "@/components/cursor-glow";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { ProcessTimeline } from "@/components/process-timeline";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { Services } from "@/components/services";
import { WhyApex } from "@/components/why-apex";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AmbientBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <WhyApex />
        <ProjectsCarousel />
        <ProcessTimeline />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
