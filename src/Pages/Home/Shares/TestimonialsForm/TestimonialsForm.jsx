
import React, { useState } from 'react';
import axios from 'axios';
import { Send, User, Briefcase, MessageSquareQuote } from 'lucide-react';

export default function TestimonialsForm() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    quote: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // form submit handler & axios post request

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        // Axios request-e second parameter e direct JavaScript Object pathaben
        const response = await axios.post('http://localhost:5000/testimonials', formData);

        // Axios response success kina check kora (200 or 201 status)
        if (response.status === 200 || response.status === 201) {
          console.log('Submitted Testimonial:', response.data);
          setSubmitted(true);
          setFormData({ name: '', role: '', quote: '' }); // Reset Form
        }
      } catch (error) {
        console.error('Error submitting testimonial:', error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <section className="bg-[#212529] min-h-screen text-gray-200 py-16 px-4 flex items-center justify-center">
      <div className="max-w-xl w-full bg-[#2c3036] rounded-2xl p-8 shadow-2xl border border-gray-800/40">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
          Share Your Feedback
        </h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          We value your experience! Leave a testimonial for the community.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-sm text-center">
            Thank you! Your testimonial has been submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#212529] border border-gray-700/60 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
              />
            </div>
          </div>

          {/* Role Field */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
              Role / Position
            </label>
            <div className="relative">
              <Briefcase className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                placeholder="CEO, TechCorp / Managing Director"
                className="w-full bg-[#212529] border border-gray-700/60 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
              />
            </div>
          </div>

          {/* Quote Field */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
              Your Review / Quote
            </label>
            <div className="relative">
              <MessageSquareQuote className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
              <textarea
                name="quote"
                required
                rows={4}
                value={formData.quote}
                onChange={handleChange}
                placeholder="Write your testimonial here..."
                className="w-full bg-[#212529] border border-gray-700/60 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors text-sm resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Submit Testimonial</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}