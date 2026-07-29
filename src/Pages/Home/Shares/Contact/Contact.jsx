import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
   <div className="min-h-screen montenegrin bg-[#111319] text-white flex items-center  justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-10">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Get In Touch
          </h1>
          <p className="text-gray-400">
            Feel free to reach out to me for any questions, project inquiries, or collaborations!
          </p>

          <div className="space-y-4 text-sm md:text-base text-gray-300">
            <div>
              <span className="text-gray-500 block">Location</span>
              <strong className="text-white">Chattogram, Bangladesh</strong>
            </div>

            <div>
              <span className="text-gray-500 block">Email</span>
              <a
                href="mailto:afranrazzak1984@gmail.com"
                className="text-blue-500 hover:underline"
              >
                afranrazzak1984@gmail.com
              </a>
            </div>

            <div>
              <span className="text-gray-500 block">Phone</span>
              <strong className="text-white">+88 01717663447</strong>
            </div>
          </div>
        </div>

       {/* Right Side: Contact Form */}
        <div className="bg-[#1a1d26] p-8 rounded-xl shadow-xl border border-gray-800">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="John Doe"
                className="w-full bg-[#111319] text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="john@example.com"
                className="w-full bg-[#111319] text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message here..."
                className="w-full bg-[#111319] text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E50914] hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm font-medium mt-3 text-gray-300">
                {status}
              </p>
            )}
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact