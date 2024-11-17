import React from 'react';
import { MapPin } from 'lucide-react';
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
        {/* Locations Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-white">Trauung</h2>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601921721860-cd27f501a9ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ringkirche Wiesbaden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-white" />
              <div>
                <p className="font-medium text-white">Ringkirche Wiesbaden</p>
                <p className="text-gray-300">Kaiser-Friedrich-Ring 7, 65185 Wiesbaden</p>
                <a 
                  href="https://maps.google.com/?q=Ringkirche+Wiesbaden+Kaiser-Friedrich-Ring+7+65185+Wiesbaden" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white mt-2 inline-block"
                >
                  In Google Maps öffnen →
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-white">Feier</h2>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Casino Gesellschaft Wiesbaden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-white" />
              <div>
                <p className="font-medium text-white">Casino Gesellschaft Wiesbaden</p>
                <p className="text-gray-300">Friedrichstraße 22, 65185 Wiesbaden</p>
                <a 
                  href="https://maps.google.com/?q=Casino+Gesellschaft+Wiesbaden+Friedrichstraße+22+65185+Wiesbaden" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white mt-2 inline-block"
                >
                  In Google Maps öffnen →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-12 text-white">Ablauf</h2>
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
          <h2 className="text-3xl font-serif mb-4 text-white">Kleiderordnung</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Black Tie. Wir bitten unsere Gäste, sich formal zu kleiden.
            Weitere Details finden Sie auf der <a href="/dress-code" className="underline hover:text-white">Kleiderordnung</a> Seite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;