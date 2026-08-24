import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import FactCarousel from "@/components/fact-carousel";

export const metadata: Metadata = {
  title: "Mentorship",
  description:
    "Mentorship, coaching and corporate training for product management — workshops for corporate teams, interactive 1-on-1 CXO sessions and personal mentorship for individuals.",
};

const programs = [
  {
    src: "/images/CTeams.jpeg",
    alt: "Corporate teams workshop",
    title: "Corporate Teams",
    description:
      "Our standalone workshops and extended courses are the perfect solution for an engaging and effective way to upskill your product management teams. Led by our expert product managers, our live and remote sessions provide a mix of lecture and hands-on activities, keeping your team engaged and motivated throughout. Our workshops and courses are designed to be highly interactive, giving your team the opportunity to put their newfound knowledge into practice in a safe and supportive environment.",
  },
  {
    src: "/images/CCxos.jpeg",
    alt: "Corporate CXO coaching session",
    title: "Corporate CXOs",
    description:
      "Whether you're just starting out or looking to take your team to the next level, our interactive 1-on-1 sessions can help you achieve your goals. We'll work with you to tailor our approach to meet your specific needs, whether that means introducing product management for the first time or upskilling your team in specific areas. With our help, you can align your whole team around a central practice, set clear goals and objectives, and develop the skills and strategies your team needs to succeed.",
  },
  {
    src: "/images/PMentor.jpeg",
    alt: "Personal product management mentorship",
    title: "Individuals",
    description:
      "We have extensive experience in product management and are passionate about helping others succeed. We will provide you with personalized feedback, advice, and support to help you overcome any challenges you may be facing and take your product management career to the next level. Whether you're looking to develop new product management skills, or simply explore new career opportunities, our personal mentorship program is the perfect way to get the guidance you need.",
  },
];

const facts = [
  "72% of launched products fail - HBR",
  "70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine",
  "92% of users click on an item in the first page of Google search results",
];

export default function MentorshipPage() {
  return (
    <>
      <PageHero
        icon={GraduationCap}
        title="Mentorship and Coaching"
        subtitle="Mentorship · Coaching · Corporate Training"
        badges={["For Teams", "For CXOs", "For Individuals"]}
        description="Unlock your potential with our expert mentorship and comprehensive training programs."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Mentorship, Coaching and Corporate Training
              </h2>
              <Image
                src="/images/MentorGrow.jpeg"
                alt="Growing careers through mentorship"
                width={5472}
                height={3648}
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="mt-6 h-auto w-full max-w-md rounded-2xl border border-slate-200 object-cover shadow-sm"
              />
            </div>
            <div className="space-y-4 text-justify text-sm leading-relaxed text-slate-600">
              <p>
                We firmly believe that the most effective way to learn about
                product management is by working with experienced product
                managers who have successfully driven and launched products in
                the past. Our product managers bring valuable insights,
                practical knowledge, and expertise that are essential for
                achieving success.
              </p>
              <p>
                Our approach is grounded in extensive research, and we are
                committed to leading the conversation in product management. We
                value curiosity and counter-intuitive thinking, as we believe
                these skills are critical for any great product manager to
                master. While tactical and practical skills are essential, we
                understand that the ability to focus on the{" "}
                <span className="font-semibold text-slate-900">
                  &ldquo;why&rdquo;
                </span>{" "}
                and{" "}
                <span className="font-semibold text-slate-900">
                  &ldquo;what&rdquo;
                </span>{" "}
                behind a product is what truly sets a great product manager
                apart.
              </p>
              <p>
                Our goal is to fully understand your company&apos;s vision and
                mission, and then help your in-house product teams align with
                them. We believe that by giving your product teams the skills
                they need to tackle bigger challenges, we can help your company
                achieve its goals. Let us help you take your product management
                to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Programs"
            title="How We Work With You"
            description="Standalone workshops, extended courses and 1-on-1 sessions — live and remote, led by expert product managers."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60"
              >
                <div className="overflow-hidden rounded-xl bg-slate-50">
                  <Image
                    src={program.src}
                    alt={program.alt}
                    width={4962}
                    height={3381}
                    loading="lazy"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {program.description}
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
