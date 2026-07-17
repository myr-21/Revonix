import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { MapPin, Clock, IndianRupee, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { CAREERS } from '../lib/mockData';
import type { Career } from '../lib/mockData';

// Application Schema
const applicationSchema = zod.object({
  fullName: zod.string().min(2, 'Name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email'),
  phone: zod.string().min(10, 'Please enter a valid phone number'),
  experienceYears: zod.string().regex(/^\d+$/, 'Please enter a number'),
  resumeName: zod.string().min(1, 'Please select your Resume file'),
  coverLetter: zod.string().optional(),
});

type ApplicationFormValues = zod.infer<typeof applicationSchema>;

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);
  const [applySuccess, setApplySuccess] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, watch, reset } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
  });

  const resumeName = watch('resumeName');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('resumeName', file.name, { shouldValidate: true });
    }
  };

  const onSubmit = async (data: ApplicationFormValues) => {
    console.log(`Submitting application for ${selectedJob?.title}:`, data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setApplySuccess(`Your application for "${selectedJob?.title}" was submitted successfully. Our HR team will reach out via email.`);
    reset();
    setTimeout(() => {
      setApplySuccess('');
      setSelectedJob(null);
    }, 5000);
  };

  return (
    <div className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 text-left">
      
      {/* Header */}
      <div className="flex flex-col gap-4 mb-12">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">Careers</span>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-secondary dark:text-white tracking-tight">
          Join the Clean Energy Revolution
        </h1>
        <p className="text-secondary/70 dark:text-white/70 max-w-3xl text-sm md:text-base leading-relaxed">
          We are looking for passionate embedded engineers, battery chemical technologists, and operations managers eager to shape the future of smart battery storage.
        </p>
      </div>

      {/* Grid of open positions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Jobs list column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h2 className="font-display font-bold text-2xl text-secondary dark:text-white">Open Positions</h2>
          
          <div className="flex flex-col gap-4">
            {CAREERS.map((job) => (
              <div 
                key={job.id}
                className={`p-6 rounded-2xl bg-white dark:bg-[#0F172A]/15 border transition-all text-left flex flex-col sm:flex-row justify-between sm:items-center gap-4 ${
                  selectedJob?.id === job.id 
                    ? 'border-primary ring-2 ring-primary/10' 
                    : 'border-secondary/5 dark:border-white/5 hover:border-secondary/15 dark:hover:border-white/15'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-primary">
                    <span>{job.department}</span>
                    <span className="w-1 h-1 bg-secondary/30 dark:bg-white/30 rounded-full" />
                    <span>{job.type}</span>
                  </div>
                  <h3 className="font-bold text-lg text-secondary dark:text-white">{job.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-secondary/50 dark:text-white/40">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Exp: {job.experience}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setApplySuccess('');
                  }}
                  className="px-5 py-2.5 bg-primary hover:bg-primary/95 text-white text-xs font-semibold rounded-lg flex items-center gap-1 self-start sm:self-auto hover:scale-[1.02] transition-all"
                >
                  View Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Detail & Apply Panel */}
        <div className="lg:col-span-1">
          {selectedJob ? (
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A]/15 border border-[#0F172A]/5 dark:border-white/5 flex flex-col gap-6 relative">
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-secondary/40 dark:text-white/40 hover:text-secondary dark:hover:text-white"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-left flex flex-col gap-2">
                <span className="text-[9px] uppercase font-bold text-primary tracking-wider">{selectedJob.department}</span>
                <h3 className="font-display font-bold text-xl text-secondary dark:text-white pr-6">{selectedJob.title}</h3>
                <div className="flex flex-col gap-1.5 text-xs text-secondary/60 dark:text-white/60 mt-1">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" />{selectedJob.location}</span>
                  {selectedJob.salaryRange && (
                    <span className="flex items-center gap-1.5"><IndianRupee className="w-4 h-4 text-primary" />{selectedJob.salaryRange}</span>
                  )}
                </div>
              </div>

              <div className="border-t border-[#0F172A]/5 dark:border-white/5 pt-4">
                <h4 className="text-xs font-bold text-secondary dark:text-white uppercase tracking-wider">Job Summary</h4>
                <p className="text-xs text-secondary/60 dark:text-white/60 leading-relaxed mt-1.5">{selectedJob.summary}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-secondary dark:text-white uppercase tracking-wider">Requirements</h4>
                <ul className="text-xs text-secondary/70 dark:text-white/70 flex flex-col gap-1.5 mt-2">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-primary rounded-full shrink-0 mt-1.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form Submission */}
              <div className="border-t border-[#0F172A]/5 dark:border-white/5 pt-4">
                <h4 className="text-sm font-bold text-secondary dark:text-white uppercase tracking-wider mb-3">Apply Online</h4>
                
                {applySuccess ? (
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{applySuccess}</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 text-left">
                    
                    <div className="flex flex-col gap-0.5 text-[10px]">
                      <label className="font-semibold text-secondary dark:text-white/80">Full Name</label>
                      <input 
                        type="text" 
                        {...register('fullName')}
                        className="bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded px-2.5 py-2 text-xs text-secondary dark:text-white focus:outline-none focus:border-primary"
                      />
                      {errors.fullName && <span className="text-[9px] text-red-500 mt-0.5">{errors.fullName.message}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-0.5 text-[10px]">
                        <label className="font-semibold text-secondary dark:text-white/80">Email</label>
                        <input 
                          type="email" 
                          {...register('email')}
                          className="bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded px-2.5 py-2 text-xs text-secondary dark:text-white focus:outline-none focus:border-primary"
                        />
                        {errors.email && <span className="text-[9px] text-red-500 mt-0.5">{errors.email.message}</span>}
                      </div>

                      <div className="flex flex-col gap-0.5 text-[10px]">
                        <label className="font-semibold text-secondary dark:text-white/80">Phone</label>
                        <input 
                          type="text" 
                          {...register('phone')}
                          className="bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded px-2.5 py-2 text-xs text-secondary dark:text-white focus:outline-none focus:border-primary"
                        />
                        {errors.phone && <span className="text-[9px] text-red-500 mt-0.5">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-0.5 text-[10px]">
                      <label className="font-semibold text-secondary dark:text-white/80">Years of Experience</label>
                      <input 
                        type="text" 
                        {...register('experienceYears')}
                        className="bg-secondary/5 dark:bg-white/5 border border-secondary/15 dark:border-white/15 rounded px-2.5 py-2 text-xs text-secondary dark:text-white focus:outline-none focus:border-primary"
                      />
                      {errors.experienceYears && <span className="text-[9px] text-red-500 mt-0.5">{errors.experienceYears.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1 text-[10px]">
                      <label className="font-semibold text-secondary dark:text-white/80">Resume File (PDF/DOC)</label>
                      <div className="relative">
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload-resume"
                        />
                        <label 
                          htmlFor="file-upload-resume"
                          className="w-full bg-secondary/5 dark:bg-white/5 border border-dashed border-secondary/25 dark:border-white/25 rounded px-3 py-2.5 text-xs text-center cursor-pointer block hover:bg-secondary/10 dark:hover:bg-white/10 transition-colors"
                        >
                          {resumeName ? `Attached: ${resumeName}` : 'Select Resume File'}
                        </label>
                      </div>
                      {errors.resumeName && <span className="text-[9px] text-red-500 mt-0.5">{errors.resumeName.message}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 bg-primary hover:bg-primary/95 text-white font-semibold text-xs rounded hover:scale-[1.01] transition-all disabled:opacity-50 mt-1"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Send Application'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-secondary/5 dark:bg-[#0F172A]/10 border border-[#0F172A]/5 dark:border-white/5 text-center text-secondary/60 dark:text-white/50">
              <p className="text-sm">Select an open position to view job specs and apply online.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Careers;
