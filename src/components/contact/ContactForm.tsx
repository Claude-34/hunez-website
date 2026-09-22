"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { helpOptions } from "@/lib/contact-schema";
import { Button } from "@/components/ui/Button";

const packageLabels: Record<string, string> = {
  start: "Net Zero Starter Package",
  grow: "Carbon Reduction Package",
  transform: "Sustainability Partnership",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package") ?? "";
  const intentParam = searchParams.get("intent") ?? "";

  const defaultHelpWith =
    intentParam === "consultation"
      ? "Free Consultation"
      : packageParam
        ? "Packages & Pricing"
        : "";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="package" value={packageParam} />
      <input type="hidden" name="intent" value={intentParam} />

      {packageParam && packageLabels[packageParam] && (
        <p className="rounded-md bg-forest/10 px-4 py-3 text-sm text-forest">
          Enquiring about: <strong>{packageLabels[packageParam]}</strong>
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-olive/30 px-4 py-2 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-charcoal"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 w-full rounded-md border border-olive/30 px-4 py-2 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-olive/30 px-4 py-2 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
            Telephone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-md border border-olive/30 px-4 py-2 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
          />
        </div>
      </div>

      <div>
        <label htmlFor="helpWith" className="block text-sm font-medium text-charcoal">
          What would you like help with? *
        </label>
        <select
          id="helpWith"
          name="helpWith"
          required
          defaultValue={defaultHelpWith}
          className="mt-1 w-full rounded-md border border-olive/30 px-4 py-2 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
        >
          <option value="">Please select...</option>
          {helpOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-olive/30 px-4 py-2 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
        />
      </div>

      {status === "success" && (
        <p className="rounded-md bg-forest/10 px-4 py-3 text-sm text-forest">
          Thank you for your enquiry. We will be in touch shortly.
        </p>
      )}

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
