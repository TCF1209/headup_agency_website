"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { buildWhatsAppUrl, bookingMessage } from "@/lib/whatsapp";

const TIME_SLOTS: { value: BookingInput["time"]; label: string }[] = [
  { value: "morning", label: "Morning · 9–12" },
  { value: "afternoon", label: "Afternoon · 12–5" },
  { value: "evening", label: "Evening · 5–7" },
];

export function BookingForm() {
  const t = useTranslations("form");
  const thx = useTranslations("thankYou");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { time: "morning" },
  });

  const onSubmit = async (data: BookingInput) => {
    setSubmitting(true);
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      window.open(
        buildWhatsAppUrl(
          bookingMessage({
            name: data.fullName,
            businessName: data.businessName,
            service: data.service,
            date: data.date,
            time: data.time,
          }),
        ),
        "_blank",
      );
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col items-center justify-center rounded-md bg-dark-surface p-12 text-center"
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
          {thx("booking")}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
          <input
            {...register("phone")}
            className="input"
            placeholder="+60"
          />
        </Field>
        <Field label={t("businessName")} error={errors.businessName?.message}>
          <input {...register("businessName")} className="input" placeholder="—" />
        </Field>
        <Field label="Business Type" error={errors.businessType?.message}>
          <select {...register("businessType")} className="input">
            <option value="">—</option>
            <option value="restaurant">Restaurant</option>
            <option value="cafe">Café</option>
            <option value="hawker">Hawker</option>
            <option value="cloud_kitchen">Cloud Kitchen</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Service" error={errors.service?.message}>
          <select {...register("service")} className="input">
            <option value="">—</option>
            <option value="grabfood_foodpanda">GrabFood & Foodpanda</option>
            <option value="pos">POS System</option>
            <option value="both">Both</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-[auto_1fr]">
        <Field label="Preferred Date" error={errors.date?.message}>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <div className="rounded-md border border-dark-border bg-dark-surface p-3">
                <DayPicker
                  mode="single"
                  selected={field.value ? new Date(field.value) : undefined}
                  onSelect={(d) =>
                    field.onChange(d ? d.toISOString().slice(0, 10) : "")
                  }
                  disabled={{ before: new Date() }}
                  className="rdp-custom"
                />
              </div>
            )}
          />
        </Field>

        <Field label="Preferred Time" error={errors.time?.message}>
          <Controller
            control={control}
            name="time"
            render={({ field }) => (
              <div className="grid grid-cols-1 gap-2">
                {TIME_SLOTS.map((slot) => {
                  const active = field.value === slot.value;
                  return (
                    <button
                      key={slot.value}
                      type="button"
                      onClick={() => field.onChange(slot.value)}
                      className={`rounded-md border px-4 py-4 text-left font-mono text-sm uppercase tracking-wider transition-colors ${
                        active
                          ? "border-accent bg-accent text-dark-primary"
                          : "border-dark-border bg-dark-surface text-offwhite hover:border-accent hover:text-accent"
                      }`}
                    >
                      {slot.label}
                    </button>
                  );
                })}
              </div>
            )}
          />
        </Field>
      </div>

      <Field label="Additional Notes">
        <textarea
          {...register("notes")}
          rows={4}
          className="input resize-none"
          placeholder="—"
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-dark-primary transition-all hover:scale-[1.01] hover:bg-accent-muted active:scale-[0.99] disabled:opacity-60"
      >
        <AnimatePresence mode="wait">
          {submitting ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="inline-flex items-center gap-2"
            >
              <Loader2 size={16} className="animate-spin" />
              {t("sending")}
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {t("submit")}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
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
