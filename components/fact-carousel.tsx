"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

type Fact = {
  label?: string;
  text: string;
};

export default function FactCarousel({
  facts,
  label = "- Did You Know -",
}: {
  facts: (string | Fact)[];
  label?: string;
}) {
  const items: Fact[] = facts.map((f) =>
    typeof f === "string" ? { text: f } : f
  );
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section
      aria-label="Facts"
      className="relative overflow-hidden bg-gradient-to-r from-brand-600 via-brand-blue to-brand-purple py-16"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-white">
          <Quote className="h-6 w-6" />
        </div>
        <div className="relative min-h-[110px] sm:min-h-[90px]">
          {items.map((item, i) => (
            <blockquote
              key={item.text}
              aria-hidden={i !== index}
              className={`transition-opacity duration-500 ${
                i === index
                  ? "opacity-100 delay-150"
                  : "pointer-events-none absolute inset-0 opacity-0"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                {item.label ?? label}
              </p>
              <p className="mt-2 text-lg leading-relaxed text-white sm:text-xl">
                {item.text}
              </p>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.text}
              type="button"
              aria-label={`Show fact ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
