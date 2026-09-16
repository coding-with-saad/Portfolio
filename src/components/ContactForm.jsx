import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      console.error(
        "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file — see README for setup steps."
      );
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("sent");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="mono-tag text-[var(--color-muted)]">
          Name
        </label>
        <input
          id="name"
          name="from_name"
          type="text"
          required
          className="bg-[var(--color-panel)] border hairline px-4 py-3 text-[var(--color-text)] outline-none focus-visible:border-[var(--color-signal)]"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="mono-tag text-[var(--color-muted)]">
          Email
        </label>
        <input
          id="email"
          name="reply_to"
          type="email"
          required
          className="bg-[var(--color-panel)] border hairline px-4 py-3 text-[var(--color-text)] outline-none focus-visible:border-[var(--color-signal)]"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="mono-tag text-[var(--color-muted)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="bg-[var(--color-panel)] border hairline px-4 py-3 text-[var(--color-text)] outline-none focus-visible:border-[var(--color-signal)] resize-none"
          placeholder="What would you like to talk about?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mono-tag self-start border border-[var(--color-signal)] text-[var(--color-signal)] px-6 py-3 hover:bg-[var(--color-signal)] hover:text-[var(--color-base)] transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "sent" && (
        <p className="mono-tag text-[var(--color-data)]">
          Message sent — I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="mono-tag text-[var(--color-signal)]">
          Something went wrong sending that. Please email me directly at{" "}
          <a href="mailto:saadkhawar169@gmail.com" className="underline">
            saadkhawar169@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
