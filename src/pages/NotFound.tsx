import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="relative pt-40 pb-20 max-w-xl mx-auto px-6 text-center flex flex-col items-center gap-6">
      <div className="p-4 rounded-full bg-red-500/10 text-red-500 w-fit">
        <AlertCircle className="w-12 h-12" />
      </div>
      <h1 className="font-display font-extrabold text-4xl text-secondary dark:text-white tracking-tight">
        Page Not Found
      </h1>
      <p className="text-sm text-secondary/60 dark:text-white/60 leading-relaxed">
        The requested URL was not found on this server. It may have been relocated, or the address entered is incorrect.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-primary hover:bg-primary/95 text-white text-xs uppercase tracking-wider font-bold rounded-lg flex items-center gap-2 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Return Home
      </Link>
    </div>
  );
};
export default NotFound;
