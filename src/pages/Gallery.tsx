import React from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import PageHeader from '../components/PageHeader';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Couple in garden',
  },
  {
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Couple at sunset',
  },
  {
    url: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Couple walking',
  },
  {
    url: 'https://images.unsplash.com/photo-1587271339318-2e5fb02e25b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Ring detail',
  },
  {
    url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Couple laughing',
  },
  {
    url: 'https://images.unsplash.com/photo-1580824456266-c578f254eb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Couple by the lake',
  },
  {
    url: 'https://images.unsplash.com/photo-1583939411023-14783179e581?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Couple in nature',
  },
  {
    url: 'https://images.unsplash.com/photo-1621517125625-13c9f89c63f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Couple dancing',
  },
  {
    url: 'https://images.unsplash.com/photo-1622495966027-e0173192c728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Couple silhouette',
  },
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

const Gallery = () => {
  return (
    <div>
      <PageHeader
        title="Photo Gallery"
        subtitle="Our engagement moments"
        image="https://images.unsplash.com/photo-1529634597503-139d3726fed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="relative group overflow-hidden bg-black">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="bg-black bg-opacity-50 text-white px-6 py-3 rounded-full"
                  >
                    View Photo
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600">
            Photos by{' '}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              Our Amazing Photographer
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;