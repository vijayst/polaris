import type { Metadata } from "next";
import {
  Camera,
  Mic,
  Plane,
  RefreshCw,
  Settings,
  ShieldCheck,
  TriangleAlert,
  User,
  Zap,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import FactCarousel from "@/components/fact-carousel";
import DemoFrame from "@/components/demo-frame";

export const metadata: Metadata = {
  title: "VegaAI",
  description:
    "VegaAI is the world's first AI-powered travel co-pilot delivering real-time, verified destination updates sourced directly from top travel influencers.",
};

const modules = [
  {
    Icon: Zap,
    title: "Speed & Specificity",
    sub: "Answers to hyper-specific queries in under 2 seconds",
  },
  {
    Icon: ShieldCheck,
    title: "Accuracy",
    sub: "<1% bias & misinformation via proprietary RAG",
  },
  {
    Icon: RefreshCw,
    title: "Freshness",
    sub: "95% of surfaced content posted within 24 hours",
  },
  {
    Icon: TriangleAlert,
    title: "Safety-First",
    sub: "\u201CThings Not To Do\u201D & pre-travel readiness checks",
  },
  {
    Icon: User,
    title: "Personalization",
    sub: "Recommendations based on travel style & history",
  },
  {
    Icon: Mic,
    title: "Voice-Enabled",
    sub: "Natural language processing for hands-free use",
  },
  {
    Icon: Camera,
    title: "Multi-Platform Curation",
    sub: "Instagram, YouTube & TikTok, distilled",
  },
  {
    Icon: Settings,
    title: "Efficient AI Core",
    sub: "Quantization, LoRA & Chain-of-Thought reasoning",
  },
];

const stats = [
  { num: "<3s", label: "Query Response — from question to recommendation" },
  { num: "95%", label: "Content Freshness — updates within 24 hours" },
  { num: "<1%", label: "Misinformation — minimal bias / misinformation incidents" },
];

const comparison = [
  {
    feature: "Speed & Specificity",
    vega: "Delivers answers to hyper-specific queries in under 2 seconds.",
    generic:
      "Slow, manual search process with generic, often irrelevant results.",
  },
  {
    feature: "Accuracy",
    vega: "Guarantees <1% bias and misinformation through a proprietary RAG implementation.",
    generic:
      "Riddled with outdated information, sponsored content, and user-generated noise.",
  },
  {
    feature: "Freshness",
    vega: "Curates real-time influencer content, with 95% of updates posted in the last 24 hours.",
    generic:
      "Content is often months or years old, making it unreliable for planning.",
  },
  {
    feature: "Safety-First Approach",
    vega:
      "Provides proactive \u201CThings Not To Do\u201D guidance and pre-travel readiness checks.",
    generic:
      "Lacks structured safety information, exposing travelers to avoidable risks.",
  },
  {
    feature: "Personalization",
    vega: "Leverages AI to deliver recommendations based on individual travel style and history.",
    generic:
      "Offers one-size-fits-all recommendations that ignore personal preferences.",
  },
];

const facts = [
  "42% of travelers trust influencer recommendations over traditional ads - Travelboom",
  "The influencer marketing industry reaches $32.55 billion in 2025, headed to $37.8 billion by 2030 - Influencer Marketing Hub",
  "60% of consumers found influencers most useful when producing travel content - Statista",
];

export default function VegaAIPage() {
  return (
    <>
      <PageHero
        icon={Plane}
        title="VegaAI"
        badges={["AI Travel Co-pilot", "Real-Time RAG"]}
        subtitle="Our brightest insights for your most memorable travels, powered by real-time influencer content."
        description="Real-Time Curation · Voice-Enabled · Safety-First · Personalized Recommendations"
        modules={modules}
        links={[
          {
            label: "Try VegaAI",
            href: "https://polarisailabs-vega.hf.space",
            primary: true,
            external: true,
          },
        ]}
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Problem"
            title="Vega: Revolutionising Travel Planning"
            description="Today&apos;s travelers face a frustrating paradox — countless hours spent searching, only to find generic, outdated advice."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">The Problem</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Today&apos;s travelers face a frustrating paradox: countless hours
                spent searching, only to find generic, outdated advice leading to
                disappointing experiences. Critical real-time insights remain
                buried across fragmented social media feeds, creating a
                significant gap between planning and reality.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-100/60 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">Our Solution</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                PolarisAI Labs introduces VegaAI, the world&apos;s first AI travel
                co-pilot delivering verified, real-time updates sourced directly
                from top travel influencers. Using advanced RAG 2.0 and
                fine-tuned AI models, Vega curates fresh content from social
                platforms like Instagram, YouTube, and TikTok — answering
                queries like &ldquo;What&apos;s new in Havelock Island
                today?&rdquo; in under 2 seconds.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.num} className="max-w-[200px]">
                <p className="bg-gradient-to-r from-brand-500 to-brand-blue bg-clip-text text-4xl font-bold text-transparent">
                  {stat.num}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About VegaAI"
            title="Real-Time Verified Destination Updates"
          />
          <div className="space-y-6 text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              VegaAI addresses the critical problem of travelers wasting hours
              sifting through outdated, generic travel advice that often leads to
              poor trip decisions, while real-time, location-specific insights
              remain buried across fragmented social media channels. The solution
              is the world&apos;s first AI-powered travel assistant that delivers
              real-time, verified destination updates sourced directly from top
              travel influencers using advanced Retrieval-Augmented Generation
              and fine-tuned AI models to curate Instagram, YouTube, and TikTok
              content, providing instant answers to location specific queries
              like &ldquo;What&apos;s new in Havelock Island today?&rdquo; in
              under 2 seconds.
            </p>
            <p>
              The platform&apos;s key features include real-time content curation
              with 95% of surfaced content posted within the past 24 hours,
              voice-enabled natural language processing for intuitive
              interaction, a safety-first approach providing &ldquo;Things Not To
              Do&rdquo; guidance for destination-specific risks, pre-travel
              prerequisites covering document, health, and safety readiness
              checks, and advanced AI technology leveraging Quantization, LoRA
              optimization, and Chain-of-Thought reasoning.
            </p>
            <p>
              VegaAI&apos;s competitive edge lies in delivering hyper-specific,
              time-sensitive insights through sub-2 second query response times,
              less than 1% bias and misinformation incidents through proprietary
              RAG implementation, real-time influencer content curation for
              maximum freshness, comprehensive risk mitigation guidance for
              enhanced safety, and personalized recommendations based on
              individual travel style and history. The platform&apos;s success
              metrics target query-to-recommendation time under 2 seconds, update
              freshness with 95% of content within 24 hours, user satisfaction
              exceeding 90% positive ratings, reliability with less than 1% bias
              and misinformation incidents, and high engagement through saves,
              shares, and click-through rates.
            </p>
            <p>
              Unlike generic travel chatbots, VegaAI combines speed, accuracy,
              freshness, safety, and personalization to transform how travelers
              access and utilize destination information by providing verified,
              real-time insights from trusted influencer sources, positioning
              itself as the essential travel companion for next-generation
              travelers in the rapidly evolving travel technology landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why VegaAI"
            title="Our Competitive Advantage"
            description="VegaAI is fundamentally different from generic travel platforms and traditional search engines — built on five key pillars."
          />
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-brand-500 to-brand-blue text-white">
                    <th className="px-5 py-4 font-semibold">Feature</th>
                    <th className="px-5 py-4 font-semibold">
                      VegaAI by PolarisAI Labs
                    </th>
                    <th className="px-5 py-4 font-semibold">
                      Generic Travel Platforms / Social Media
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparison.map((row) => (
                    <tr
                      key={row.feature}
                      className="align-top transition-colors hover:bg-slate-50"
                    >
                      <td className="px-5 py-4 font-semibold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="px-5 py-4 font-medium text-brand-600">
                        {row.vega}
                      </td>
                      <td className="px-5 py-4 leading-relaxed text-slate-600">
                        {row.generic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Live Demo"
            title="Vega in Action"
            description="Try the latest prototype below — ask about any destination and see real-time, curated insights."
          />
          <DemoFrame
            src="https://polarisailabs-vega.hf.space"
            title="VegaAI live demo"
            height={700}
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Please contact us with any questions or feedback" />
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <FactCarousel facts={facts} />
    </>
  );
}
