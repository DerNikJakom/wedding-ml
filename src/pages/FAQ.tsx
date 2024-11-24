import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import PageHeader from "../components/PageHeader";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-black/10 pb-4"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
      >
        <h3 className="text-xl font-serif text-content pr-8">{question}</h3>
        <ChevronDown
          className={`w-6 h-6 text-content transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-content-secondary pb-4 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const faqs = [
  {
    question: "Gibt es eine Geschenkeliste?",
    answer:
      "Wir wünschen uns vor allem, dass ihr alle dabei seid, um diesen unvergesslichen Tag mit uns zu feiern. Darüber hinaus freuen wir uns über Geldgeschenke für unsere gemeinsame Zukunft.",
  },
  {
    question: "Darf ich eine Begleitung mitbringen?",
    answer:
      "Aufgrund der begrenzten Kapazität können wir Begleitungen nur für verheiratete, verlobte und zusammenlebende Paare ermöglichen. Ihre Einladung wird klar angeben, ob eine Begleitung eingeschlossen ist.",
  },
  {
    question: "Gibt es Parkplätze?",
    answer:
      "Da wir relativ stadtnah heiraten, sind (kostenlose) Parkplätze eher selten. Wir bemühen uns, für die Trauung eine Parkerlaubnis an der Kirche für unsere Gäste einzuholen. Umliegend von unserer Location gibt es kostenpflichtige Parkhäuser: Parkhaus 'Am Markt' (2 Min. Fußweg), Parkhaus 'Luisenplatz' (5 Min. Fußweg). Beide Parkhäuser haben 24 Stunden geöffnet. Einige kostenfreie Parkplätze befinden sich in der Rheinstraße (ca. 10 Min. Fußweg).",
  },
  {
    question: "Wie ist der Dresscode?",
    answer:
      "Der Dresscode ist Black Tie. Herren tragen Smoking oder dunkle Anzüge, Damen bodenlange Kleider oder elegante Cocktailkleider in Schwarz.",
  },
  {
    question: "Sind Kinder willkommen?",
    answer:
      "Ja, Kinder sind herzlich eingeladen! Wir bitten jedoch anzugeben, wie viele pro Familie dabei sind, da wir für die Kinder einen extra Raum organisiert haben mit eigenem Büfett. (siehe ‚Familie‘)",
  },
  {
    question: "Findet die Hochzeit drinnen oder draußen statt?",
    answer:
      "Sowohl die Zeremonie als auch der Empfang finden in Innenräumen statt, das Wetter wird also kein Problem sein. Jedoch wird es in der Kirche sehr kalt werden, also zieht euch bitte warm an hierfür.",
  },
  {
    question: "Gibt es besondere Ernährungsoptionen?",
    answer:
      "Unser Menü enthält vegetarische, vegane und glutenfreie Optionen. Bitte geben Sie eventuelle Ernährungseinschränkungen auf Ihrer Antwortkarte an.",
  },
  {
    question: "Was wenn ich nicht rechtzeitig Rückmeldung gegebe habe?",
    answer:
      "Wenn wir Ihre Rückmeldung bis zum 31.12.2024 nicht erhalten haben, wird es automatisch als ein 'Ich werde nicht kommen' gespeichert. Es tut uns sehr leid, dass wir dann nicht zusammen feiern können, aber leider müssen auch wir eine Frist einhalten und eine finale Gästeanzahl an einige unserer Dienstleister abgeben. Wir danken für das Verständnis!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <PageHeader
        title="Häufige Fragen"
        subtitle="Alles Wichtige zu unserem großen Tag"
        image="https://i.imgur.com/wOZFAD4.jpeg"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-serif mb-4 text-content">
            Ihre Fragen - Unsere Antworten
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unserer
            Hochzeit. Sollten Sie weitere Fragen haben, zögern Sie nicht, unser
            Organisationsteam zu kontaktieren.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-serif mb-4 text-content">
            Noch Fragen?
          </h2>
          <p className="text-content-secondary">
            Kontaktieren Sie uns gerne unter{" "}
            <a
              href="mailto:laura.michael.wedding@example.com"
              className="text-primary hover:text-accent underline"
            >
              laura.michael.wedding@example.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
