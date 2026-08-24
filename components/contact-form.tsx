"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-200";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(SITE.contactEndpoint, {
        method: "POST",
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {status === "success" && (
        <p className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          Thanks for contacting us. We will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          There was an error sending your message. Please try again.
        </p>
      )}

      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-slate-700">
          Name
        </label>
        <input id="cf-name" name="name" type="text" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input id="cf-email" name="email" type="email" required className={inputClasses} />
      </div>
      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
          Phone
        </label>
        <input id="cf-phone" name="phone" type="tel" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="cf-comment" className="mb-1.5 block text-sm font-medium text-slate-700">
          Comment
        </label>
        <textarea id="cf-comment" name="comment" rows={6} required className={inputClasses} />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-blue px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              Sending
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Submit
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
