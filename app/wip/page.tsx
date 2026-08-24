import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "Work In Progress",
  description:
    "We are still working on this page. Please visit again after sometime.",
};

export default function WipPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-blue text-white shadow-lg">
          <Hammer className="h-7 w-7" />
        </span>
        <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-900">
          Still working...
        </h1>
        <Image
          src="/images/stillworking.gif"
          alt="Still working animation"
          width={429}
          height={206}
          priority
          className="mx-auto mt-8 h-auto w-full max-w-sm rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
        />
        <p className="mt-8 text-sm leading-relaxed text-slate-600 sm:text-base">
          Please visit after sometime
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
