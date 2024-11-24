import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import PageHeader from "../components/PageHeader";
import TimelineEvent from "../components/TimelineEvent";

const EventDetails = () => {
  const timeline = [
    {
      time: "15:00 Uhr",
      title: "Trauung",
      description:
        "Feierliche Trauung in der Ringkirche Wiesbaden. Zieht euch für diesen Teil bitte warm an, da es in der Kirche sehr kalt sein wird.",
    },
    {
      time: "17:00 Uhr",
      title: "Sektempfang",
      description:
        "Genießen Sie Champagner und Häppchen während wir Fotos mit der Familie machen.",
    },
    {
      time: "18:30 Uhr",
      title: "Empfang",
      description: "Dinner und Feier in der Casino Gesellschaft Wiesbaden.",
    },
    {
      time: "20:00 Uhr",
      title: "Programm",
      description:
        "Wenn ihr Teil des Programms sein möchtet, könnt ihr euch gerne bei Lisa Schulz (siehe Kontakt) melden. Sie steht euch für alle Fragen und Details zur Verfügung.",
    },
    {
      time: "21:00 Uhr",
      title: "Torte",
      description:
        "Der Anschnitt der Hochzeitstorte markiert einen besonderen Moment unseres Tages – wir freuen uns, ihn mit euch zu teilen!",
    },
    {
      time: "22:00 Uhr",
      title: "Dance Floor",
      description:
        "Der Dancefloor wartet auf euch! Lasst uns gemeinsam die Nacht durchtanzen und diesen besonderen Tag mit viel Musik und guter Stimmung feiern!",
    },
    {
      time: "00:00 Uhr",
      title: "Mitternachtssnack",
      description: "Stärken Sie sich mit kleinen Köstlichkeiten.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Details"
        subtitle="Unser großer Tag"
        image="https://i.imgur.com/eegi6dJ.jpeg"
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
          <h2 className="text-3xl font-serif mb-4 text-content">
            Der Ablauf unserer Hochzeit
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Hier finden Sie alle wichtigen Informationen zum Ablauf unseres
            besonderen Tages. Von der Trauung bis zum letzten Tanz haben wir
            einen wundervollen Tag für Sie geplant.
          </p>
        </motion.div>

        {/* Locations Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-content">Trauung</h2>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/wcPC3Qh.jpeg"
                alt="Ringkirche Wiesbaden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
              <div>
                <p className="font-medium text-content">Ringkirche Wiesbaden</p>
                <p className="text-content-secondary">
                  Kaiser-Friedrich-Ring 7, 65185 Wiesbaden
                </p>
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
                src="https://i.imgur.com/GWXC9lw.jpeg"
                alt="Casino Gesellschaft Wiesbaden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
              <div>
                <p className="font-medium text-content">
                  Casino Gesellschaft Wiesbaden
                </p>
                <p className="text-content-secondary">
                  Friedrichstraße 22, 65185 Wiesbaden
                </p>
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
          <h2 className="text-3xl font-serif text-center mb-12 text-content">
            Ablauf
          </h2>
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
          <h2 className="text-3xl font-serif mb-4 text-content">
            Kleiderordnung
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Black Tie. Wir bitten unsere Gäste, sich formal zu kleiden. Weitere
            Details finden Sie auf der{" "}
            <a href="/dress-code" className="underline hover:text-content">
              Kleiderordnung
            </a>{" "}
            Seite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
