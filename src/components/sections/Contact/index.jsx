import React, { useState, useCallback } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import { sendMessage } from '@/services/api';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const onSubmit = useCallback(async (formData) => {
    setIsSubmitting(true);
    try {
      await sendMessage({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'op809034@gmail.com',
      href: 'mailto:op809034@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+91 8090349760',
      href: 'tel:+918090349760'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      label: 'Social',
      value: '@Om167',
      href: 'https://twitter.com/Om167'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white/50 dark:bg-accent-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-accent-600 dark:text-accent-300">
            Have a question or want to work together?
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white/80 dark:bg-accent-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 text-accent-600 hover:text-primary-600 dark:text-accent-300 dark:hover:text-primary-400 transition-colors"
                >
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    <p className="text-sm font-medium">{info.label}</p>
                    <p className="text-base">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/80 dark:bg-accent-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-6">
              Send a Message
            </h3>
            <ContactForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
            {submitStatus.message && (
              <div className={`mt-4 p-4 rounded-md ${
                submitStatus.success 
                  ? 'bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200' 
                  : 'bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}