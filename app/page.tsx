import { Nav } from "@/components/nav";
import { StripeDivider } from "@/components/section";
import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { Socials } from "@/components/sections/socials";
import { About } from "@/components/sections/about";
import { GithubContributions } from "@/components/sections/github-contributions";
import { FeaturedWork } from "@/components/sections/featured-work";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Brand } from "@/components/sections/brand";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-screen overflow-x-hidden px-2">
        <div className="mx-auto md:max-w-3xl">
          <Hero />
          <StripeDivider />
          <Overview />
          <StripeDivider />
          <Socials />
          <StripeDivider />
          <About />
          <StripeDivider />
          <GithubContributions username="Drake0306" />
          <StripeDivider />
          <FeaturedWork />
          <StripeDivider />
          <TechStack />
          <StripeDivider />
          <Experience />
          <StripeDivider />
          <Education />
          <StripeDivider />
          <Projects />
          <StripeDivider />
          <Brand />
          <StripeDivider />
          <Footer />
        </div>
      </main>
    </>
  );
}
