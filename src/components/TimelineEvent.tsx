import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

type TimelineEventProps = {
  time: string;
  title: string;
  description: string;
  index: number;
};

const TimelineEvent = ({ time, title, description, index }: TimelineEventProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4 md:gap-8"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
          <Clock className="w-6 h-6" />
        </div>
        <div className="flex-1 w-px bg-white/10 my-2" />
      </div>
      <div className="pb-8">
        <div className="text-lg font-medium mb-1 text-white">{time}</div>
        <h3 className="text-xl font-serif mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineEvent;