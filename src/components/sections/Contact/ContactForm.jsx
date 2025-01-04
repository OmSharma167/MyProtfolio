import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { contactValidation } from './validation';

export default function ContactForm({ onSubmit, isSubmitting }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleFormSubmit = (data) => {
    const formData = {
      name: data.name?.trim(),
      email: data.email?.trim().toLowerCase(),
      message: data.message?.trim()
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-accent-700 dark:text-accent-300">
          Name
        </label>
        <input
          id="name"
          {...register('name', contactValidation.name)}
          type="text"
          className="mt-1 block w-full rounded-md border-accent-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-accent-600 dark:bg-accent-800"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-accent-700 dark:text-accent-300">
          Email
        </label>
        <input
          id="email"
          {...register('email', contactValidation.email)}
          type="email"
          className="mt-1 block w-full rounded-md border-accent-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-accent-600 dark:bg-accent-800"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-accent-700 dark:text-accent-300">
          Message
        </label>
        <textarea
          id="message"
          {...register('message', contactValidation.message)}
          rows={4}
          className="mt-1 block w-full rounded-md border-accent-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-accent-600 dark:bg-accent-800"
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}