import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, Star, Shield, Clock, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const faqs = [
  {
    question: 'Gibt es eine Geschenkeliste?',
    answer: 'Wir haben bei WeddingWorld und Bloomingdale\'s eine Geschenkeliste erstellt. Die Links finden Sie auf unserer Website. Alternativ freuen wir uns auch über einen Beitrag zu unserer Hochzeitsreise.',
  },
  {
    question: 'Darf ich eine Begleitung mitbringen?',
    answer: 'Aufgrund der begrenzten Kapazität können wir Begleitungen nur für verheiratete, verlobte und zusammenlebende Paare ermöglichen. Ihre Einladung wird klar angeben, ob eine Begleitung eingeschlossen ist.',
  },
  {
    question: 'Wann sollte ich ankommen?',
    answer: 'Bitte kommen Sie 30 Minuten vor Beginn der Zeremonie (14:30 Uhr) an, damit genügend Zeit für die Platzierung bleibt. Die Zeremonie beginnt pünktlich um 15:00 Uhr.',
  },
  {
    question: 'Gibt es Parkplätze?',
    answer: 'Ein Parkservice steht sowohl bei der Zeremonie als auch beim Empfang zur Verfügung. Wenn Sie selbst parken möchten, gibt es mehrere Parkhäuser in Gehweite.',
  },
  {
    question: 'Wie ist der Dresscode?',
    answer: 'Der Dresscode ist Black Tie. Herren tragen Smoking oder dunkle Anzüge, Damen bodenlange Abendkleider oder elegante Cocktailkleider in Schwarz oder Weiß.',
  },
  {
    question: 'Sind Kinder willkommen?',
    answer: 'Auch wenn wir Ihre Kleinen lieben, haben wir uns für eine Feier nur für Erwachsene entschieden. Auf unserer Familien-Seite finden Sie Empfehlungen für Kinderbetreuung.',
  },
  {
    question: 'Findet die Hochzeit drinnen oder draußen statt?',
    answer: 'Sowohl die Zeremonie als auch der Empfang finden in Innenräumen statt, das Wetter wird also kein Problem sein.',
  },
  {
    question: 'Gibt es einen Shuttle-Service zwischen den Locations?',
    answer: 'Ja, wir stellen einen Shuttle-Service zwischen der Zeremonie, dem Empfang und den Partnerhotels während des gesamten Abends zur Verfügung.',
  },
  {
    question: 'Wann endet die Feier?',
    answer: 'Die Feier endet um 23:00 Uhr mit einem Spalier.',
  },
  {
    question: 'Gibt es besondere Ernährungsoptionen?',
    answer: 'Unser Menü enthält vegetarische, vegane und glutenfreie Optionen. Bitte geben Sie eventuelle Ernährungseinschränkungen auf Ihrer Antwortkarte an.',
  },
];

const FAQ = () => {
  return (
    <div>
      <PageHeader
        title="Häufige Fragen"
        subtitle="Alles Wichtige zu unserem großen Tag"
        image="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-white/10 pb-8"
            >
              <h3 className="text-xl font-serif mb-4 text-white">{faq.question}</h3>
              <p className="text-content leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-serif mb-4">Noch Fragen?</h2>
          <p className="text-content">
            Kontaktieren Sie uns gerne unter{' '}
            <a
              href="mailto:laura.michael.wedding@example.com"
              className="text-white hover:underline"
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