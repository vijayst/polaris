import type { Metadata } from "next";
import { MonitorPlay } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import DemoFrame from "@/components/demo-frame";

export const metadata: Metadata = {
  title: "Recommendations Demos",
  description:
    "Try live PolarisAI Labs recommendation engine demos — item-based and user-based collaborative filtering for products, hotel recommendations and movie recommendations.",
};

const demos = [
  {
    label: "Demo 01",
    title: "Product Recommendations",
    description:
      "This Recommendation Engine uses Item based collaborative filtering.",
    hint: "Try: 22969 or 21218 or 22173",
    src: "https://polarisailabs-ibcfproductrecommendations.hf.space",
    frameTitle: "Item based collaborative filtering product recommendations demo",
    height: 500,
  },
  {
    label: "Demo 02",
    title: "Product Recommendations",
    description:
      "This Recommendation Engine uses user based collaborative filtering.",
    hint: "Try: Customer ID 1:12702 and Customer ID 2:14608",
    src: "https://polarisailabs-ubcfproductrecommendations.hf.space",
    frameTitle: "User based collaborative filtering product recommendations demo",
    height: 500,
  },
  {
    label: "Demo 03",
    title: "Hotel Recommendations",
    description:
      "Tell us where you are headed and why, and get tailored hotel suggestions.",
    hint: "Try: Location:France and Purpose of Travel:Honeymoon with my wife(optional)",
    src: "https://polarisailabs-hotelrecommendations.hf.space",
    frameTitle: "Hotel recommendations demo",
    height: 700,
  },
  {
    label: "Demo 04",
    title: "Movie Recommendations",
    description:
      "Name a movie you enjoyed and discover similar titles you will love.",
    hint: "Try something like: Shawshank Redemption",
    src: "https://polarisailabs-movierecommendations.hf.space",
    frameTitle: "Movie recommendations demo",
    height: 500,
  },
];

export default function RecommendationsDemosPage() {
  return (
    <>
      <PageHero
        icon={MonitorPlay}
        title="Recommendation Engine Demos"
        subtitle="Hands-on with our AI/ML-based Recommendation Engines — products, hotels and movies, powered by collaborative filtering."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={demos[0].label}
            title={demos[0].title}
            description={demos[0].description}
          />
          <p className="mb-4 text-center text-sm font-semibold text-slate-700">
            {demos[0].hint}
          </p>
          <DemoFrame
            src={demos[0].src}
            title={demos[0].frameTitle}
            height={demos[0].height}
          />
        </div>
      </section>

      {demos.slice(1).map((demo, i) => (
        <section
          key={`${demo.label}-${demo.frameTitle}`}
          className={i % 2 === 0 ? "bg-slate-50 py-16 sm:py-20" : "py-16 sm:py-20"}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={demo.label}
              title={demo.title}
              description={demo.description}
            />
            <p className="mb-4 text-center text-sm font-semibold text-slate-700">
              {demo.hint}
            </p>
            <DemoFrame
              src={demo.src}
              title={demo.frameTitle}
              height={demo.height}
            />
          </div>
        </section>
      ))}
    </>
  );
}
