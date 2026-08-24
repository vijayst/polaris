import type { Metadata } from "next";
import { Terminal } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import DemoFrame from "@/components/demo-frame";

export const metadata: Metadata = {
  title: "Prompt Engineering Demo",
  description:
    "Live demo of Generative AI prompt engineering by PolarisAI Labs — experiment with prompts and see how instruction design shapes model outputs.",
};

export default function PromptEngineeringDemoPage() {
  return (
    <>
      <PageHero
        icon={Terminal}
        title="Prompt Engineering Demo"
        subtitle="Generative AI - Prompt Engineering"
        description="A hands-on playground for designing, testing and refining prompts against large language models."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Live Demo"
            title="Generative AI - Prompt Engineering"
            description="Try the interactive prompt engineering workspace below."
          />
          <DemoFrame
            src="https://polarisailabs-promptengineering.hf.space"
            title="Prompt engineering live demo"
            height={700}
          />
        </div>
      </section>
    </>
  );
}
