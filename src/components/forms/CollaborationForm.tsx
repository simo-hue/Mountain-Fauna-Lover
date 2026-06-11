"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Link } from "@/i18n/navigation";
import {
  collaborationTypes,
  contactSchema,
  type ContactInput,
} from "@/lib/validations";
import { cn } from "@/lib/utils";

type SubmissionState = "idle" | "success" | "error" | "notConfigured";

export function CollaborationForm() {
  const t = useTranslations("collaboration.form");
  const [submission, setSubmission] = useState<SubmissionState>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
      privacy: false,
      website: "",
    },
  });

  const errorText = (message?: string) =>
    message ? t(`validation.${message}`) : undefined;

  const onSubmit = async (data: ContactInput) => {
    setSubmission("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setSubmission(
          result.error === "notConfigured" ? "notConfigured" : "error",
        );
        return;
      }

      setSubmission("success");
      reset();
    } catch {
      setSubmission("error");
    }
  };

  const inputClass =
    "focus-ring w-full rounded-xl border border-white/12 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/22 hover:border-white/20 focus:border-ice/55";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[1.8rem] border border-white/10 bg-[#080808] p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label={t("name")}
          error={errorText(errors.name?.message)}
          required
        >
          <input
            {...register("name")}
            className={inputClass}
            placeholder={t("namePlaceholder")}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field
          label={t("email")}
          error={errorText(errors.email?.message)}
          required
        >
          <input
            {...register("email")}
            className={inputClass}
            placeholder={t("emailPlaceholder")}
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
        <Field
          label={t("organization")}
          error={errorText(errors.organization?.message)}
        >
          <input
            {...register("organization")}
            className={inputClass}
            placeholder={t("organizationPlaceholder")}
            autoComplete="organization"
            aria-invalid={Boolean(errors.organization)}
          />
        </Field>
        <Field
          label={t("type")}
          error={errorText(errors.collaborationType?.message)}
        >
          <select
            {...register("collaborationType", {
              setValueAs: (value) => (value === "" ? undefined : value),
            })}
            className={cn(inputClass, "appearance-none text-white/70")}
            defaultValue=""
          >
            <option value="" className="bg-[#080808]">
              {t("typePlaceholder")}
            </option>
            {collaborationTypes.map((type) => (
              <option key={type} value={type} className="bg-[#080808]">
                {t(`types.${type}`)}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label={t("message")}
        error={errorText(errors.message?.message)}
        required
        className="mt-6"
      >
        <textarea
          {...register("message")}
          className={cn(inputClass, "min-h-40 resize-y")}
          placeholder={t("messagePlaceholder")}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">{t("website")}</label>
        <input
          id="website"
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-6 text-white/45">
          <input
            {...register("privacy")}
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-white"
            aria-invalid={Boolean(errors.privacy)}
          />
          <span>
            {t("privacyPrefix")}{" "}
            <Link
              href="/privacy"
              className="focus-ring rounded-sm text-white underline underline-offset-4"
            >
              {t("privacyLink")}
            </Link>
            .
          </span>
        </label>
        {errors.privacy?.message && (
          <p className="mt-2 text-xs text-red-300" role="alert">
            {errorText(errors.privacy.message)}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[0.66rem] font-semibold tracking-[0.17em] text-black uppercase transition hover:bg-white/82 disabled:cursor-wait disabled:opacity-60"
        >
          {isSubmitting ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : submission === "success" ? (
            <Check className="size-4" />
          ) : (
            <ArrowRight className="size-4" />
          )}
          {isSubmitting ? t("sending") : t("submit")}
        </button>
        <p className="max-w-sm text-xs leading-5 text-white/30">
          {t("responseTime")}
        </p>
      </div>

      {submission !== "idle" && (
        <div
          className={cn(
            "mt-6 rounded-xl border px-4 py-3 text-sm leading-6",
            submission === "success"
              ? "border-ice/25 bg-ice/5 text-ice"
              : "border-red-300/20 bg-red-300/5 text-red-200",
          )}
          role="status"
        >
          {t(`status.${submission}`)}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  required,
  className,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 flex items-center gap-1 text-[0.62rem] font-medium tracking-[0.15em] text-white/52 uppercase">
        {label}
        {required && <span aria-hidden="true">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-2 block text-xs text-red-300" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
