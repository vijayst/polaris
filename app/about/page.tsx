import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Cpu,
  HeartPulse,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShoppingCart,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";
import DemoFrame from "@/components/demo-frame";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the PolarisAI Labs team — product managers with decades of engineering and product management expertise helping organizations build user-centric, revenue-generating AI products.",
};

const industries: Industry[] = [
  {
    Icon: ShoppingCart,
    title: "Ecommerce",
    body: "Discover how our product management expertise can elevate your e-commerce business! With years of experience, we have honed our skills in creating innovative and user-friendly products that drive sales and boost customer satisfaction. Don’t let a lack of expertise hold you back from achieving success — let us help take your e-commerce business to the next level.",
  },
  {
    Icon: Cpu,
    title: "IoT",
    body: "Unlock the full potential of your IoT business with our product management expertise! Our team has extensive experience in creating cutting-edge products that are specifically tailored to the unique challenges and opportunities of the IoT industry. Let us help you stay ahead of the curve and drive growth for your IoT business with our proven expertise in product development.",
  },
  {
    Icon: HeartPulse,
    title: "Healthcare",
    body: "Transform your healthcare business with our unrivaled product management expertise! With years of experience, we have a deep understanding of the unique needs and challenges of the healthcare industry. Our team is dedicated to creating innovative and user-friendly products that improve patient outcomes, reduce costs, and increase operational efficiency.",
  },
  {
    Icon: Landmark,
    title: "Finance",
    body: "Experience the future of finance with our expert product-building skills! Our team has a wealth of experience creating innovative, secure, and user-friendly products specifically tailored to the unique challenges and opportunities of the finance industry. Let us help you stay ahead of the curve and unlock the full potential of your finance business.",
  },
];

type Industry = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const expertise = [
  { label: "Product Management", value: 95 },
  { label: "AI and ML Products", value: 85 },
  { label: "Technology", value: 90 },
  { label: "Product Design and Development", value: 80 },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        icon={Users}
        title="About Us"
        description="A tight-knit group of product managers bringing together decades of engineering and product management expertise across industries."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              We are awesome <span className="text-brand-600">TEAM</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Our team is a tight-knit group of product managers who bring
              together decades of engineering and product management expertise,
              we have a wealth of experience in various industries, we use a
              data-driven decision making approach, we work closely with our
              customers and partners to co-create solutions that meet their
              needs, and we strive to deliver products that make a real
              difference in the lives of our customers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Why Choose Us?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                From idea to launch to IPO and beyond, PolarisAI Labs helps
                product teams and CXOs in organizations to conceptualize and
                build user-centric, innovative and revenue generating products.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">Industries</h3>
              <div className="mt-4 space-y-4">
                {industries.map(({ Icon, title, body }) => (
                  <details
                    key={title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-brand-200 open:shadow-md"
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-3 text-sm font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform group-open:scale-110">
                        <Icon className="h-4 w-4" />
                      </span>
                      {title}
                    </summary>
                    <p className="mt-3 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-600">
                      {body}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">Our Expertise</h3>
              <div className="mt-6 space-y-5">
                {expertise.map((item) => (
                  <div key={item.label}>
                    <h6 className="mb-1.5 text-sm font-semibold text-slate-800">
                      {item.label}
                    </h6>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-blue"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="The Person Behind PolarisAI Labs"
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-3">
            <div className="text-center md:text-left">
              <div className="relative mx-auto w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-md md:w-full">
                <Image
                  src="/images/Gopala_Avatar.jpg"
                  alt="Gopala, Founder of PolarisAI Labs"
                  width={976}
                  height={1096}
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 224px"
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
                Founder
              </span>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:col-span-2">
              <p>
                Gopala is a workafrolic technical product leader who has driven
                and launched three B2B and two B2C products Fabindia (
                <a
                  href="https://www.fabindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-700"
                >
                  Fabindia
                </a>
                ) and Biba (
                <a
                  href="https://www.biba.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-700"
                >
                  Biba
                </a>
                ), a Small Language Models (SLMs) Platform (
                <Link
                  href="/platform"
                  className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-700"
                >
                  PolarisAI Platform
                </Link>
                ), an e-commerce platform, and a travel platform (
                <a
                  href="https://bit.ly/35pSI4w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-700"
                >
                  Chase Ultimate Rewards
                </a>{" "}
                — a platform handling $5.5B in GTV annually).
              </p>
              <p>
                Recently, Gopala has driven and launched a Small Language Models
                (SLMs) Platform (PolarisAI Platform) born out of his passion and
                obsession with digging into the internals of what really happens
                between LLM input and output. This Platform enables AI Admins,
                Infrastructure Engineers, and Data Admins at SMEs to recompose,
                optimize, fine-tune, and deploy PolarisAI open-weight optimized
                SLMs on their own local infrastructure — replacing costly
                API-based LLMs and delivering up to 90% cost savings and 80%
                lower latency, fully offline and privacy-compliant. These SLMs
                can be Post-trained · Quantized · Distilled · Pruned · Memory
                &amp; Compute Optimized using PolarisAI Platform.
              </p>
              <p>
                With 16 years of professional experience, including a stint at{" "}
                <a
                  href="https://www.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-700"
                >
                  Microsoft
                </a>{" "}
                and his recent stint at JPMorgan Chase as Director – Technical
                Product Management, Gopala&rsquo;s key strengths include a deep
                understanding of AI products, developing counter-intuitive
                strategies, scaling systems, and evaluating technical
                possibilities.
              </p>
              <p>
                Gopala holds a B.Tech in Mechanical Engineering from{" "}
                <a
                  href="https://www.iitb.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-700"
                >
                  IIT Bombay
                </a>
                , and he currently serves as an official mentor for students at{" "}
                <a
                  href="https://www.iitb.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-700"
                >
                  IIT Bombay
                </a>
                .
              </p>
              <p>
                Check out Gopala&rsquo;s impressive product portfolio (
                <a
                  href="https://gopala-krishna.tech/UIProductManagement/MyProductPage.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-700"
                >
                  Product Portfolio
                </a>
                ) and personal website (
                <a
                  href="https://gopala-krishna.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 transition-colors hover:text-brand-700"
                >
                  Personal Website
                </a>
                ) to learn more about his achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            description="Please contact us with any questions or feedback."
          />
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
            <div>
              <DemoFrame
                src="https://www.google.com/maps?q=17.3547904,78.3754355&z=14&output=embed"
                title="PolarisAI Labs office location"
                height={380}
              />
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <strong className="font-semibold text-slate-900">
                      PolarisAI Labs
                    </strong>
                    <br />
                    Bandlaguda Jagir, Hyderabad, INDIA
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Phone className="h-4 w-4" />
                  </span>
                  (+91) 8978556611
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Mail className="h-4 w-4" />
                  </span>
                  gopala@polarisailabs.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
