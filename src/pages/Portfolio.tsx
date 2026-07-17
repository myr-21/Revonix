import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../lib/mockData';
import { Calendar, User, Quote } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'Solar Storage', label: 'Solar Storage' },
    { value: 'Smart Charging', label: 'Smart Charging' }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 text-left">
      
      {/* Header */}
      <div className="flex flex-col gap-4 mb-12">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">Case Studies</span>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-secondary dark:text-white tracking-tight">
          Proven Deployments & Integrations
        </h1>
        <p className="text-secondary/70 dark:text-white/70 max-w-3xl text-sm md:text-base leading-relaxed">
          Explore our real-world implementations, measuring operational success, carbon offset metrics, and cost savings across various commercial properties.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex gap-2.5 mb-10 border-b border-[#0F172A]/5 dark:border-white/5 pb-4">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setSelectedFilter(f.value)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide border transition-all ${
              selectedFilter === f.value
                ? 'bg-primary border-primary text-white'
                : 'bg-secondary/5 dark:bg-white/5 border-secondary/10 dark:border-white/10 text-secondary/70 dark:text-white/70 hover:bg-secondary/10 dark:hover:bg-white/10'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Case studies list */}
      <div className="flex flex-col gap-16">
        {filteredProjects.map((project) => (
          <article 
            key={project.id} 
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-[#0F172A]/10 dark:border-white/10 pb-16 last:border-0"
          >
            
            {/* Visuals */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-secondary/10 border border-[#0F172A]/5 dark:border-white/5">
                <img 
                  src={project.gallery[0] || 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80'} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.slice(1, 3).map((img, idx) => (
                  <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-secondary/10 border border-[#0F172A]/5 dark:border-white/5">
                    <img src={img} alt={`${project.title} gallery ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <div>
                <span className="text-[10px] bg-primary/10 text-primary font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {project.category}
                </span>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-secondary dark:text-white mt-3">
                  {project.title}
                </h3>
              </div>

              {/* Client & Timeline Meta */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-secondary/50 dark:text-white/40">
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-primary" />Client: {project.client}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" />Timeline: {project.timeline}</span>
              </div>

              <p className="text-sm text-secondary/70 dark:text-white/70 leading-relaxed font-semibold">
                {project.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-secondary dark:text-white uppercase tracking-wider">The Challenge</span>
                  <p className="text-xs text-secondary/60 dark:text-white/60 leading-relaxed">{project.challenge}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-secondary dark:text-white uppercase tracking-wider">The Solution</span>
                  <p className="text-xs text-secondary/60 dark:text-white/60 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-xs font-bold text-secondary dark:text-white uppercase tracking-wider">Project Outcomes</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-secondary/70 dark:text-white/70">
                  {project.results.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 mt-1.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Feedback quote if exists */}
              {project.clientFeedback && (
                <div className="p-4 rounded-xl bg-secondary/5 dark:bg-white/5 border-l-4 border-primary mt-4 flex gap-3 text-left">
                  <Quote className="w-8 h-8 text-primary/30 shrink-0" />
                  <div>
                    <p className="text-xs text-secondary/70 dark:text-white/70 italic leading-relaxed">
                      "{project.clientFeedback.comment}"
                    </p>
                    <span className="block text-[10px] font-bold text-secondary dark:text-white mt-1.5">
                      — {project.clientFeedback.author}, {project.clientFeedback.role}
                    </span>
                  </div>
                </div>
              )}
            </div>

          </article>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
