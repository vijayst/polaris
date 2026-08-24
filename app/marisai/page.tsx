import type { Metadata } from "next";
import {
  ChartColumn,
  ChartLine,
  Database,
  Headset,
  Languages,
  MessageSquare,
  MessagesSquare,
  Users,
  Zap,
} from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import FactCarousel from "@/components/fact-carousel";
import DemoFrame from "@/components/demo-frame";

export const metadata: Metadata = {
  title: "MarisAI",
  description:
    "MarisAI is PolarisAI Labs' enterprise Conversational AI platform that unlocks the 99.99% of knowledge hidden from traditional search engines with human-like answers, 24/7 support and multilingual task automation.",
};

const modules = [
  {
    Icon: Database,
    title: "Enterprise Knowledge",
    sub: "Intranets · File systems · Emails · DBs",
  },
  {
    Icon: MessagesSquare,
    title: "Conversational AI",
    sub: "GPT-powered · Human-like responses",
  },
  {
    Icon: Headset,
    title: "Customer Support",
    sub: "24/7 · FAQs · Troubleshooting",
  },
  {
    Icon: ChartLine,
    title: "Sales & Marketing",
    sub: "Lead gen · Engagement · Conversion",
  },
  {
    Icon: Users,
    title: "Employee Assistance",
    sub: "Knowledge retrieval · Productivity",
  },
  {
    Icon: Languages,
    title: "Translation",
    sub: "Multilingual · Real-time",
  },
  {
    Icon: Zap,
    title: "Task Automation",
    sub: "Repetitive tasks · Workflow efficiency",
  },
  {
    Icon: ChartColumn,
    title: "Data Analytics",
    sub: "Insights · Reporting · Decisions",
  },
];

const facts = [
  "72% of launched products fail - HBR",
  "70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine",
  "92% of users click on an item in the first page of Google search results",
];

export default function MarisAIPage() {
  return (
    <>
      <PageHero
        icon={MessageSquare}
        title="MarisAI"
        badges={["Conversational AI", "Enterprise"]}
        subtitle="Unlock the 99.99% of enterprise knowledge hidden from traditional search engines."
        description="Proprietary Knowledge Base · Human-like Answers · 24/7 Support · Task Automation · Multilingual"
        modules={modules}
        links={[
          {
            label: "Try MarisAI",
            href: "https://polarisailabs-maris.hf.space",
            primary: true,
            external: true,
          },
        ]}
      />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why MarisAI"
            title="Beyond Traditional Search"
          />
          <div className="space-y-6 text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              Traditional search engines like Google and Bing can only index a
              small portion of the internet, estimated to be around 0.01% of the
              total data available. The vast majority of data, around 99.99%, is
              not accessible through traditional search engines and is instead
              located in the deep web and dark web. The deep web includes data
              that is not easily accessible through regular search engines, such
              as non-HTML data at enterprises and institutions, as well as HTML
              websites that are not indexed but can still be accessed through a
              direct URL or IP address. Therefore, relying solely on traditional
              search engines like Google and Bing can limit the amount of
              information available to individuals and organizations.
            </p>
            <p>
              Enterprises are unique and diverse, with their own specialized
              knowledge domains and sources of data, including both HTML and
              non-HTML data, such as file systems, intranets, document management
              systems, emails, and databases. Accessing this data is critical for
              the efficiency of the organization and for making informed
              decisions. Effective management of enterprise data can help
              organizations leverage their knowledge, foster collaboration among
              employees, and ultimately save costs by reducing the time and
              effort required to find information.
            </p>
            <p>
              MarisAI, our Conversational AI platform, provides relevant,
              specific, human-like answers to end-users by utilizing a
              proprietary enterprise knowledge base, and engages users with
              personalized recommendations. It is powered by a Generative
              Pre-trained Transformer model and was trained using a technique
              called transformer neural networks. It can help enterprise users
              with customer support, sales and marketing, and employee
              assistance. It can provide 24/7 customer support by answering FAQs,
              providing product information and troubleshooting issues. It can
              also engage with potential customers in a conversational manner to
              generate leads and drive sales. Additionally, it can analyze data,
              provide language translation services and improve efficiency by
              automating repetitive tasks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Live Demo"
            title="MarisAI in Action"
            description="Ask MarisAI anything grounded in enterprise knowledge and see human-like, conversational responses."
          />
          <DemoFrame
            src="https://polarisailabs-maris.hf.space"
            title="MarisAI live demo"
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
