"use client";

import { useRef } from "react";
import { Rocket, Lightbulb, Handshake } from "lucide-react";
import { ApplicationForm, type ApplicationFormHandle } from "./ApplicationForm";
import { JobCard, type Job } from "./JobCard";
import { TeamGallery } from "./TeamGallery";

// TODO: replace with real openings from Sanity
const JOBS: Job[] = [
  {
    title: "Digital Marketing Executive",
    department: "Marketing",
    type: "Full-time",
    location: "Kuala Lumpur / Hybrid",
    summary:
      "Own end-to-end GrabFood/Foodpanda campaigns for a portfolio of F&B clients. Data-driven, hands-on, fast.",
  },
  {
    title: "Sales Consultant (F&B)",
    department: "Sales",
    type: "Full-time",
    location: "Klang Valley · Field",
    summary:
      "Build relationships with restaurant operators. Consultative selling, not cold-call churn. Base + performance.",
  },
  {
    title: "POS Technical Support",
    department: "Operations",
    type: "Full-time",
    location: "Kuala Lumpur",
    summary:
      "Install, train, and support POS deployments. Problem solver, calm under kitchen-hour pressure.",
  },
];

// TODO: replace with real company values
const VALUES = [
  { icon: Rocket, title: "Move Fast", description: "We ship weekly. Decisions beat meetings." },
  { icon: Lightbulb, title: "Think Sharp", description: "Numbers before opinions. Specifics before slogans." },
  { icon: Handshake, title: "Grow Together", description: "Client wins are team wins. No credit theatre." },
];

export function CareersInteractive() {
  const formRef = useRef<ApplicationFormHandle>(null);

  const handleApply = (title: string) => {
    formRef.current?.setPosition(title);
    formRef.current?.scrollIntoView();
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          {"// HOW WE WORK"}
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="border-l-2 border-accent pl-6">
              <v.icon size={28} className="mb-4 text-accent" />
              <h3 className="font-display text-2xl font-bold text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-offwhite">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TeamGallery />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          {"// OPEN ROLES"}
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1] tracking-tight text-white md:text-6xl">
          What we&rsquo;re hiring for.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job, i) => (
            <JobCard key={job.title} job={job} index={i} onApply={handleApply} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          {"// APPLY"}
        </p>
        <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1] tracking-tight text-white md:text-6xl">
          Tell us about yourself.
        </h2>
        <div className="mt-12">
          <ApplicationForm ref={formRef} positions={JOBS.map((j) => j.title)} />
        </div>
      </section>
    </>
  );
}
