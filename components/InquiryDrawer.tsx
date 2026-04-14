"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { inquirySchema, type InquiryInput } from "@/lib/validations";
import { buildWhatsAppUrl, inquiryMessage } from "@/lib/whatsapp";

type InquiryContextValue = {
  open: () => void;
  close: () => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <InquiryContext.Provider value={{ open, close }}>
      {children}
      <InquiryDrawer isOpen={isOpen} onClose={close} />
    </InquiryContext.Provider>
  );
}

function InquiryDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("form");
  const cta = useTranslations("cta");
  const thx = useTranslations("thankYou");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryInput>({ resolver: zodResolver(inquirySchema) });

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 300);
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: InquiryInput) => {
    setSubmitting(true);
    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      window.open(
        buildWhatsAppUrl(
          inquiryMessage({
            name: data.name,
            service: data.service,
            message: data.message,
          }),
        ),
        "_blank",
      );
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto bg-dark-primary"
          >
            <div className="flex items-center justify-between border-b border-dark-border px-6 py-5">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {"// INQUIRY"}
              </p>
              <button
                aria-label="Close"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center text-white hover:text-accent"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative flex-1 px-6 py-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="thanks"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full flex-col items-center justify-center text-center"
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
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <Field label={t("fullName")} error={errors.name?.message}>
                      <input
                        {...register("name")}
                        className="input"
                        placeholder="—"
                      />
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
                      <input
                        {...register("phone")}
                        className="input"
                        placeholder="+60"
                      />
                    </Field>
                    <Field label="Service" error={errors.service?.message}>
                      <select {...register("service")} className="input">
                        <option value="">—</option>
                        <option value="grabfood_foodpanda">
                          GrabFood & Foodpanda
                        </option>
                        <option value="pos">POS System</option>
                        <option value="both">Both</option>
                        <option value="other">Other</option>
                      </select>
                    </Field>
                    <Field label={t("message")} error={errors.message?.message}>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="input resize-none"
                        placeholder="—"
                      />
                    </Field>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-dark-primary transition-all hover:bg-accent-muted disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          {t("sending")}
                        </>
                      ) : (
                        cta("sendInquiry")
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
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
