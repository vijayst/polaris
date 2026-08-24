import type { Metadata } from "next";
import {
  ChartColumn,
  Database,
  Eye,
  Filter,
  Layers,
  Minimize2,
  Network,
  Rocket,
  Server,
  SlidersHorizontal,
  Settings,
  Type,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import FactCarousel from "@/components/fact-carousel";

export const metadata: Metadata = {
  title: "PolarisAI Platform",
  description:
    "End-to-end AI/ML development, training, and deployment infrastructure.",
};

type HeroModuleData = {
  Icon: LucideIcon;
  title: string;
  sub: string;
};

type PipelineStep = {
  Icon: LucideIcon;
  title: string;
  sub: string;
};

type Capability = {
  Icon: LucideIcon;
  title: string;
  body: ReactNode;
};

const heroModules: HeroModuleData[] = [
  { Icon: Filter, title: "Fine-Tuning", sub: "PEFT · LoRA · QLoRA" },
  {
    Icon: Minimize2,
    title: "Quantization",
    sub: "INT8 · INT4 · GPTQ Compression",
  },
  { Icon: Rocket, title: "SLM Inference", sub: "Edge · On-premise · Low-latency" },
  { Icon: ChartColumn, title: "Evaluation", sub: "HELM · MMLU · Model Scoring" },
  { Icon: Type, title: "Tokenization", sub: "BPE · WordPiece · SentencePiece" },
  {
    Icon: Network,
    title: "Embeddings",
    sub: "Semantic search · RAG · Clustering",
  },
  {
    Icon: Eye,
    title: "Attention",
    sub: "Multi-Head · Masked Self-Attention",
  },
  {
    Icon: Server,
    title: "Post-Training",
    sub: "MLM · CLM · Distributed Training",
  },
];

const pipelineSteps: PipelineStep[] = [
  {
    Icon: Database,
    title: "Data Ingestion & Prep",
    sub: "Structured, unstructured, and streaming sources with automated quality checks.",
  },
  {
    Icon: Type,
    title: "Tokenization",
    sub: "BPE, WordPiece & SentencePiece workbench for vocabulary design.",
  },
  {
    Icon: Settings,
    title: "Pre & Post-Training",
    sub: "Distributed transformer training on domain-specific corpora.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Fine-Tuning",
    sub: "PEFT, LoRA, QLoRA & full-parameter adaptation for downstream tasks.",
  },
  {
    Icon: ChartColumn,
    title: "Evaluation & Scoring",
    sub: "Multi-metric benchmarking with human-in-the-loop validation.",
  },
  {
    Icon: Minimize2,
    title: "Quantization & Pruning",
    sub: "INT8/INT4 compression — up to 4× cost reduction, <2% accuracy loss.",
  },
  {
    Icon: Rocket,
    title: "SLM Inference",
    sub: "Edge-optimized serving for low-latency, on-premise deployments.",
  },
];

const capabilities: Capability[] = [
  {
    Icon: Filter,
    title: "Small Language Models Fine-Tuning",
    body: (
      <>
        Fine-tuning is where a general-purpose model becomes a precise,
        domain-expert tool. PolarisAI Platform&rsquo;s fine-tuning module
        supports both{" "}
        <strong className="font-semibold text-slate-900">
          full-parameter fine-tuning
        </strong>{" "}
        and parameter-efficient methods —{" "}
        <strong className="font-semibold text-slate-900">
          LoRA, QLoRA, Prefix Tuning, and Adapter Layers
        </strong>{" "}
        — enabling organizations to achieve GPT-4-class domain accuracy at less
        than 1% of the compute cost. A 2024 Stanford HELM study showed
        fine-tuned 7B models outperform GPT-3.5 on industry-specific benchmarks
        by up to 22%. The classification workbench includes automated
        class-imbalance handling, label smoothing, temperature scaling for
        confidence calibration, and per-class F1 reporting — ensuring models are
        not just accurate in aggregate but reliable across every label, which is
        critical in healthcare, legal, financial, and e-commerce classification
        tasks.
      </>
    ),
  },
  {
    Icon: Zap,
    title: "Small Language Models Quantization and Inference",
    body: (
      <>
        The era of Small Language Models (SLMs) has arrived. Microsoft Phi-3,
        Google Gemma 2, Qwen 3.5 and Meta LLaMA-3 8B have demonstrated that
        sub-10B models — when correctly quantized and instruction-tuned — match
        much larger models on targeted tasks while delivering{" "}
        <strong className="font-semibold text-slate-900">
          4–8× lower inference cost
        </strong>{" "}
        and{" "}
        <strong className="font-semibold text-slate-900">
          60–80% lower latency
        </strong>
        . PolarisAI&rsquo;s quantization workbench supports INT8, INT4, and GPTQ
        quantization with a live accuracy-vs-speed tradeoff dashboard so teams
        can make informed compression decisions. The SLM inference engine is
        optimized for on-premise CPU servers, edge hardware (NVIDIA Jetson,
        Apple Silicon), and mobile deployment — enabling use cases where data
        sovereignty, sub-100ms latency, or air-gapped environments make
        cloud-only LLMs impractical. IDC forecasts{" "}
        <strong className="font-semibold text-slate-900">
          40% of enterprise LLM inference will run on-premise by 2026
        </strong>
        .
      </>
    ),
  },
  {
    Icon: Eye,
    title: "Attention Algorithms",
    body: (
      <>
        Every modern transformer model — BERT, GPT, LLaMA, T5 — is driven by
        attention mechanisms that assign relevance weights across tokens.
        Without visibility into these weights, debugging misclassifications or
        hallucinations is guesswork. PolarisAI Platform provides dedicated
        visualizers for{" "}
        <strong className="font-semibold text-slate-900">
          Multi-Head Attention
        </strong>{" "}
        (encoder cross-token relationships at each layer and head) and{" "}
        <strong className="font-semibold text-slate-900">
          Masked Self-Attention
        </strong>{" "}
        (decoder causal patterns in autoregressive generation). Gartner
        identifies explainability as a{" "}
        <strong className="font-semibold text-slate-900">
          top-3 enterprise AI requirement
        </strong>
        , and the EU AI Act mandates transparency for high-risk AI systems. Our
        attention visualizer gives engineering teams the interpretability depth
        required to meet both regulatory standards and product quality bar —
        turning a black box into an understandable, debuggable system.
      </>
    ),
  },
  {
    Icon: Server,
    title: "Small Language Models Post-Training Infrastructure",
    body: (
      <>
        Post-training on a foundation model is the most compute-intensive step
        in AI development — GPT-3-scale runs cost upward of $4 million.
        PolarisAI Platform democratizes post-training with a distributed
        pipeline supporting{" "}
        <strong className="font-semibold text-slate-900">
          data parallelism
        </strong>
        ,{" "}
        <strong className="font-semibold text-slate-900">
          gradient checkpointing
        </strong>
        , and{" "}
        <strong className="font-semibold text-slate-900">
          mixed-precision training (FP16/BF16)
        </strong>
        . Supported objectives include Masked Language Modeling (MLM), Causal
        Language Modeling (CLM), and span-corruption (T5-style). Native
        integrations with Weights &amp; Biases provide full experiment lineage.
        For organizations that cannot justify ground-up post-training, the
        platform also supports continued post-training on top of open-source
        checkpoints (LLaMA, Qwen, Gemma) — achieving domain adaptation at a
        fraction of the cost with a proven, reproducible workflow.
      </>
    ),
  },
  {
    Icon: Type,
    title: "Tokenization Engine",
    body: (
      <>
        Tokenization determines how a model perceives language — a poor
        tokenizer propagates errors through every downstream stage. The
        PolarisAI Tokenization Engine supports{" "}
        <strong className="font-semibold text-slate-900">
          BPE (Byte Pair Encoding)
        </strong>
        ,{" "}
        <strong className="font-semibold text-slate-900">WordPiece</strong> and{" "}
        <strong className="font-semibold text-slate-900">SentencePiece</strong>{" "}
        in a single interactive workbench. Practitioners can visualize merge
        rules, compare vocabulary coverage across corpora, and benchmark subword
        segmentation side-by-side before committing to a pre &amp; post training
        run. A well-tuned tokenizer reduces vocabulary size by 30–40% and
        directly improves model perplexity and downstream task accuracy. The
        workbench exports production-ready tokenizer configs compatible with
        HuggingFace Tokenizers, SentencePiece, and tiktoken.
      </>
    ),
  },
  {
    Icon: Network,
    title: "Embeddings Workbench",
    body: (
      <>
        Vector embeddings are now the connective tissue of modern AI — powering
        semantic search, RAG pipelines, recommendation engines, and anomaly
        detection. A 2024 a16z report found that{" "}
        <strong className="font-semibold text-slate-900">
          over 70% of enterprise AI applications
        </strong>{" "}
        rely on embeddings as a core component. The PolarisAI Embeddings
        Workbench enables teams to generate embeddings from multiple model
        families, project them into 2D/3D space, and evaluate cosine similarity
        distributions and retrieval precision@k — all interactively. Teams that
        use the workbench to select embedding models cut experimentation cycles
        from weeks to hours and consistently achieve higher retrieval quality in
        production RAG deployments.
      </>
    ),
  },
];

const maturityBars = [
  { label: "Accuracy & Precision", value: 92 },
  { label: "Robustness & OOD Detection", value: 85 },
  { label: "Fairness & Bias Mitigation", value: 80 },
  { label: "Inference Latency p95 < 200ms", value: 95 },
  { label: "Cost Efficiency ($/1K tokens)", value: 88 },
  { label: "Explainability & Interpretability", value: 78 },
];

const trendTones: Record<string, string> = {
  HOT: "bg-red-500",
  NEW: "bg-brand-600",
  RISING: "bg-sky-500",
};

const trends = [
  {
    badge: "HOT",
    title: "Agentic AI & Autonomous Pipelines:",
    text: "Gartner projects that 33% of enterprise software will embed agentic AI by 2025 — models that plan, reason, and act across multi-step tasks without human intervention. PolarisAI Platform is building native agent orchestration into the inference layer.",
  },
  {
    badge: "NEW",
    title: "Multimodal Foundation Models:",
    text: "Text, image, audio, and code understanding converging into single models is redefining platform requirements. GPT-4o, Gemini 1.5, and Claude 4.6 set the standard — our platform now supports multimodal fine-tuning adapters for vision-language tasks.",
  },
  {
    badge: "RISING",
    title: "RAG at Scale:",
    text: "A 2024 Databricks survey found 68% of production GenAI apps use RAG. Our embeddings workbench is purpose-built to optimize retrieval quality — chunk sizing, re-ranking, hybrid search — for enterprise RAG architectures.",
  },
  {
    badge: "HOT",
    title: "On-Premise & Sovereign AI:",
    text: "The EU AI Act, India's DPDP Act, and APAC regulations are driving demand for private deployments. IDC forecasts the on-premise AI market at $38B by 2027. Our SLM inference engine is purpose-designed for air-gapped and private cloud environments.",
  },
  {
    badge: "NEW",
    title: "Parameter-Efficient Fine-Tuning (PEFT):",
    text: "LoRA and QLoRA allow adaptation of 70B+ models by updating only 0.1% of parameters — reducing fine-tuning cost by 95%. PolarisAI's fine-tuning module supports all major PEFT strategies natively, with automated hyperparameter search.",
  },
  {
    badge: "RISING",
    title: "AI Observability & MLOps:",
    text: "The 2024 State of MLOps report found mature observability cuts model drift detection time by 3.8× and reduces incidents by 55%. PolarisAI embeds drift monitoring, lineage tracking, and A/B gating as first-class platform features.",
  },
];

const facts = [
  "85% of AI projects never reach production — a unified platform cuts that failure rate by more than half.",
  "A fine-tuned 7B model with LoRA matches GPT-3.5 on domain tasks at less than 1% of the compute cost.",
  "INT4 quantization reduces a model's memory footprint by 8× with less than 2% accuracy loss on most NLP benchmarks.",
  "68% of production GenAI applications use Retrieval-Augmented Generation (RAG) to ground responses in enterprise knowledge — Databricks, 2024.",
  "Microsoft's Phi-3 Mini (3.8B parameters) outperforms models 10× its size on reasoning benchmarks — smarter training beats bigger models.",
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        icon={Layers}
        title="PolarisAI Platform"
        badges={["v2.0", "Enterprise"]}
        subtitle="Build, optimize & deploy Small Language Models that run on desktops, laptops & mobile devices."
        description="Post-trained · Quantized · Distilled · Pruned · Memory & Compute Optimized"
        modules={heroModules}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-[15px] leading-relaxed text-slate-600">
            <p>
              The AI platform market is undergoing its most significant
              transformation in a decade. According to Gartner, global AI
              software revenues are projected to exceed{" "}
              <strong className="font-semibold text-slate-900">
                $297 billion by 2027
              </strong>
              , while IDC estimates that more than{" "}
              <strong className="font-semibold text-slate-900">
                75% of enterprise applications
              </strong>{" "}
              will leverage AI capabilities by 2026. A McKinsey Global Survey
              found that{" "}
              <strong className="font-semibold text-slate-900">
                65% of organizations
              </strong>{" "}
              now regularly use generative AI in at least one business function
              — nearly double the figure reported in 2023. Yet despite soaring
              adoption, a staggering{" "}
              <strong className="font-semibold text-slate-900">
                85% of AI projects never reach production
              </strong>{" "}
              (VentureBeat), largely due to fragmented tooling, poor data
              pipelines, and the absence of a unified end-to-end development
              infrastructure.
            </p>
            <p>
              The{" "}
              <strong className="font-semibold text-slate-900">
                PolarisAI Platform
              </strong>{" "}
              is purpose-built to do exactly that —{" "}
              <strong className="font-semibold text-slate-900">
                Recompose, Optimize &amp; Deploy Small Language Models that run
                on desktops, laptops &amp; mobile devices.
              </strong>{" "}
              Every module in the platform serves one mission: take a model from
              raw data all the way to a lean, production-ready SLM that fits in
              your existing infrastructure, not just in a data centre. Our
              models are{" "}
              <strong className="font-semibold text-slate-900">
                Post-trained
              </strong>{" "}
              on curated domain corpora,{" "}
              <strong className="font-semibold text-slate-900">
                Precise-Quantized&trade;
              </strong>{" "}
              to low precision for minimal memory footprint,{" "}
              <strong className="font-semibold text-slate-900">
                Intelligence-Recovered&trade;
              </strong>{" "}
              from larger teachers for maximum accuracy-per-parameter,{" "}
              <strong className="font-semibold text-slate-900">
                Precise-Trimmed&trade;
              </strong>{" "}
              to strip redundant weights, and fully{" "}
              <strong className="font-semibold text-slate-900">
                Memory &amp; Compute Optimized
              </strong>{" "}
              for real-world edge and on-premise deployment — without
              sacrificing the quality and intelligence your product demands.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Unified Workflow"
            title="End-to-End Small Language Models Enablement Pipeline"
            description="A unified pipeline is the difference between a prototype and a production AI product. PolarisAI Platform orchestrates every stage seamlessly — from raw data to real-time intelligent responses — eliminating the integration overhead that kills most AI initiatives before they deliver value."
          />
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
              {pipelineSteps.map(({ Icon, title, sub }) => (
                <div key={title} className="text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-blue text-white shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-xs font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Modules"
            title="PolarisAI Platform Capabilities"
            description="Every module in the PolarisAI Platform is purpose-built for a specific stage of the AI/ML lifecycle. Together they form a cohesive, end-to-end environment where data scientists, ML engineers, and product teams work from a single, integrated infrastructure — eliminating context-switching, reducing error-prone hand-offs, and accelerating time-to-production by an average of 2.4× (McKinsey, 2024)."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {capabilities.map(({ Icon, title, body }) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border-l-4 border-y border-r border-l-brand-400 border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-l-brand-600 hover:shadow-xl"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality Gates"
            title="Model Evaluation & Scoring"
          />
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Selecting a model for production is a multi-dimensional decision
                that cannot be reduced to a single benchmark score. A 2024
                MIT/Stanford joint study found that{" "}
                <strong className="font-semibold text-slate-900">
                  organizations with systematic evaluation frameworks reduce
                  post-deployment failures by 64%
                </strong>
                . The PolarisAI Model Scoring workbench assesses every candidate
                across five dimensions:{" "}
                <em>
                  accuracy, robustness to distribution shift, fairness across
                  demographic cohorts, inference latency (p50/p95/p99), and cost
                  per 1K tokens
                </em>
                . Side-by-side comparison reports are generated automatically for
                any combination of open-source translating raw metrics into
                business-impact scores that CXOs can act on without deep ML
                expertise.
              </p>
              <p>
                Supported evaluation frameworks include{" "}
                <strong className="font-semibold text-slate-900">
                  HELM, MMLU
                </strong>
                , and domain-specific harnesses for legal (LegalBench), medical
                (MedQA), and financial (FinBench) text. Human-in-the-loop
                evaluation workflows route edge cases to subject-matter experts,
                with inter-annotator disagreement rates automatically flagged to
                trigger targeted retraining. No model ships to production until
                it passes all configured quality gates.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-base font-bold text-slate-900">
                Platform Capability Maturity
              </h3>
              <div className="mt-6 space-y-5">
                {maturityBars.map((bar) => (
                  <div key={bar.label}>
                    <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-slate-700">
                      <span>{bar.label}</span>
                      <span className="font-semibold text-brand-600">
                        {bar.value}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-blue"
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] italic text-slate-400">
                Benchmark ratings across 50+ enterprise AI deployments, 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-brand-400 sm:text-2xl">
            2026 AI Platform Trends Shaping Our Roadmap
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-12 md:grid-cols-2">
            {trends.map((trend, i) => (
              <div
                key={trend.title}
                className={`flex items-start gap-3 py-5 ${
                  i >= trends.length - 2 ? "border-b-0" : "border-b border-white/10"
                }`}
              >
                <span
                  className={`mt-0.5 shrink-0 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${trendTones[trend.badge]}`}
                >
                  {trend.badge}
                </span>
                <p className="text-sm leading-relaxed text-slate-300">
                  <strong className="font-semibold text-white">
                    {trend.title}
                  </strong>{" "}
                  {trend.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get Started"
            title="Ready to Build on PolarisAI Platform?"
            description="The gap between an AI idea and a production AI product is not a technology gap — it is an infrastructure gap. PolarisAI Platform eliminates it. Whether you need to post-train a domain model, fine-tune an open-source LLM, quantize for edge deployment, or add production observability — we have the tooling, the expertise, and the track record to get you there faster and with greater confidence."
          />
        </div>
      </section>

      <FactCarousel facts={facts} />
    </>
  );
}
