import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { Mail, Phone, MapPin, Clock, AlertCircle, CheckCircle2, Send } from 'lucide-react';

const contactSchema = zod.object({
  fullName: zod.string().min(2, 'Name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email'),
  phone: zod.string().min(10, 'Please enter a valid phone number'),
  subject: zod.string().min(3, 'Subject is required'),
  reason: zod.string().min(1, 'Please select your inquiry type'),
  message: zod.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = zod.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulated Resend Email API dispatch
    console.log('Sending message via simulated Resend Email API:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccessMessage('Thank you! Your inquiry was successfully dispatched. A systems engineer will respond shortly.');
    reset();
    setTimeout(() => setSuccessMessage(''), 6000);
  };

  return (
    <div className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 text-left">
      
      {/* Header */}
      <div className="flex flex-col gap-4 mb-12">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">Contact Us</span>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-secondary dark:text-white tracking-tight">
          Let's Design Your Energy Future
        </h1>
        <p className="text-secondary/70 dark:text-white/70 max-w-3xl text-sm md:text-base leading-relaxed">
          Have an EV fleet to charge, a custom battery size to engineer, or a solar grid to configure? Reach out directly, or complete our contact forms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact details & Google Map */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#0F172A]/15 border border-[#0F172A]/5 dark:border-white/5 flex flex-col gap-6">
            <h3 className="font-display font-bold text-xl text-secondary dark:text-white">Headquarters Information</h3>
            
            <div className="flex flex-col gap-4 text-sm text-secondary/70 dark:text-white/70">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  E D Cell, JSPM's Jayawantrao Sawant College of Engineering, Survey No. 58, Indrayani Nagar, Handewadi Road, Hadapsar, Pune - 411028, Maharashtra, India.
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+917758852746" className="hover:text-white transition-colors">+91 77588-52746</a>
              </div>
              <div className="flex items-center gap-3.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:revonixtech@gmail.com" className="hover:text-white transition-colors">revonixtech@gmail.com</a>
              </div>
              <div className="flex items-center gap-3.5">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Mon-Fri 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#0F172A]/5 dark:border-white/5 bg-secondary/5">
            <iframe 
              title="Revonix Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1892.125251051138!2d73.937002!3d18.472309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e924900934ff%3A0xcb6e060c9d1b953a!2sJSPM&#39;s%20JAYAWANTRAO%20SAWANT%20COLLEGE%20OF%20COMMERCE%20AND%20SCIENCE%20HADAPSAR!5e0!3m2!1sen!2sin!4v1784302160501!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Column: Contact form validation */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-[#0F172A]/15 border border-[#0F172A]/5 dark:border-white/5 flex flex-col gap-6">
          <h3 className="font-display font-bold text-2xl text-secondary dark:text-white">Send Us A Message</h3>
          
          {successMessage ? (
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-1 text-xs">
                <label className="font-semibold text-secondary dark:text-white/80">Full Name</label>
                <input
                  type="text"
                  {...register('fullName')}
                  className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm text-secondary dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.fullName && <span className="text-[10px] text-red-500 mt-0.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.fullName.message}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-semibold text-secondary dark:text-white/80">Email Address</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm text-secondary dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-0.5">{errors.email.message}</span>}
                </div>
                
                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-semibold text-secondary dark:text-white/80">Phone Number</label>
                  <input
                    type="text"
                    {...register('phone')}
                    className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm text-secondary dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 mt-0.5">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-semibold text-secondary dark:text-white/80">Subject</label>
                  <input
                    type="text"
                    {...register('subject')}
                    className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm text-secondary dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.subject && <span className="text-[10px] text-red-500 mt-0.5">{errors.subject.message}</span>}
                </div>

                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-semibold text-secondary dark:text-white/80">Why are you contacting us?</label>
                  <select
                    {...register('reason')}
                    className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm text-secondary dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select an option</option>
                    <option value="inquiry">Inquiry about battery / charging solutions</option>
                    <option value="career">Career - I want to join your team</option>
                  </select>
                  {errors.reason && <span className="text-[10px] text-red-500 mt-0.5">{errors.reason.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="font-semibold text-secondary dark:text-white/80">Message Description</label>
                <textarea
                  rows={5}
                  {...register('message')}
                  className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm text-secondary dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.message && <span className="text-[10px] text-red-500 mt-0.5">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3.5 bg-primary hover:bg-primary/95 text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-all disabled:opacity-50 mt-2 cursor-pointer"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default Contact;
