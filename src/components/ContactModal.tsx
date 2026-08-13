"use client";

import { FormEvent, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "./LanguageProvider";

export default function ContactModal({
  label,
  className = "",
  style,
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  function close() {
    if (!sending) {
      setOpen(false);
      setSent(false);
      setError(false);
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError(false);
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.get("nome") ?? "",
          email: form.get("email") ?? "",
          telefone: form.get("telefone") ?? "",
          empresa: form.get("empresa") ?? "",
          preferencia_contato: form.get("preferencia_contato") ?? "",
          motivo_contato: form.get("motivo_contato") ?? "",
          descricao: form.get("descricao") ?? "",
        }),
      });
      if (response.ok) setSent(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} style={style}>
        {label}
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="presentation" onMouseDown={close}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-(--theme-primary) p-6 text-(--theme-secondary) shadow-2xl md:p-8"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 id="contact-modal-title" className="text-2xl font-extrabold">{t.contactForm.title}</h2>
                <p className="mt-2 text-sm opacity-70">{t.contactForm.subtitle}</p>
              </div>
              <button type="button" onClick={close} aria-label={t.contactForm.close} className="text-2xl leading-none opacity-60 hover:opacity-100">×</button>
            </div>

            <div>
              {sent ? (
                <div className="rounded-xl bg-(--brand-verde)/15 p-5 text-center">
                  <p className="text-lg font-bold">{t.contactForm.successTitle}</p>
                  <p className="mt-2 text-sm opacity-75">{t.contactForm.successText}</p>
                  <button type="button" onClick={close} className="btn btn-verde mt-6">{t.contactForm.close}</button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <input name="nome" type="text" placeholder={t.contactForm.name} className="admin-input" />
                  <input name="email" type="text" placeholder={t.contactForm.email} className="admin-input" />
                  <input name="telefone" type="text" placeholder={t.contactForm.phone} className="admin-input" />
                  <input name="empresa" type="text" placeholder={t.contactForm.company} className="admin-input" />
                  <select name="preferencia_contato" defaultValue="" className="admin-input">
                    <option value="" disabled>{t.contactForm.preferredContact}</option>
                    <option value={t.contactForm.videoCall}>{t.contactForm.videoCall}</option>
                    <option value={t.contactForm.emailOption}>{t.contactForm.emailOption}</option>
                    <option value={t.contactForm.phoneOption}>{t.contactForm.phoneOption}</option>
                    <option value={t.contactForm.whatsapp}>{t.contactForm.whatsapp}</option>
                    <option value={t.contactForm.noPreference}>{t.contactForm.noPreference}</option>
                  </select>
                  <select name="motivo_contato" defaultValue="" className="admin-input">
                    <option value="" disabled>{t.contactForm.contactReason}</option>
                    {t.contactForm.reasons.map((reason) => <option key={reason} value={reason}>{reason}</option>)}
                  </select>
                  <textarea name="descricao" placeholder={t.contactForm.description} rows={5} className="admin-input resize-y" />
                  {error && <p className="text-sm text-red-600">{t.contactForm.error}</p>}
                  <button type="submit" disabled={sending} className="btn btn-verde w-full disabled:opacity-60">
                    {sending ? t.contactForm.sending : t.contactForm.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}