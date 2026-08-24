import type { Metadata } from "next";
import { Tags } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import DemoFrame from "@/components/demo-frame";

export const metadata: Metadata = {
  title: "Text Classification Demos",
  description:
    "Try live PolarisAI Labs text classification demos — sentiment analysis and spam classification running on Hugging Face Spaces.",
};

export default function TextClassificationDemosPage() {
  return (
    <>
      <PageHero
        icon={Tags}
        title="Text Classification Demos"
        subtitle="Sentiment analysis and spam classification in action — classify any text you type in real time."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Demo 01"
            title="Text Classification"
            description="Enter any sentence and watch our model label its sentiment and detect spam instantly."
          />
          <DemoFrame
            src="https://polarisailabs-textclassification.hf.space"
            title="Text classification demo"
            height={700}
          />
        </div>
      </section>
    </>
  );
}
