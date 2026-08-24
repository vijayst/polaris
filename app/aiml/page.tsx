import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftRight, BrainCircuit, Copy, EyeOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import FactCarousel from "@/components/fact-carousel";

export const metadata: Metadata = {
  title: "AI and ML",
  description:
    "Build Machine Learning models and integrate Generative AI models into your products — expertise across the OpenAI API and Google Cloud AI.",
};

const platforms = [
  {
    src: "/images/openaims.jpg",
    alt: "OpenAI",
    title: "Open AI",
    description:
      "OpenAI's AI models and tools are designed to be powerful, flexible, and scalable, enabling businesses to develop innovative products and services that are able to learn and adapt over time. This can lead to a range of benefits, such as improved efficiency, increased productivity, and enhanced customer experiences. By leveraging the power of OpenAI, businesses can stay on the cutting edge of technology and gain a competitive edge in their respective industries. Our team has the expertise and experience necessary to help you develop top-of-the-line AI and ML products and seamlessly integrate AI and ML features into your existing products using the OpenAI API. With our assistance, you can take full advantage of OpenAI's advanced AI and machine learning technologies, unlocking a world of new possibilities for your business.",
  },
  {
    src: "/images/googleai.jpg",
    alt: "Google Cloud AI",
    title: "Google Cloud AI",
    description:
      "The power of GoogleAI lies in its ability to provide state-of-the-art machine learning algorithms, data analysis tools, and natural language processing capabilities. These powerful tools can be used to create predictive models, develop conversational interfaces, and build sophisticated recommendation systems, among many other applications. By leveraging the power of GoogleAI, businesses can gain insights from data, automate workflows, and improve the customer experience. GoogleAI's advanced technologies can help businesses to solve complex problems, streamline their operations, and stay ahead of the competition. Our team has the expertise and experience necessary to help you develop and integrate advanced AI and machine learning features by leveraging GoogleAI's powerful tools and models.",
  },
];

type PortfolioItem = {
  Icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  linkHref: string;
};

const portfolio: PortfolioItem[] = [
  {
    Icon: ArrowLeftRight,
    color: "bg-brand-500",
    title: "Conversational AI",
    description:
      "Gartner predicts that by 2022, 70% of white-collar workers will be interacting with conversational platforms on a daily basis, while Oracle's survey found that 80% of businesses planned to use chat bots for customer service by 2020. Furthermore, a study by Salesforce revealed that 64% of customers expect real-time responses to their inquiries and complaints. These statistics clearly demonstrate the significant impact and potential of integrating chat into your products.",
    linkHref: "/demos/conversational-ai",
  },
  {
    Icon: Copy,
    color: "bg-brand-blue",
    title: "Recommendations",
    description:
      "McKinsey reports that recommendation engines account for 35% of product views on Amazon, 70% of video views on YouTube, 80% of views on Netflix, and 35% of Swiggy's views. Additionally, Barilliance found that recommendations can generate up to 31% of revenue for e-commerce sites. These figures demonstrate the powerful impact and potential of integrating recommendation engines into your products.",
    linkHref: "/demos/recommendations",
  },
  {
    Icon: EyeOff,
    color: "bg-brand-purple",
    title: "Text Classification",
    description:
      "According to IBM Research, 72% of organizations are currently utilizing sentiment analysis and spam classification to monitor customer communications and system security. Moreover, a study by TechTarget revealed that businesses implementing combined sentiment-spam detection solutions experienced a 48% reduction in false positives and a 32% improvement in content filtering accuracy. These figures clearly illustrate the significant impact of integrating sentiment analysis with spam classification into your products.",
    linkHref: "/demos/text-classification",
  },
];

const facts = [
  "72% of launched products fail - HBR",
  "70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine",
  "92% of users click on an item in the first page of Google search results",
];

export default function AimlPage() {
  return (
    <>
      <PageHero
        icon={BrainCircuit}
        title="Artificial Intelligence and Machine Learning"
        subtitle="Build Machine Learning Models · Integrate Generative AI Models"
        badges={["ML", "Generative AI", "OpenAI API", "Google Cloud AI"]}
        description="With expert assistance, your company can effortlessly develop Machine Learning models or seamlessly integrate Generative AI models into your existing products."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <Image
                src="/images/aiml.jpg"
                alt="Machine learning and generative AI"
                width={1047}
                height={634}
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-2xl border border-slate-200 object-cover shadow-sm"
              />
            </div>
            <div className="space-y-4 text-justify text-sm leading-relaxed text-slate-600">
              <p>
                Machine learning (ML) and Generative AI are rapidly growing
                fields that are revolutionizing the technology world. A survey
                conducted by McKinsey &amp; Company found that more than 50% of
                executives said that Generative AI and Machine Learning had
                already contributed to revenue growth in their companies. AI
                adoption is particularly strong in the high-tech, telecom, and
                financial services sectors, with more than 60% of companies in
                these industries using Generative AI in some form. In 2020, the
                number of patents on Machine Learning granted by the US Patent
                and Trademark Office (USPTO) was more than 17,000, which is a
                17% increase from 2019. In a survey conducted by Deloitte, 73%
                of respondents said that their companies have already
                implemented AI or plan to do so in the near future. The number
                of Generative AI-related job postings on LinkedIn has increased
                by 40% from 2018 to 2021.These statistics demonstrate the
                growing impact and potential of Generative AI and Machine
                Learning in the technology world, and suggest that the adoption
                of these technologies will continue to grow in the future.
              </p>
              <p>
                With our expert assistance, your company can effortlessly
                develop Machine Learning Models or seamlessly integrate
                Generative AI Models into your existing products. With our
                comprehensive support and top-of-the-line technology, you can
                stay ahead of the competition and achieve your business goals
                with ease.
              </p>
              <p>
                Experience the power of our{" "}
                <Link
                  href="/vegaai"
                  className="font-bold text-brand-600 hover:text-brand-500"
                >
                  Travel Memories Platform - VegaAI
                </Link>{" "}
                and{" "}
                <Link
                  href="/marisai"
                  className="font-bold text-brand-600 hover:text-brand-500"
                >
                  Conversational AI for Enterprise - MarisAI
                </Link>{" "}
                Try it now.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platforms"
            title="AI Platforms We Work With"
            description="Deep integration expertise across the leading Generative AI platforms."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {platforms.map((platform) => (
              <div
                key={platform.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60"
              >
                <div className="overflow-hidden rounded-xl bg-slate-50">
                  <Image
                    src={platform.src}
                    alt={platform.alt}
                    width={1065}
                    height={549}
                    loading="lazy"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-48 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {platform.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Product Portfolio"
            description="Conversational AI, recommendation engines and text classification — integrated into real products."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {portfolio.map(({ Icon, color, title, description, linkHref }) => (
              <div
                key={title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform group-hover:scale-110 ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our recent work is a testament to our expertise in this field,
                  and we welcome you to:{" "}
                  <Link
                    href={linkHref}
                    className="font-bold text-brand-600 hover:text-brand-500"
                  >
                    check them out here.
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FactCarousel facts={facts} />
    </>
  );
}
