import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Globe, Building } from "lucide-react";
import PageHeader from "../components/PageHeader";

const hotels = [
  {
    name: "Radisson Blu Schwarzer Bock Hotel",
    image: "https://i.imgur.com/iUDHosW.jpeg",
    description:
      "Das Hotel liegt zentral am Kranzplatz, nur wenige Gehminuten vom Kurhaus und der Casino Gesellschaft entfernt. Es bietet elegante Zimmer, ein hoteleigenes Spa sowie ein reichhaltiges Frühstücksbuffet.",
    address: "Kranzplatz 12, 65183 Wiesbaden",
    phone: "+49 611 1550",
    website:
      "https://www.radissonhotels.com/de-de/hotels/radisson-blu-wiesbaden-schwarzer-bock?cid=a%3Ase+b%3Agmb+c%3Aemea+i%3Alocal+e%3Ardb+d%3Acese+h%3ADEUWEBCK",
    price: "$$$",
    distance: "0.5 km vom Veranstaltungsort",
  },
  {
    name: "Hotel Oranien Wiesbaden",
    image: "https://i.imgur.com/RZiiTF1.jpeg",
    description:
      "Ein 4-Sterne-Hotel in zentraler Lage mit eleganten Zimmern und einem Restaurant. Es liegt etwa 5 Minuten von der Casino Gesellschaft entfernt.",
    address: "Platter Straße 2, 65183 Wiesbaden",
    phone: "+49 611 18 82-0",
    website: "https://www.hotel-oranien.de",
    price: "$$$",
    distance: "0.8 km vom Veranstaltungsort",
  },
  {
    name: "Town Hotel Wiesbaden",
    image: "https://i.imgur.com/oCa6p96.jpeg",
    description:
      "Ein charmantes Hotel im Zentrum, etwa 5 Gehminuten von der Casino Gesellschaft entfernt. Es bietet moderne Annehmlichkeiten und ein Frühstücksbuffet.",
    address: "Spiegelgasse 5, 65185 Wiesbaden",
    phone: "+49 611 360160",
    website: "http://www.townhotel.de",
    price: "$$",
    distance: "0.6 km vom Veranstaltungsort",
  },
  {
    name: "Hotel de France",
    image: "https://i.imgur.com/kEIvh3G.jpeg",
    description:
      "In der historischen Taunusstraße gelegen, ein stilvolles Boutique-Hotel mit guter Anbindung an Sehenswürdigkeiten und die Casino Gesellschaft.",
    address: "Taunusstraße 49, 65185 Wiesbaden",
    phone: "+49 611 959-730",
    website: "https://www.hoteldefrance.de",
    price: "$$$",
    distance: "1.2 km vom Veranstaltungsort",
  },
];

const Accommodations = () => {
  return (
    <div>
      <PageHeader
        title="Unterkünfte"
        subtitle="Wo ihr in Wiesbaden übernachten könnt"
        image="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Building className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-serif mb-4 text-content">
            Komfortabel übernachten
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Für euren Aufenthalt während unserer Hochzeit haben wir einige
            Unterkunftsmöglichkeiten für euch zusammengestellt. Egal ob ihr es
            lieber gemütlich, modern oder luxuriös mögt – hier ist hoﬀentlich
            für jeden etwas dabei. Wir empfehlen euch, frühzeitig zu buchen, da
            die Verfügbarkeit begrenzt sein kann. Wenn ihr Fragen habt oder
            Hilfe benötigt, meldet euch gerne bei uns!
          </p>
        </motion.div>

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
                  <h3 className="text-xl font-serif text-content">
                    {hotel.name}
                  </h3>
                  <span className="text-content-secondary">{hotel.price}</span>
                </div>
                <p className="text-content-secondary mb-4">
                  {hotel.description}
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-content-secondary">{hotel.address}</p>
                      <p className="text-content-muted mt-1">
                        {hotel.distance}
                      </p>
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
      </div>
    </div>
  );
};

export default Accommodations;
