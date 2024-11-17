import React from 'react';
import { motion } from 'framer-motion';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
  return (
    <div className="relative h-64 md:h-96 overflow-hidden">
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gray-100" />
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-full flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className={`section-title mb-2 ${image ? 'text-white' : 'text-black'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg ${image ? 'text-gray-200' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default PageHeader;