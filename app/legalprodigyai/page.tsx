import type { Metadata } from "next";
import {
  Clock,
  DollarSign,
  Gavel,
  Globe,
  Lock,
  MessageCircle,
  Scale,
  User,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import FactCarousel from "@/components/fact-carousel";

export const metadata: Metadata = {
  title: "LegalProdigyAI",
  description:
    "LegalProdigyAI delivers accessible, reliable AI-powered legal information for everyone — Indian Penal Code coverage, plain-language legal Q&A for self-represented litigants, expanding to US law.",
};

const modules = [
  {
    Icon: Gavel,
    title: "Indian Penal Code",
    sub: "IPC sections · Case references · Verdicts",
  },
  {
    Icon: MessageCircle,
    title: "Legal Q&A",
    sub: "Human-like answers · Plain language",
  },
  {
    Icon: User,
    title: "Self-Represented",
    sub: "No lawyer needed · 75% of civil cases",
  },
  {
    Icon: Lock,
    title: "Trustworthy Sources",
    sub: "Verified · Accurate · Up-to-date",
  },
  {
    Icon: Scale,
    title: "Access to Justice",
    sub: "42% global access gap · Bridging it",
  },
  {
    Icon: Clock,
    title: "24/7 Availability",
    sub: "Instant answers · No appointments",
  },
  {
    Icon: DollarSign,
    title: "Cost Effective",
    sub: "Fraction of lawyer fees · Accessible",
  },
  {
    Icon: Globe,
    title: "Expanding Coverage",
    sub: "India now · US law coming soon",
  },
];

const facts = [
  "72% of launched products fail - HBR",
  "70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine",
  "92% of users click on an item in the first page of Google search results",
];

export default function LegalProdigyAIPage() {
  return (
    <>
      <PageHero
        icon={Gavel}
        title="LegalProdigyAI"
        badges={["Legal AI", "Indian Law"]}
        subtitle="Accessible, reliable AI-powered legal information for everyone — saving time, money and complexity."
        description="Indian Penal Code · Self-Represented Litigants · Legal Q&A · GPT-Powered · Expanding to US Law"
        modules={modules}
        links={[
          {
            label: "Try LegalProdigyAI",
            href: "https://polarisailabs-legalprodigy.hf.space",
            primary: true,
            external: true,
          },
        ]}
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why LegalProdigyAI"
            title="Accessible Legal Information for Everyone"
          />
          <div className="space-y-6 text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              You may have heard the recent news that an AI-powered
              &lsquo;robot lawyer&apos; will defend a human in a US court in
              what has been called a &lsquo;historic&rsquo; first. Additionally,
              a survey by Clio found that 68% of law firm clients would prefer
              to handle some legal issues on their own if they had access to
              reliable legal information. These statistics highlight the
              importance of providing accessible legal information, especially
              as the World Justice Project reports that only 42% of people
              worldwide feel they have access to justice. The National Center
              for State Courts also reports that 75% of civil cases in state
              courts involve at least one self-represented litigant, emphasizing
              the need for accessible legal information for those who cannot
              afford a lawyer. These figures clearly demonstrate the significant
              need for AI-based products in the legal field.
            </p>
            <p>
              Obtaining legal information can be a complex and daunting task,
              filled with legal jargon and complexities that can be difficult
              for non-lawyers to navigate. The cost of hiring a lawyer or
              purchasing legal resources can also be prohibitive, making it
              difficult for many people to access the legal information they
              need. In addition, legal information may not be readily available
              or easily accessible to everyone, particularly those living in
              rural areas or with limited internet access. Trustworthiness can
              also be an issue, as it can be hard to know what sources are
              reliable and accurate. Misunderstandings or misinterpretations of
              legal information can have serious consequences, making it even
              more important to have access to reliable information. Traditional
              legal information sources may be outdated or insufficient, which
              is where our product comes in.
            </p>
            <p>
              Our product, LegalProdigyAI, offers relevant and specific legal
              answers that are human-like, saving you time and money while
              ensuring you have the information needed to make informed
              decisions. LegalProdigyAI is powered by Generative Pre-trained
              Transformer model and was trained using a technique called
              transformer neural networks. Currently, LegalProdigyAI covers data
              from the Indian Penal Code and legal queries restricted to Indian
              law. We are planning to expand the coverage to include other
              countries, including the US.
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
