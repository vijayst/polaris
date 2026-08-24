import type { Metadata } from "next";
import {
  Bell,
  ChartLine,
  FileText,
  Gavel,
  Globe,
  RefreshCw,
  Scale,
  Search,
  Shield,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import FactCarousel from "@/components/fact-carousel";

export const metadata: Metadata = {
  title: "SpicaAI",
  description:
    "SpicaAI is PolarisAI Labs' Policy AI platform that transforms AI regulatory burdens into a streamlined strategic advantage — EU AI Act, GDPR, ISO/IEC 42001 compliance with conflict detection, risk mitigation and real-time monitoring.",
};

const modules = [
  {
    Icon: Search,
    title: "Policy Detection",
    sub: "AI-driven conflict & gap identification",
  },
  {
    Icon: Gavel,
    title: "Regulatory Tracking",
    sub: "EU AI Act · GDPR · Global frameworks",
  },
  {
    Icon: Shield,
    title: "Risk Mitigation",
    sub: "Proactive compliance gap analysis",
  },
  {
    Icon: RefreshCw,
    title: "Lifecycle Automation",
    sub: "End-to-end policy lifecycle mgmt",
  },
  {
    Icon: Bell,
    title: "Real-time Alerts",
    sub: "Instant regulatory change notifications",
  },
  {
    Icon: FileText,
    title: "ISO/IEC 42001",
    sub: "AI management system compliance",
  },
  {
    Icon: ChartLine,
    title: "Compliance Analytics",
    sub: "Dashboards · Audit trails · Reporting",
  },
  {
    Icon: Globe,
    title: "Global Coverage",
    sub: "78+ jurisdictions · Antitrust · Data laws",
  },
];

const facts = [
  "72% of launched products fail - HBR",
  "70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine",
  "92% of users click on an item in the first page of Google search results",
];

export default function SpicaAIPage() {
  return (
    <>
      <PageHero
        icon={Scale}
        title="SpicaAI"
        badges={["Policy AI", "Compliance"]}
        subtitle="Transform AI regulatory burdens into a streamlined strategic advantage."
        description="EU AI Act · GDPR · ISO/IEC 42001 · Conflict Detection · Risk Mitigation · Real-time Monitoring"
        modules={modules}
        links={[
          {
            label: "Try SpicaAI",
            href: "https://polarisailabs-policyprodigy.hf.space",
            primary: true,
            external: true,
          },
        ]}
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why SpicaAI"
            title="Navigating the New AI Regulatory Landscape"
          />
          <div className="space-y-6 text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              New AI policies and regulations are creating a complex landscape
              for companies and governments worldwide. Globally, AI adoption is
              surging, with 78% of organizations now using it in at least one
              business function. In response, governments are establishing
              comprehensive regulations; the EU&apos;s AI Act, for instance, can
              impose fines of up to €35 million or 7% of global revenue for
              non-compliance. This regulatory pressure is significant, as a 2024
              report indicated 56% of organizations plan to adopt generative AI
              within the next year.
            </p>
            <p>
              Despite this growth, the tech landscape faces challenges; in India
              alone, over 12,700 startups shut down in 2024. Globally, confirmed
              startup shutdowns on the Carta platform increased by 58% in the
              first quarter of 2024 compared to the previous year. This wave of
              consolidation is attracting intense regulatory scrutiny over
              concerns that it could stifle competition. Antitrust regulators
              are particularly focused on &ldquo;Big Tech&rdquo; acquiring
              nascent AI competitors, with one major deal, HPE&apos;s attempted
              $14 billion acquisition of Juniper, being blocked in 2024.
            </p>
            <p>
              Former Federal Trade Commission (FTC) Chair Lina Khan has been a
              central figure in this heightened oversight. Under her leadership,
              the FTC launched inquiries into major AI partnerships, including
              those between Microsoft and OpenAI, and Amazon and Anthropic.
              Khan has also warned that AI models trained on non-consensual data
              could violate antitrust laws. Her aggressive regulatory approach
              has reportedly caused some companies to abandon acquisition
              attempts, signalling a significant shift in the environment for
              AI. In today&apos;s rapidly changing technological landscape,
              staying informed about the latest AI advancements on policy,
              regulations and compliance is crucial to protect your
              organization.
            </p>
            <p>
              SpicaAI, our Policy AI platform, provides critical, up-to-date
              information on the latest AI advancements in policy, regulation,
              and compliance, allowing you to confidently maneuver through these
              developments. Our system automates the entire policy lifecycle by
              using AI to detect conflicts, flag potential compliance gaps
              against standards like The EU AI Act, GDPR and ISO/IEC 42001, and
              actively help mitigate risks. This transforms compliance from a
              reactive burden into a streamlined, strategic advantage, ensuring
              your organization remains secure and ahead of regulatory changes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
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
