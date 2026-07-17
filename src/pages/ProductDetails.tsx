import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { 
  ArrowLeft, FileText, CheckCircle2, 
  Send, AlertCircle 
} from 'lucide-react';
import { PRODUCTS } from '../lib/mockData';

// Form schema
const inquirySchema = zod.object({
  fullName: zod.string().min(2, 'Name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email'),
  company: zod.string().min(1, 'Company is required'),
  quantity: zod.string().regex(/^\d+$/, 'Please enter a valid number'),
  message: zod.string().min(10, 'Message must specify your application requirements'),
});

type InquiryFormValues = zod.infer<typeof inquirySchema>;

export const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const [activeImage, setActiveImage] = useState(product.gallery[0] || product.thumbnail);
  const [successMsg, setSuccessMsg] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { quantity: '10' }
  });

  const onSubmit = async (data: InquiryFormValues) => {
    // Simulate API dispatch (e.g., to Resend or backend)
    console.log('Dispatching Sales Inquiry:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccessMsg('Your inquiry has been logged successfully. A systems engineer will contact you shortly.');
    reset();
    setTimeout(() => setSuccessMsg(''), 6000);
  };

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    // Simulate PDF file download trigger
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', `${product.id}-datasheet.pdf`);
    console.log(`Downloading brochure for ${product.name}`);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  // Find related products
  const relatedProducts = PRODUCTS.filter((p) => product.relatedProductIds.includes(p.id));

  return (
    <div className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 text-left">
      
      {/* Back to catalog */}
      <Link 
        to="/products" 
        className="inline-flex items-center gap-2 text-sm text-secondary/60 dark:text-white/60 hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Products Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Left: Gallery Column */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#0F172A]/5 dark:border-white/5 bg-secondary/5 relative">
            <img 
              src={activeImage} 
              alt={product.name} 
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`aspect-video rounded-xl overflow-hidden border transition-all ${
                  activeImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-secondary/10 dark:border-white/10 hover:opacity-80'
                }`}
              >
                <img src={img} alt={`Gallery index ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info & Inquiry Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xs bg-primary/10 text-primary font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                {product.category}
              </span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                product.status === 'Available' ? 'bg-primary/15 text-primary' : 'bg-orange-500/15 text-orange-500'
              }`}>
                {product.status}
              </span>
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-secondary dark:text-white tracking-tight mt-2">
              {product.name}
            </h1>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-secondary/70 dark:text-white/70">
            {product.detailedDesc}
          </p>

          {/* Key Features Bullet points */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-sm text-secondary dark:text-white uppercase tracking-wider">Product Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-secondary/70 dark:text-white/70">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brochure Downloads */}
          <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-b border-[#0F172A]/5 dark:border-white/5 py-4">
            <button
              onClick={handleDownloadBrochure}
              className="w-full sm:w-auto px-6 py-3 bg-secondary/5 dark:bg-white/5 hover:bg-secondary/10 dark:hover:bg-white/10 border border-secondary/15 dark:border-white/15 text-secondary dark:text-white font-semibold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4 text-primary" />
              Download PDF Brochure
            </button>
            {downloadSuccess && (
              <span className="text-xs text-primary font-semibold animate-pulse">
                Mock Brochure Downloaded!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Specifications & Inquiry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Specs Table */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="font-display font-bold text-2xl text-secondary dark:text-white tracking-tight">Technical Specifications</h2>
          <div className="border border-[#0F172A]/10 dark:border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-secondary/5 dark:bg-white/5 border-b border-[#0F172A]/10 dark:border-white/10">
                  <th className="px-6 py-3 font-semibold text-secondary dark:text-white">Parameter</th>
                  <th className="px-6 py-3 font-semibold text-secondary dark:text-white">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0F172A]/5 dark:divide-white/5 text-secondary/70 dark:text-white/70">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <tr key={key} className="hover:bg-secondary/5 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-3.5 font-medium">{key}</td>
                    <td className="px-6 py-3.5">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-5 p-8 rounded-2xl bg-white dark:bg-[#0F172A]/15 border border-[#0F172A]/5 dark:border-white/5 flex flex-col gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-secondary dark:text-white">Request Quotation / Demo</h3>
            <p className="text-xs text-secondary/60 dark:text-white/60 mt-1">Specify your capacity constraints. Our sales engineer will revert with pricing details.</p>
          </div>

          {successMsg ? (
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-start gap-2.5 text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-xs">
                <label className="font-semibold text-secondary dark:text-white/80">Full Name</label>
                <input
                  type="text"
                  {...register('fullName')}
                  className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.fullName && <span className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5"><AlertCircle className="w-3 h-3" />{errors.fullName.message}</span>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-semibold text-secondary dark:text-white/80">Email Address</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-0.5">{errors.email.message}</span>}
                </div>
                
                <div className="flex flex-col gap-1 text-xs">
                  <label className="font-semibold text-secondary dark:text-white/80">Company</label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {errors.company && <span className="text-[10px] text-red-500 mt-0.5">{errors.company.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="font-semibold text-secondary dark:text-white/80">Estimated Volume (Units)</label>
                <input
                  type="text"
                  {...register('quantity')}
                  className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.quantity && <span className="text-[10px] text-red-500 mt-0.5">{errors.quantity.message}</span>}
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="font-semibold text-secondary dark:text-white/80">Application Details</label>
                <textarea
                  rows={4}
                  {...register('message')}
                  placeholder="e.g., Continuous current, peak draws, mechanical constraints..."
                  className="w-full bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.message && <span className="text-[10px] text-red-500 mt-0.5">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary hover:bg-primary/95 text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 hover:scale-[1.01] transition-all disabled:opacity-50 mt-2"
              >
                {isSubmitting ? 'Logging Inquiry...' : 'Submit Request'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#0F172A]/5 dark:border-white/5 pt-12">
          <h3 className="font-display font-bold text-2xl text-secondary dark:text-white tracking-tight mb-8">Related Systems</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedProducts.map((p) => (
              <div 
                key={p.id}
                className="p-5 rounded-2xl bg-white dark:bg-[#0F172A]/10 border border-[#0F172A]/5 dark:border-white/5 flex gap-4 items-center"
              >
                <img src={p.thumbnail} alt={p.name} className="w-24 h-24 object-cover rounded-xl bg-secondary/10 shrink-0" />
                <div className="flex-grow flex flex-col justify-between h-full py-1 text-left">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-primary tracking-wider">{p.category}</span>
                    <h4 className="font-bold text-base text-secondary dark:text-white mt-0.5">{p.name}</h4>
                  </div>
                  <Link 
                    to={`/products/${p.id}`}
                    className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline mt-2"
                  >
                    Configure Specs
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
export default ProductDetails;
