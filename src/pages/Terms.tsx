import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 max-w-3xl mx-auto px-6 text-left">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-secondary/60 dark:text-white/60 hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      
      <h1 className="font-display font-extrabold text-3xl md:text-4xl text-secondary dark:text-white tracking-tight mb-6">
        Terms of Service
      </h1>
      
      <div className="flex flex-col gap-6 text-sm text-secondary/70 dark:text-white/70 leading-relaxed">
        <p>Last Updated: July 17, 2026</p>
        
        <section className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-secondary dark:text-white">1. Agreement to Terms</h3>
          <p>
            By accessing or using the Revonix Technologies website, you agree to be bound by these Terms of Service. If you do not agree, please do not access or use our services.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-secondary dark:text-white">2. Product Specifications & Custom Quotes</h3>
          <p>
            The product listings, datasheets, and specifications on this website represent standard and custom configurations manufactured by Revonix Technologies. Final hardware limits, voltages, dimensions, pricing, and lifecycles will be explicitly defined in written commercial agreements and engineering blueprints.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-secondary dark:text-white">3. Intellectual Property</h3>
          <p>
            All content on this website, including designs, text, graphics, logos, images, icons, and software, is the property of Revonix Technologies Pvt Ltd and is protected by Indian and international copyright and trademark laws.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h3 className="font-bold text-lg text-secondary dark:text-white">4. Limitation of Liability</h3>
          <p>
            Revonix Technologies shall not be liable for any indirect, incidental, or consequential damages resulting from the use of, or inability to use, our web materials or products, unless specified in hardware warranties.
          </p>
        </section>
      </div>
    </div>
  );
};
export default Terms;
