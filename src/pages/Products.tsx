import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Grid, List, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../lib/mockData';

export const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');
  const [isGridView, setIsGridView] = useState(true);

  // Categories list
  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'batteries', label: 'Lithium Batteries' },
    { value: 'charging', label: 'Smart Chargers' },
    { value: 'bms', label: 'BMS Electronics' },
    { value: 'solar', label: 'Solar Systems' },
  ];

  // Filtering & Sorting logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.shortDesc.toLowerCase().includes(term) ||
          p.techStack.some((t) => t.toLowerCase().includes(term))
      );
    }

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Sorting
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'featured') {
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [searchTerm, activeCategory, sortBy]);

  return (
    <div className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 text-left">
      
      {/* Header */}
      <div className="flex flex-col gap-4 mb-12">
        <span className="text-primary font-bold text-xs uppercase tracking-widest">Product Catalog</span>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl text-secondary dark:text-white tracking-tight">
          Enterprise Systems & Hardware
        </h1>
        <p className="text-secondary/70 dark:text-white/70 max-w-3xl text-sm md:text-base leading-relaxed">
          High-performance, safety-certified hardware engineered in-house. Search our models, filter by chemistry, or download details below.
        </p>
      </div>

      {/* Catalog Filters Bar */}
      <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white/50 dark:bg-[#020617]/30 border border-[#0F172A]/10 dark:border-white/15 shadow-md backdrop-blur-sm mb-12">
        
        {/* Search Input with inline tag support */}
        <div className="relative w-full flex items-center bg-white dark:bg-[#020617]/50 border border-[#0F172A]/10 dark:border-white/15 rounded-xl shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all overflow-hidden">
          <Search className="absolute left-4 w-5 h-5 text-secondary/40 dark:text-white/30" />
          
          <div className="pl-12 pr-4 py-3.5 flex items-center gap-2 flex-grow">
            {activeCategory !== 'all' && (
              <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider shrink-0 flex items-center gap-1.5 border border-primary/20">
                {categories.find(c => c.value === activeCategory)?.label}
                <button 
                  onClick={() => setActiveCategory('all')} 
                  className="hover:text-primary/80 font-bold text-xs cursor-pointer"
                  aria-label="Clear filter"
                >
                  ×
                </button>
              </span>
            )}
            
            <input
              type="text"
              placeholder="Search BMS Electronics, Lithium packs, smart chargers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-0 p-0 text-sm text-secondary dark:text-white focus:ring-0 focus:outline-none placeholder-secondary/40 dark:placeholder-white/30"
            />
          </div>
        </div>

        {/* Categories & Sorting Row */}
        <div className="flex flex-wrap gap-4 items-center justify-between border-t border-[#0F172A]/5 dark:border-white/5 pt-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white dark:bg-[#020617]/40 border-[#0F172A]/10 dark:border-white/15 text-secondary/75 dark:text-white/75 hover:bg-secondary/5 dark:hover:bg-white/5 hover:border-secondary/20 dark:hover:border-white/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-secondary/50 dark:text-white/40" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white dark:bg-[#020617]/40 border border-[#0F172A]/10 dark:border-white/15 rounded-lg px-3 py-2 text-xs text-secondary dark:text-white focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="default">Sort: Default</option>
                <option value="featured">Featured First</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 border border-[#0F172A]/10 dark:border-white/15 rounded-lg p-1 bg-white dark:bg-[#020617]/40">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-1.5 rounded transition-all cursor-pointer ${isGridView ? 'bg-primary text-white' : 'text-secondary/60 dark:text-white/60'}`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-1.5 rounded transition-all cursor-pointer ${!isGridView ? 'bg-primary text-white' : 'text-secondary/60 dark:text-white/60'}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Display */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 border border-[#0F172A]/10 dark:border-white/10 rounded-2xl">
          <p className="text-secondary/60 dark:text-white/50">No products match your search/filter parameters.</p>
        </div>
      ) : isGridView ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white dark:bg-[#0F172A]/20 border border-[#0F172A]/5 dark:border-white/5 overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="aspect-video w-full relative overflow-hidden bg-secondary/10">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                {product.isFeatured && (
                  <span className="absolute top-4 left-4 bg-primary text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-display font-bold text-lg text-secondary dark:text-white">{product.name}</h3>
                  <p className="text-xs text-secondary/60 dark:text-white/60 leading-relaxed line-clamp-2">{product.shortDesc}</p>
                </div>
                <div className="border-t border-[#0F172A]/5 dark:border-white/5 pt-4 flex items-center justify-between">
                  <span className="text-xs text-secondary/40 dark:text-white/40 font-semibold">{product.status}</span>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-xs font-bold text-primary flex items-center gap-1 hover:underline"
                  >
                    Configure Specs
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#0F172A]/20 border border-[#0F172A]/5 dark:border-white/5 flex flex-col md:flex-row gap-6 items-center hover:shadow-lg transition-all duration-300 text-left"
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full md:w-48 aspect-video md:aspect-square object-cover rounded-xl bg-secondary/10 shrink-0"
              />
              <div className="flex-grow flex flex-col justify-between gap-4 w-full">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider">{product.category}</span>
                    {product.isFeatured && (
                      <span className="bg-primary/10 text-primary text-[8px] uppercase font-bold px-1.5 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-xl text-secondary dark:text-white mt-1">{product.name}</h3>
                  <p className="text-sm text-secondary/60 dark:text-white/60 leading-relaxed mt-2">{product.shortDesc}</p>
                </div>
                <div className="flex items-center justify-between border-t border-[#0F172A]/5 dark:border-white/5 pt-4">
                  <span className="text-xs text-secondary/40 dark:text-white/40">{product.status}</span>
                  <Link
                    to={`/products/${product.id}`}
                    className="px-4 py-2 bg-primary hover:bg-primary/95 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-all"
                  >
                    View Details
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Products;
