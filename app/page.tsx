import Link from "next/link";
import Image from "next/image";
import { Cpu, Monitor, Rocket, Trophy } from "lucide-react";
import HeroSlider, { type Slide } from "@/components/hero-slider";
import FactCarousel from "@/components/fact-carousel";
import SectionHeading from "@/components/section-heading";

const slides: Slide[] = [
  {
    image: "/images/slides/1.jpg",
    alt: "Small Language Models",
    title: "Recompose, Optimize and Deploy Small Language Models",
    description:
      "Pre-trained · Quantized · Distilled · Pruned — SLMs that run on desktops, laptops & mobile devices.",
    cta: { label: "Explore Platform", href: "/platform" },
  },
  {
    image: "/images/slides/2.jpg",
    alt: "Product management advisory",
    title: "Product Management Advisory for CXOs",
    description:
      "Leverage our product management expertise to transform your ideas into revenue generating products.",
    cta: { label: "Read More", href: "/product-management" },
  },
  {
    image: "/images/slides/3.jpg",
    alt: "Technology advisory",
    title: "Technology Advisory for CXOs",
    description:
      "Leverage our technology expertise to build, launch and scale up your systems.",
    cta: { label: "Read More", href: "/technology" },
  },
  {
    image: "/images/slides/4.jpg",
    alt: "Mentorship and coaching",
    title: "Mentorship and Coaching",
    description:
      "Unlock your potential with our expert mentorship and comprehensive training programs.",
    cta: { label: "Read More", href: "/mentorship" },
  },
];

const pillars = [
  {
    Icon: Trophy,
    color: "bg-brand-400",
    title: "Vision",
    description:
      "We help CXOs and product teams define a clear, actionable vision for deploying Small Language Models in their organization — articulating where on-device AI fits in the product strategy, what intelligence it unlocks, and how it differentiates the business from cloud-enabled and AI Roadmap Driven competitors.",
  },
  {
    Icon: Rocket,
    color: "bg-brand-blue",
    title: "Mission",
    description:
      "We turn the vision into a concrete delivery roadmap — from selecting the right base model and training corpus, through quantization and distillation, to edge deployment and monitoring. Short-term milestones and long-term production targets are defined for every model in your product portfolio and roadmap.",
  },
  {
    Icon: Monitor,
    color: "bg-brand-400",
    title: "Strategy",
    description:
      "We help define measurable goals and high-level initiatives around model efficiency — INT8/INT4 quantization targets, memory budgets, latency SLAs, and accuracy thresholds. We answer the hard questions: which model, for whom, on which device, and how it generates business value without a cloud dependency.",
  },
  {
    Icon: Cpu,
    color: "bg-brand-purple",
    title: "Technology",
    description:
      "We guide teams on the exact technology stack required to build production SLMs — LoRA/QLoRA fine-tuning, GPTQ/GGUF quantization, knowledge distillation pipelines, pruning frameworks, and on-device inference runtimes (llama.cpp, ONNX). The right stack for your hardware, budget, and accuracy bar.",
  },
];

const works = [
  { src: "/images/works/fabindia.png", alt: "Fabindia" },
  { src: "/images/works/biba.png", alt: "Biba" },
  { src: "/images/works/iot.png", alt: "IoT" },
  { src: "/images/works/mobile.png", alt: "Mobile" },
];

const facts = [
  "85% of AI projects never reach production — a unified SLM platform cuts that failure rate by more than half.",
  "72% of launched products fail — HBR",
  "A fine-tuned 7B model with LoRA matches GPT-3.5 on domain tasks at less than 1% of the compute cost.",
  "INT4 quantization reduces a model's memory footprint by 8× with less than 2% accuracy loss on most NLP benchmarks.",
  "70% of YouTube views, 80% of Netflix views and 35% of Amazon views come through the recommendation engine.",
  "92% of users click on an item in the first page of Google search results.",
  "Microsoft's Phi-3 Mini (3.8B parameters) outperforms models 10× its size on reasoning benchmarks — smarter training beats bigger models.",
];

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={slides} />

      {/* Hero banner */}
      <section className="hero-glow relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-blue to-brand-purple">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
          <h1 className="inline-block rounded-2xl border border-white/50 bg-white/10 px-6 py-4 text-xl font-bold leading-snug text-white backdrop-blur-sm sm:text-2xl">
            Turn AI-Research Ideas into Commercially Viable AI-Powered Products
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
            At PolarisAI Labs, we believe in the power of great ideas. We are
            passionate about creating innovative AI Products and Platforms that
            exceed expectations and drive success. With decades of combined
            expertise in engineering and technical product management, we have
            the knowledge and skills to make your vision a reality.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
            The PolarisAI Platform is purpose-built to recompose, optimize and
            deploy PolarisAI Small Language Models that run on desktops,
            laptops &amp; mobile devices. Every module serves one mission: take
            a model from raw data all the way to a lean, production-ready SLM
            that fits in your existing infrastructure, not just in a data
            center. Our models are Post-trained on curated domain corpora,
            Precise-Quantized&trade; to lower precision for minimal memory
            footprint, Precise-Trimmed&trade; to strip redundant weights,
            Intelligence-Recovered&trade; for maximum accuracy-per-parameter,
            and fully Memory &amp; Compute Optimized for real-world edge, cloud
            and on-premise deployment.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/platform"
              className="rounded-full border-2 border-white/60 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/25 hover:shadow-lg"
            >
              Explore PolarisAI Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Drucker quote */}
      <div className="border-l-4 border-brand-400 bg-slate-50 py-5">
        <p className="mx-auto max-w-7xl px-4 text-center text-sm italic text-slate-600 sm:px-6 lg:px-8">
          Peter Drucker once said:{" "}
          <span className="font-semibold not-italic text-slate-900">
            &ldquo;Customers don&rsquo;t buy products. They buy the benefits
            that these products and their suppliers offer to them.&rdquo;
          </span>
        </p>
      </div>

      {/* Four pillars */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Our Pillars"
            description="From vision to production — we partner with you across every stage of your AI journey."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ Icon, color, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60"
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
              </div>
            ))}
          </div>

          {/* Recent works */}
          <div className="mt-20">
            <SectionHeading
              eyebrow="Portfolio"
              title="Recent Works"
              description="A snapshot of the products and platforms we have shipped."
            />
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {works.map((work) => (
                <div
                  key={work.src}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                >
                  <Image
                    src={work.src}
                    alt={work.alt}
                    width={480}
                    height={360}
                    loading="lazy"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="h-44 w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105 sm:h-52"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-slate-900/80 py-2 text-center text-xs font-semibold text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    {work.alt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FactCarousel facts={facts} />
    </>
  );
}
