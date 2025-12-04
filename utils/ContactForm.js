"use client";
import React,{ useRef } from "react";
import { useForm,ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Send,CheckCircle,AlertCircle } from "lucide-react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [state,handleSubmit] = useForm("xqkvqkdo");
  const formRef = useRef(null);

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    }
  },[state.succeeded]);

  const inputClasses = "w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500";
  const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2";

  return (
    <motion.div
      initial={{ opacity: 0,x: 20 }}
      whileInView={{ opacity: 1,x: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
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
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
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
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? (
            "Sending..."
          ) : (
            <>
              Send Message <Send size={18} />
            </>
          )}
        </motion.button>
      </form>
      <ToastContainer position="bottom-right" theme="dark" />
    </motion.div>
  );
}
