import type { Metadata } from "next";
import { Bot } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import DemoFrame from "@/components/demo-frame";

export const metadata: Metadata = {
  title: "Conversational AI Demos",
  description:
    "Try live PolarisAI Labs Conversational AI demos — text generation and code generation powered by open models on Hugging Face Spaces.",
};

export default function ConversationalAIDemosPage() {
  return (
    <>
      <PageHero
        icon={Bot}
        title="Conversational AI Demos"
        subtitle="Hands-on with our conversational models — generate text, write code and explore what enterprise-ready Conversational AI can do."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Demo 01"
            title="Conversational AI - Text Generation"
            description="Chat with our text generation model and see fluent, human-like responses in real time."
          />
          <DemoFrame
            src="https://polarisailabs-textgeneration-gptoss.hf.space"
            title="Conversational AI - Text Generation demo"
            height={700}
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Demo 02"
            title="Conversational AI - Code Generation"
            description="Describe what you need and watch our model write working code across languages and frameworks."
          />
          <DemoFrame
            src="https://polarisailabs-codegeneration-qwen.hf.space"
            title="Conversational AI - Code Generation demo"
            height={700}
          />
        </div>
      </section>
    </>
  );
}
