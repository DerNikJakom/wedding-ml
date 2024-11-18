import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const hotels = [
  {
    name: 'Hotel Nassauer Hof',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Erleben Sie zeitlose Eleganz in diesem historischen Wiesbadener Hotel. Spezielle Hochzeitsraten für unsere Gäste verfügbar.',
    address: 'Kaiser-Friedrich-Platz 3-4, 65183 Wiesbaden',
    phone: '+49 611 133 0',
    website: 'https://www.nassauer-hof.de',
    price: '$$$',
    distance: '0.0 km vom Veranstaltungsort',
  },
  {
    name: 'Radisson Blu Schwarzer Bock',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxuriöse Unterkünfte mit Blick auf die Stadt. Erwähnen Sie unsere Hochzeit für exklusive Raten.',
    address: 'Kranzplatz 12, 65183 Wiesbaden',
    phone: '+49 611 155 0',
    website: 'https://www.radissonhotels.com',
    price: '$$$',
    distance: '0.2 km vom Veranstaltungsort',
  },
  {
    name: 'Dorint Pallas',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Moderne Luxus im Herzen von Wiesbaden. Elegante Zimmer mit zeitgenössischer Ausstattung.',
    address: 'Auguste-Viktoria-Straße 15, 65185 Wiesbaden',
    phone: '+49 611 3306 0',
    website: 'https://hotel-wiesbaden.dorint.com',
    price: '$$',
    distance: '0.4 km vom Veranstaltungsort',
  },
];

const Accommodations = () => {
  return (
    <div>
      <PageHeader
        title="Unterkünfte"
        subtitle="Wo Sie in Wiesbaden übernachten können"
        image="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-content-secondary max-w-2xl mx-auto">
            Wir haben für unsere Hochzeitsgäste Sonderkonditionen in diesen ausgewählten Hotels vereinbart.
            Bitte erwähnen Sie bei der Buchung "Hochzeit Laura & Michael", um den vergünstigten Tarif zu erhalten.
            Buchen Sie frühzeitig, da die Zimmerkontingente begrenzt sind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="touch-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif text-content">{hotel.name}</h3>
                  <span className="text-content-secondary">{hotel.price}</span>
                </div>
                <p className="text-content-secondary mb-4">{hotel.description}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-content-secondary">{hotel.address}</p>
                      <p className="text-content-muted mt-1">{hotel.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                    <a
                      href={`tel:${hotel.phone}`}
                      className="text-content-secondary hover:text-content transition-colors"
                    >
                      {hotel.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 flex-shrink-0 text-primary" />
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-content-secondary hover:text-content transition-colors"
                    >
                      Online buchen
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 touch-card text-center">
          <h2 className="text-2xl font-serif mb-4 text-content">Transport</h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Alle empfohlenen Hotels befinden sich in Gehweite zum Veranstaltungsort.
            Für diejenigen, die nicht zu Fuß gehen möchten, stellen wir einen Shuttle-Service
            zwischen den Hotels und dem Veranstaltungsort vor und nach der Zeremonie zur Verfügung.
            Details werden kurz vor der Hochzeit bekannt gegeben.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;