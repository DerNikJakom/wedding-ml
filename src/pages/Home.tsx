import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const calculateTimeLeft = () => {
  const weddingDate = new Date("2025-02-08T15:00:00").getTime();
  const now = new Date().getTime();
  const difference = weddingDate - now;

  let timeLeft = {
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
      minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
      seconds: Math.floor((difference / 1000) % 60).toString(),
    };
  }

  return timeLeft;
};

const photos = [
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Paar im Garrrten",
  },
  {
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Paar bei Sonnenuntergang",
  },
  {
    url: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Spazierendes Paar",
  },
  {
    url: "https://images.unsplash.com/photo-1587271339318-2e5fb02e25b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Ring Detail",
  },
  {
    url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Lachendes Paar",
  },
  {
    url: "https://images.unsplash.com/photo-1580824456266-c578f254eb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Paar am See",
  },
];

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
          backgroundImage:
            'url("https://lh3.googleusercontent.com/d/1IIgj3Mb_uURNRqBCu063t0fpmwVqLcBn")',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white z-10"
        >
          <h1 className="font-serif text-6xl md:text-8xl mb-4">
            Laura & Michael
          </h1>
          <p className="text-xl md:text-2xl mb-8">Wir heiraten</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>08. Februar 2025</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Wiesbaden</span>
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
            <h2 className="font-serif text-4xl mb-6 text-white">
              Willkommen zu unserer Hochzeit
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Wir freuen uns darauf, unseren besonderen Tag mit unserer Familie
              und unseren Freunden zu feiern. Begleitet uns zu einem Abend
              voller Liebe, Lachen und unvergesslicher Momente.
            </p>
            <Link to="/rsvp" className="btn-primary inline-block">
              Jetzt zusagen
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-black/30 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { label: "Tage", value: timeLeft.days },
              { label: "Stunden", value: timeLeft.hours },
              { label: "Minuten", value: timeLeft.minutes },
              { label: "Sekunden", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-serif text-4xl mb-2 text-white">
                  {item.value}
                </div>
                <div className="text-gray-300">{item.label}</div>
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
            <h2 className="font-serif text-4xl mb-6 text-white">
              Unsere Momente
            </h2>
            <p className="text-gray-300">
              Einige besondere Augenblicke aus unserer gemeinsamen Zeit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden group"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                    {photo.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
