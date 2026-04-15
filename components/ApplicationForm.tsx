"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { applicationSchema, type ApplicationInput } from "@/lib/validations";

const MAX_BYTES = 5 * 1024 * 1024;
const ACCEPTED = [".pdf", ".doc", ".docx"];

export type ApplicationFormHandle = {
  setPosition: (title: string) => void;
  scrollIntoView: () => void;
};

export const ApplicationForm = forwardRef<
  ApplicationFormHandle,
  { positions: string[] }
>(function ApplicationForm({ positions }, ref) {
  const t = useTranslations("form");
  const thx = useTranslations("thankYou");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ApplicationInput>({ resolver: zodResolver(applicationSchema) });

  useImperativeHandle(ref, () => ({
    setPosition: (title: string) => setValue("position", title),
    scrollIntoView: () => sectionRef.current?.scrollIntoView({ behavior: "smooth" }),
  }));

  const onSubmit = async (data: ApplicationInput) => {
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setFileError("Resume required");
      return;
    }
    if (file.size > MAX_BYTES) {
      setFileError("Max 5MB");
      return;
    }
    setFileError(null);
    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, String(v ?? "")));
      fd.append("resume", file);
      await fetch("/api/application", { method: "POST", body: fd });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div ref={sectionRef} className="rounded-md bg-dark-surface/40 p-6 md:p-10">
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
              {thx("application")}
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
              <Field label={t("email")} error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email")}
                  className="input"
                  placeholder="—"
                />
              </Field>
              <Field label={t("phone")} error={errors.phone?.message}>
                <input {...register("phone")} className="input" placeholder="+60" />
              </Field>
              <Field label="Position" error={errors.position?.message}>
                <select {...register("position")} className="input">
                  <option value="">—</option>
                  {positions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field
              label="LinkedIn / Portfolio URL (optional)"
              error={errors.portfolioUrl?.message}
            >
              <input
                {...register("portfolioUrl")}
                className="input"
                placeholder="https://"
              />
            </Field>
            <Field label="Cover Letter" error={errors.coverLetter?.message}>
              <textarea
                {...register("coverLetter")}
                rows={5}
                className="input resize-none"
                placeholder="Tell us why you're interested."
              />
            </Field>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Resume (PDF / DOC / DOCX · max 5MB)
              </span>
              <label className="group flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-dark-border bg-dark-surface px-4 py-4 transition-colors hover:border-accent">
                <Upload size={18} className="text-accent" />
                <span className="flex-1 truncate text-sm text-offwhite">
                  {fileName ?? "Click to upload"}
                </span>
                <input
                  ref={fileRef}
                  type="file"
                  accept={ACCEPTED.join(",")}
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setFileName(f?.name ?? null);
                    setFileError(null);
                  }}
                  className="hidden"
                />
              </label>
              {fileError && (
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [-6, 6, -6, 0] }}
                  className="font-mono text-xs text-red-400"
                >
                  {fileError}
                </motion.span>
              )}
            </div>

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
});

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
