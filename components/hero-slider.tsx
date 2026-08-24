"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = {
  image: string;
  alt: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

const AUTOPLAY_MS = 7000;

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slides.length]);

  const resetTimer = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setIndex((cur) => (cur + 1) % slides.length),
      AUTOPLAY_MS
    );
    goTo(i);
  };

  return (
    <section
      aria-label="Highlights"
      className="relative h-[440px] overflow-hidden bg-slate-900 sm:h-[520px]"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-slate-900/10" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
              <div className="max-w-2xl">
                <h2 className="text-balance text-2xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl">
                  {slide.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                  {slide.description}
                </p>
                <Link
                  href={slide.cta.href}
                  tabIndex={i === index ? 0 : -1}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-400 px-6 py-2.5 text-sm font-bold text-slate-900 shadow-lg transition-colors hover:bg-brand-300"
                >
                  {slide.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => resetTimer(index - 1)}
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => resetTimer(index + 1)}
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => resetTimer(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-brand-400" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
