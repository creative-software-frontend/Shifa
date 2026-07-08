import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import PageTransition from '../components/PageTransition';

// 1. Define the TypeScript interfaces for the form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

// 2. Define the Framer Motion animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const SendMessagePage: React.FC = () => {
  // 3. Initialize state for submission status
  const [submitted, setSubmitted] = useState<boolean>(false);

  // 4. Initialize state for form fields
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: 'Hotel Suite Investment', // default matching the first option
    message: '',
  });

  // 5. Handle input changes dynamically
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 6. Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform backend API requests or logging here
    console.log('Submitted Inquiry Data:', formData);

    // Show success screen
    setSubmitted(true);
  };

  return (
    <PageTransition id="send-message-page">
      {/* ── PREMIUM INQUIRY FORM ────────────────────────────────────────── */}
      <div className="py-16 pt-32 px-4 bg-white border-t border-sky-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-sky-50/50 rounded-3xl p-8 md:p-12 border border-sky-100 shadow-sm relative overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Soft decorative background shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-200/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-center font-black text-2xl md:text-3xl mb-2 text-neutral-900 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                SEND US A MESSAGE
              </h2>
              <p className="text-center text-gray-500 text-sm mb-10 max-w-lg mx-auto">
                Interested in investment plans or have general queries? Send a message and our consultant will get back to you shortly.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4 text-green-600">✓</div>
                  <h3 className="font-extrabold text-xl mb-2 text-neutral-900">Thank You!</h3>
                  <p className="text-gray-600 text-sm max-w-sm">
                    Your message has been submitted successfully. A Shifa Properties Ltd Investment Specialist will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'Hotel Suite Investment', message: '' });
                    }}
                    className="mt-6 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+880 1XXX XXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Subject selection */}
                    <div className="md:col-span-1 space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">I am Interested In</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%232563eb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat', backgroundSize: '16px' }}
                      >
                        <option value="Hotel Suite Investment">Hotel Suite Investment</option>
                        <option value="Padma Grand Hotel booking">Hotel Booking</option>
                        <option value="Land Purchases OCDL">Affordable Land Buying</option>
                        <option value="Careers">Careers & Placement</option>
                        <option value="General Query">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">Your Message</label>
                      <textarea
                        name="message"
                        required
                        rows={1}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-y min-h-[46px]"
                      />
                    </div>
                  </div>

                  {/* Submit Button styled exactly like image_eefa65.png */}
                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 hover:from-blue-950 hover:to-sky-600 text-white px-14 py-3.5 text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 rounded-full transform hover:scale-[1.01]"
                    >
                      <span>SEND INQUIRY</span>
                      <span className="text-sm font-light select-none">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SendMessagePage;