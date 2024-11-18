import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

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
    url: "https://i.imgur.com/8d7qYC3.jpeg",
    alt: "Rücken an Rücken sw",
    size: "large",
  },
  {
    url: "https://i.imgur.com/HEH8Sa7.jpeg",
    alt: "1",
    size: "small",
  },
  {
    url: "https://i.imgur.com/w0mk2lX.jpeg",
    alt: "2",
    size: "large",
  },
  {
    url: "https://i.imgur.com/rNoJCcG.jpeg",
    alt: "3",
    size: "small",
  },
  {
    url: "https://i.imgur.com/eegi6dJ.jpeg",
    alt: "4",
    size: "large",
  },
  {
    url: "https://i.imgur.com/9LDQhwX.jpeg",
    alt: "5",
    size: "medium",
  },
  {
    url: "https://i.imgur.com/1ZXXpKD.jpeg",
    alt: "6",
    size: "medium",
  },
  {
    url: "https://i.imgur.com/c1jtBEq.jpeg",
    alt: "7",
    size: "small",
  },
  {
    url: "https://i.imgur.com/wOZFAD4.jpeg",
    alt: "8",
    size: "large",
  },
  {
    url: "https://i.imgur.com/Bcz8rwF.jpeg",
    alt: "9",
    size: "large",
  },
  {
    url: "https://i.imgur.com/VXeTw6S.jpeg",
    alt: "10",
    size: "medium",
  },
  {
    url: "https://i.imgur.com/33rhx9A.jpeg",
    alt: "11",
    size: "large",
  },
  {
    url: "https://i.imgur.com/Orneq2F.jpeg",
    alt: "12",
    size: "large",
  },
  {
    url: "https://i.imgur.com/bLnXLxg.jpeg",
    alt: "13",
    size: "small",
  },
  {
    url: "https://i.imgur.com/4vMevSc.jpeg",
    alt: "14",
    size: "small",
  },
  {
    url: "https://i.imgur.com/HEH8Sa7.jpeg",
    alt: "15",
    size: "small",
  },
  {
    url: "https://i.imgur.com/jZosQyv.jpeg",
    alt: "16",
    size: "small",
  },
  {
    url: "https://i.imgur.com/rAutnG7.jpeg",
    alt: "17",
    size: "large",
  },
  {
    url: "https://i.imgur.com/85L87uu.jpeg",
    alt: "18",
    size: "large",
  },
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
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
          backgroundImage: 'url("https://i.imgur.com/jZosQyv.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="font-serif text-6xl md:text-8xl mb-4 text-white">
            Laura & Michael
          </h1>
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
            <h2 className="font-serif text-4xl mb-6 text-content">
              Willkommen zu unserer Hochzeit
            </h2>
            <p className="text-content-secondary mb-8 leading-relaxed">
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
              { label: "Tage", value: timeLeft.days },
              { label: "Stunden", value: timeLeft.hours },
              { label: "Minuten", value: timeLeft.minutes },
              { label: "Sekunden", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-serif text-4xl mb-2 text-content">
                  {item.value}
                </div>
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
            <h2 className="font-serif text-4xl mb-6 text-content">
              Unsere Momente
            </h2>
            <p className="text-content-secondary">
              Einige besondere Augenblicke aus unserer gemeinsamen Zeit
            </p>
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
                  photo.size === "large"
                    ? "h-[500px]"
                    : photo.size === "medium"
                    ? "h-[400px]"
                    : "h-[300px]"
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
