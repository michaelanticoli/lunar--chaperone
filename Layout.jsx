import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ children, className = "", id }) => {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`min-h-screen py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto flex flex-col justify-center ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const Divider = () => (
  <div className="w-full flex justify-center py-12">
    <div className="w-px h-24 bg-ink-muted/30"></div>
  </div>
);

export const JournalInput = ({ placeholder }) => (
  <input 
    type="text" 
    placeholder={placeholder}
    className="journal-line placeholder:text-ink-muted/40 placeholder:italic"
  />
);

export const JournalArea = ({ lines = 4 }) => (
  <div className="space-y-6 mt-6">
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="w-full border-b-[1.5px] border-dotted border-ink-muted/60 h-8"></div>
    ))}
  </div>
);