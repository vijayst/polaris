import type { Metadata } from "next";
import { Check, CreditCard, Zap } from "lucide-react";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple annual plans for the PolarisAI Labs platform — pick Basic, Standard, Advanced or Mighty and get started today.",
};

const plans = [
  {
    name: "Basic",
    price: "$15.00",
    period: "/ Year",
    featured: false,
    features: [
      "Responsive Design",
      "Bootstrap Design",
      "Unlimited Support",
      "Free Trial version",
      "HTML5 CSS3 jQuery",
    ],
  },
  {
    name: "Standard",
    price: "$20.00",
    period: "/ Year",
    featured: false,
    features: [
      "Responsive Design",
      "Bootstrap Design",
      "Unlimited Support",
      "Free Trial version",
      "HTML5 CSS3 jQuery",
    ],
  },
  {
    name: "Advanced",
    price: "$15.00",
    period: "/ Year",
    featured: true,
    features: [
      "Responsive Design",
      "Bootstrap Design",
      "Unlimited Support",
      "Free Trial version",
      "HTML5 CSS3 jQuery",
    ],
  },
  {
    name: "Mighty",
    price: "$15.00",
    period: "/ Year",
    featured: false,
    features: [
      "Responsive Design",
      "Bootstrap Design",
      "Unlimited Support",
      "Free Trial version",
      "HTML5 CSS3 jQuery",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        icon={CreditCard}
        title="Pricing"
        subtitle="Our best plans"
        description="Straightforward annual pricing — choose the plan that fits your team and upgrade anytime."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                  plan.featured
                    ? "ring-2 ring-brand-400 border-brand-200 hover:border-brand-300"
                    : "border-slate-200 hover:border-brand-200"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-blue px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                    Most Popular
                  </span>
                )}
                <h3 className="text-center text-lg font-bold text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-3 text-center">
                  <span className="bg-gradient-to-r from-brand-500 to-brand-blue bg-clip-text text-4xl font-bold text-transparent">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm font-medium text-slate-500">
                    {plan.period}
                  </span>
                </p>
                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                    plan.featured
                      ? "bg-gradient-to-r from-brand-500 to-brand-blue text-white shadow-md hover:opacity-90"
                      : "border border-slate-300 bg-white text-slate-900 hover:border-brand-400 hover:text-brand-600"
                  }`}
                >
                  Get Now
                  <Zap className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
