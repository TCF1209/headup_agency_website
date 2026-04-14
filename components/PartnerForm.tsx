"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { partnerSchema, type PartnerInput } from "@/lib/validations";

export function PartnerForm() {
  const t = useTranslations("form");
  const thx = useTranslations("thankYou");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PartnerInput>({ resolver: zodResolver(partnerSchema) });

  const onSubmit = async (data: PartnerInput) => {
    setSubmitting(true);
    try {
      await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-md bg-dark-surface/40 p-6 md:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thanks"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-dark-primary"
            >
              <Check size={28} />
            </motion.div>
            <p className="font-display text-2xl font-bold text-white">
              {thx("inquiry")}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label={t("fullName")} error={errors.fullName?.message}>
                <input {...register("fullName")} className="input" placeholder="—" />
              </Field>
              <Field label="Company Name" error={errors.companyName?.message}>
                <input {...register("companyName")} className="input" placeholder="—" />
              </Field>
              <Field label={t("email")} error={errors.email?.message}>
                <input type="email" {...register("email")} className="input" placeholder="—" />
              </Field>
              <Field label={t("phone")} error={errors.phone?.message}>
                <input {...register("phone")} className="input" placeholder="+60" />
              </Field>
              <Field label="Business Type" error={errors.businessType?.message}>
                <input
                  {...register("businessType")}
                  className="input"
                  placeholder="e.g. POS reseller, consultancy"
                />
              </Field>
            </div>
            <Field label="Why partner with us?" error={errors.reason?.message}>
              <textarea
                {...register("reason")}
                rows={5}
                className="input resize-none"
                placeholder="Tell us about your business and the partnership you have in mind."
              />
            </Field>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-dark-primary transition-all hover:scale-[1.01] hover:bg-accent-muted disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {t("sending")}
                </>
              ) : (
                t("submit")
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </span>
      {children}
      {error && (
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: [-6, 6, -6, 0] }}
          className="font-mono text-xs text-red-400"
        >
          {error}
        </motion.span>
      )}
    </label>
  );
}
