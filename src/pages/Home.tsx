import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

const calculateTimeLeft = () => {
  const weddingDate = new Date('2025-02-08T15:00:00').getTime();
  const now = new Date().getTime();
  const difference = weddingDate - now;

  let timeLeft = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
      minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
      seconds: Math.floor((difference / 1000) % 60).toString()
    };
  }

  return timeLeft;
};

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Paar im Garten',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'Paar bei Sonnenuntergang',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Spazierendes Paar',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1587271339318-2e5fb02e25b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    alt: 'Ring Detail',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Lachendes Paar',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1580824456266-c578f254eb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    alt: 'Paar am See',
    size: 'medium'
  },
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
};

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="h-screen-90 bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/d/1IIgj3Mb_uURNRqBCu063t0fpmwVqLcBn")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="font-serif text-6xl md:text-8xl mb-4 text-white">Laura & Michael</h1>
          <p className="text-xl md:text-2xl mb-8 text-white">Wir heiraten!</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-white" />
              <span className="text-white">08. Februar 2025</span>
            </div>
            <div className="hidden md:block text-white">•</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white">Wiesbaden</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl mb-6 text-content">Willkommen zu unserer Hochzeit</h2>
            <p className="text-content-secondary mb-8 leading-relaxed">
              Wir freuen uns darauf, unseren besonderen Tag mit unserer Familie und unseren Freunden zu feiern. 
              Begleitet uns zu einem Abend voller Liebe, Lachen und unvergesslicher Momente.
            </p>
            <Link to="/rsvp" className="btn-primary inline-block">
              Jetzt zusagen
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-black/5 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: 'Tage', value: timeLeft.days },
              { label: 'Stunden', value: timeLeft.hours },
              { label: 'Minuten', value: timeLeft.minutes },
              { label: 'Sekunden', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-serif text-4xl mb-2 text-content">{item.value}</div>
                <div className="text-content-secondary">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl mb-6 text-content">Unsere Momente</h2>
            <p className="text-content-secondary">Einige besondere Augenblicke aus unserer gemeinsamen Zeit</p>
          </motion.div>
          
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
                className={`mb-4 overflow-hidden ${
                  photo.size === 'large' ? 'h-[500px]' :
                  photo.size === 'medium' ? 'h-[400px]' :
                  'h-[300px]'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>
    </div>
  );
};

export default Home;