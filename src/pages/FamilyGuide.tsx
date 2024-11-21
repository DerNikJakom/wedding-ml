import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import PageHeader from "../components/PageHeader";

const FamilyGuide = () => {
  return (
    <div>
      <PageHeader
        title="Familieninfo"
        subtitle="Informationen für Gäste mit Kindern"
        image="https://i.imgur.com/ojWqo2Q.jpeg"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-serif mb-4 text-content">
            Hinweis zu Kindern
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Kinder sind bei unserer Hochzeit herzlich willkommen, und wir freuen
            uns darauf, diesen besonderen Tag auch mit den Kleinen zu feiern!
            Damit sich eure Kinder rundum wohlfühlen, haben wir einen eigenen
            Raum für sie vorbereitet. Dort gibt es ein kinderfreundliches Buffet
            und eine entspannte Atmosphäre, in der sie spielen und Zeit
            miteinander verbringen können.
            <br />
            <br />
            Damit wir alles bestmöglich planen können, bitten wir euch, uns
            frühzeitig mitzuteilen, mit wie vielen Kindern ihr kommt und auch
            die Namen der Kleinen anzugeben.
            <br />
            <br />
            Wir werden für ein wenig Unterhaltung sorgen, aber wir wissen, dass
            jedes Kind andere Vorlieben hat. Wenn eure Kinder
            Lieblingsspielzeug, Bücher, Puppen, eine Nintendo-Konsole oder etwas
            anderes mitbringen möchten, freuen wir uns darüber. So wird
            sichergestellt, dass sie ganz nach ihrem Geschmack beschäftigt sind
            und eine genauso schöne Zeit haben wie die Erwachsenen.
            <br />
            <br />
            Falls eure älteren Kinder (ab 12 Jahren) lieber bei den Erwachsenen
            sitzen möchten, ist das natürlich ebenfalls möglich! Bitte gebt uns
            in diesem Fall einfach Bescheid und vermerkt es bei der RSVP.
            <br />
            <br />
            Wir freuen uns auf eine Hochzeit, bei der auch unsere kleinen Gäste
            auf ihre Kosten kommen – egal, ob sie feiern, spielen oder einfach
            nur genießen möchten!
          </p>
        </motion.div>

        <div className="text-center">
          <h2 className="text-3xl font-serif mb-8 text-content">
            Familienfreundliche Aktivitäten
          </h2>
          <p className="text-content-secondary mb-6">
            Planen Sie einen längeren Aufenthalt? Hier sind einige nahegelegene
            Attraktionen für Familien:
          </p>
          <ul className="text-content-secondary space-y-2">
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
