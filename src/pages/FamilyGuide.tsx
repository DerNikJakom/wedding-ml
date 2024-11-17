import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, Star, Shield, Clock, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const childcareServices = [
  {
    name: 'Elite Nanny Service',
    rating: '4.9/5',
    phone: '+1 (212) 555-0123',
    address: 'Wilhelmstraße 1, 65183 Wiesbaden',
    description: 'Professionelle, überprüfte Kinderbetreuer für den Hochzeitstag. Frühzeitige Buchung empfohlen.',
  },
  {
    name: 'Little Angels Care',
    rating: '4.8/5',
    phone: '+1 (212) 555-0124',
    address: 'Luisenstraße 10, 65185 Wiesbaden',
    description: 'Gruppenbetreuung mit spannenden Aktivitäten und erfahrenen Betreuern.',
  },
  {
    name: 'Wedding Day Sitters',
    rating: '4.9/5',
    phone: '+1 (212) 555-0125',
    address: 'Rheinstraße 20, 65185 Wiesbaden',
    description: 'Spezialisiert auf Hochzeitsbetreuung mit Hotel- und Veranstaltungsort-Optionen.',
  },
];

const FamilyGuide = () => {
  return (
    <div>
      <PageHeader
        title="Familieninfo"
        subtitle="Informationen für Gäste mit Kindern"
        image="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-gray-300" />
          </div>
          <h2 className="text-3xl font-serif mb-4 text-gray-100">Hinweis zu Kindern</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Auch wenn wir Ihre Kleinen sehr lieben, haben wir uns für eine Feier nur für Erwachsene entschieden. 
            Um Ihnen die Organisation zu erleichtern, haben wir eine Liste vertrauenswürdiger Kinderbetreuungsdienste 
            und familienfreundlicher Aktivitäten in der Umgebung zusammengestellt.
          </p>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-12 text-gray-100">Empfohlene Kinderbetreuung</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {childcareServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="touch-card"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-gray-300">{service.rating}</span>
                </div>
                <h3 className="text-xl font-serif mb-2 text-gray-100">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-300" />
                    <a href={`tel:${service.phone}`} className="text-gray-300 hover:text-gray-100">
                      {service.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-300" />
                    <span className="text-gray-300">{service.address}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="touch-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-gray-300" />
              <h3 className="text-xl font-serif text-gray-100">Sicherheit geht vor</h3>
            </div>
            <p className="text-gray-300">
              Alle empfohlenen Betreuungsdienste sind lizenziert, versichert und führen
              gründliche Hintergrundüberprüfungen ihrer Mitarbeiter durch. Sie befolgen
              außerdem strenge Gesundheits- und Sicherheitsprotokolle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="touch-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gray-300" />
              <h3 className="text-xl font-serif text-gray-100">Buchungszeitplan</h3>
            </div>
            <p className="text-gray-300">
              Wir empfehlen, die Kinderbetreuung mindestens 6-8 Wochen vor dem
              Hochzeitstermin zu buchen, um die Verfügbarkeit zu gewährleisten. Die
              meisten Dienste benötigen eine Anzahlung zur Reservierung.
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-serif mb-8 text-gray-100">Familienfreundliche Aktivitäten</h2>
          <p className="text-gray-300 mb-6">
            Planen Sie einen längeren Aufenthalt? Hier sind einige nahegelegene
            Attraktionen für Familien:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>Kurpark - 0,5 km entfernt</li>
            <li>Nerobergbahn - 1,2 km</li>
            <li>Spielpark Wiesbaden - 0,3 km</li>
            <li>Thermalbad Aukammtal - 0,7 km</li>
            <li>Fasanerie - 2,4 km</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FamilyGuide;