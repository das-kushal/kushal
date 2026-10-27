"use client";
import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqkvqkdo");
  const formRef = useRef(null);

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully! I'll get back to you soon.");
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  const inputClasses =
    "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/40 transition-all duration-200 text-gray-100 placeholder-gray-600 text-sm";
  const labelClasses = "block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2";

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl border border-white/8 bg-white/3 p-6 md:p-8 overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/8 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/8 rounded-full blur-2xl" />

      <h3 className="text-xl font-bold text-gray-100 mb-6">Send a Message</h3>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative">
        <div>
          <label htmlFor="name" className={labelClasses}>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            className={inputClasses}
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            className={inputClasses}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your message..."
            className={`${inputClasses} resize-none`}
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
        </div>

        <motion.button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3.5 px-6 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            <>Send Message <Send size={16} /></>
          )}
        </motion.button>
      </form>
      <ToastContainer position="bottom-right" theme="dark" />
    </motion.div>
  );
}
