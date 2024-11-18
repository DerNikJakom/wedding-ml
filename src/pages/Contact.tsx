import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const organizers = [
  {
    name: 'Anna Schmidt',
    role: 'Hauptorganisatorin',
    description: 'Ihre erste Ansprechpartnerin für alle organisatorischen Fragen rund um die Hochzeit.',
    email: 'anna.schmidt@example.com',
    phone: '+49 123 456789',
    availability: 'Mo-Fr 10:00-18:00 Uhr',
  },
  {
    name: 'Thomas Weber',
    role: 'Zeremonienmeister',
    description: 'Zuständig für den Ablauf der Trauung und die Koordination am Hochzeitstag.',
    email: 'thomas.weber@example.com',
    phone: '+49 123 456790',
    availability: 'Mo-Sa 09:00-20:00 Uhr',
  },
  {
    name: 'Marie Becker',
    role: 'Event-Koordinatorin',
    description: 'Verantwortlich für Location, Catering und alle Dienstleister.',
    email: 'marie.becker@example.com',
    phone: '+49 123 456791',
    availability: 'Mo-Fr 09:00-17:00 Uhr',
  }
];

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Kontakt"
        subtitle="Ihre Ansprechpartner für die Hochzeit"
        image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Users className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-serif mb-4 text-content">Unser Organisationsteam</h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Um dem Brautpaar die Vorbereitungen zu erleichtern, wenden Sie sich bitte bei Fragen 
            direkt an unser Organisationsteam. Wir helfen Ihnen gerne weiter und sorgen dafür, 
            dass alle Details perfekt koordiniert werden.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((organizer, index) => (
            <motion.div
              key={organizer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="touch-card"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif text-content">{organizer.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-serif mb-1 text-content">{organizer.name}</h3>
                <p className="text-content-secondary font-medium">{organizer.role}</p>
              </div>

              <p className="text-content-secondary text-center mb-6">
                {organizer.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-content-secondary">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href={`mailto:${organizer.email}`}
                    className="hover:text-content transition-colors"
                  >
                    {organizer.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-content-secondary">
                  <Phone className="w-5 h-5 text-primary" />
                  <a 
                    href={`tel:${organizer.phone}`}
                    className="hover:text-content transition-colors"
                  >
                    {organizer.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-content-secondary">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{organizer.availability}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 touch-card text-center"
        >
          <h2 className="text-2xl font-serif mb-4 text-content">Dringende Angelegenheiten</h2>
          <p className="text-content-secondary">
            Bei sehr dringenden Anliegen außerhalb der Geschäftszeiten erreichen Sie unseren 
            24/7-Notfallkontakt unter: <br />
            <a 
              href="tel:+491234567899" 
              className="text-primary hover:underline font-medium"
            >
              +49 123 456 7899
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;