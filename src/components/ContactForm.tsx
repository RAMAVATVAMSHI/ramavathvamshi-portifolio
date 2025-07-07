
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { sanitizeInput, isValidEmail, isValidLength, RateLimiter } from '@/utils/security';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const rateLimiter = RateLimiter.getInstance();

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    // Validate name
    if (!isValidLength(formData.name, 100)) {
      errors.name = 'Name is required and must be less than 100 characters';
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate subject
    if (!isValidLength(formData.subject, 200)) {
      errors.subject = 'Subject is required and must be less than 200 characters';
    }

    // Validate message
    if (!isValidLength(formData.message, 2000)) {
      errors.message = 'Message is required and must be less than 2000 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limiting
    const userIdentifier = formData.email || 'anonymous';
    if (!rateLimiter.canAttempt(userIdentifier)) {
      const remainingTime = rateLimiter.getRemainingTime(userIdentifier);
      toast({
        title: "Rate Limit Exceeded",
        description: `Please wait ${remainingTime} seconds before sending another message.`,
        variant: "destructive",
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize all inputs before sending
      const sanitizedData = {
        from_name: sanitizeInput(formData.name),
        from_email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
        to_name: 'Ramavath Vamshi',
      };

      const result = await emailjs.send(
        'service_936o2n9',
        'template_69hh5rx',
        sanitizedData,
        '93iVW6c2eOlv_h7zf'
      );

      console.log('Email sent successfully:', result);
      
      // Record successful attempt
      rateLimiter.recordAttempt(userIdentifier);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setValidationErrors({});
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Record failed attempt
      rateLimiter.recordAttempt(userIdentifier);
      
      toast({
        title: "Message Failed to Send",
        description: "Unable to send your message at this time. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Send Message
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                validationErrors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'
              }`}
              placeholder="Enter your name"
              required
              disabled={isSubmitting}
              maxLength={100}
            />
            {validationErrors.name && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                validationErrors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'
              }`}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
            )}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
              validationErrors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'
            }`}
            placeholder="What's this about?"
            required
            disabled={isSubmitting}
            maxLength={200}
          />
          {validationErrors.subject && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.subject}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
              validationErrors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-600'
            }`}
            placeholder="Tell me about your project..."
            required
            disabled={isSubmitting}
            maxLength={2000}
          />
          {validationErrors.message && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <Send className={`h-5 w-5 ${isSubmitting ? 'animate-spin' : ''}`} />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
