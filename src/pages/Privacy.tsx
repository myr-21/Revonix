import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 max-w-3xl mx-auto px-6 text-left">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-secondary/60 dark:text-white/60 hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <h1 className="font-display font-extrabold text-3xl md:text-4xl text-secondary dark:text-white tracking-tight mb-6">
        Privacy Policy
      </h1>
      
      <div className="flex flex-col gap-6 text-sm text-secondary/70 dark:text-white/70 leading-relaxed">
        <p>Last Updated: July 17, 2026</p>
        
        <section className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-secondary dark:text-white">1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us through forms, including your full name, email address, phone number, company name, application sizing details, and resumes when applying for careers or contacting sales.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-secondary dark:text-white">2. How We Use Information</h3>
          <p>
            We use the information collected to reply to sales requests, evaluate job candidates, dispatch email alerts (simulated or real), and optimize user experience across our digital offerings.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-secondary dark:text-white">3. Information Sharing</h3>
          <p>
            We do not sell or lease your personal information to third parties. We only share details with authorized technicians, logistics partners, or certified developers working on behalf of Revonix Technologies.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-secondary dark:text-white">4. Security</h3>
          <p>
            We employ modern safeguards to secure your details. However, please note that no transmission of data over the internet is completely error-free or fully secure.
          </p>
        </section>
      </div>
    </div>
  );
};
export default Privacy;
