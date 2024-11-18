import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import TimelineEvent from '../components/TimelineEvent';

const EventDetails = () => {
  const timeline = [
    {
      time: '15:00 Uhr',
      title: 'Trauung',
      description: 'Feierliche Trauung in der Ringkirche Wiesbaden.',
    },
    {
      time: '16:00 Uhr',
      title: 'Sektempfang',
      description: 'Genießen Sie Champagner und Häppchen während wir Fotos mit der Familie machen.',
    },
    {
      time: '17:00 Uhr',
      title: 'Empfang',
      description: 'Dinner und Feier in der Casino Gesellschaft Wiesbaden.',
    },
    {
      time: '22:00 Uhr',
      title: 'Mitternachtssnack',
      description: 'Stärken Sie sich mit kleinen Köstlichkeiten.',
    },
    {
      time: '23:00 Uhr',
      title: 'Ausklang',
      description: 'Verabschiedung des Brautpaares mit einem besonderen Spalier.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Details"
        subtitle="Unser großer Tag"
        image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Calendar className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-serif mb-4 text-content">Der Ablauf unserer Hochzeit</h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Hier finden Sie alle wichtigen Informationen zum Ablauf unseres besonderen Tages.
            Von der Trauung bis zum letzten Tanz haben wir einen wundervollen Tag für Sie geplant.
          </p>
        </motion.div>

        {/* Locations Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-content">Trauung</h2>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601921721860-cd27f501a9ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ringkirche Wiesbaden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
              <div>
                <p className="font-medium text-content">Ringkirche Wiesbaden</p>
                <p className="text-content-secondary">Kaiser-Friedrich-Ring 7, 65185 Wiesbaden</p>
                <a 
                  href="https://maps.google.com/?q=Ringkirche+Wiesbaden+Kaiser-Friedrich-Ring+7+65185+Wiesbaden" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-content-secondary hover:text-content mt-2 inline-block"
                >
                  In Google Maps öffnen →
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-content">Feier</h2>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Casino Gesellschaft Wiesbaden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
              <div>
                <p className="font-medium text-content">Casino Gesellschaft Wiesbaden</p>
                <p className="text-content-secondary">Friedrichstraße 22, 65185 Wiesbaden</p>
                <a 
                  href="https://maps.google.com/?q=Casino+Gesellschaft+Wiesbaden+Friedrichstraße+22+65185+Wiesbaden" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-content-secondary hover:text-content mt-2 inline-block"
                >
                  In Google Maps öffnen →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-12 text-content">Ablauf</h2>
          <div className="max-w-2xl mx-auto">
            {timeline.map((event, index) => (
              <TimelineEvent
                key={event.time}
                time={event.time}
                title={event.title}
                description={event.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Dress Code Section */}
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4 text-content">Kleiderordnung</h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Black Tie. Wir bitten unsere Gäste, sich formal zu kleiden.
            Weitere Details finden Sie auf der{' '}
            <a href="/dress-code" className="underline hover:text-content">
              Kleiderordnung
            </a>{' '}
            Seite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;