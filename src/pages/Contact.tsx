import React from "react";
import { motion } from "framer-motion";
import { Phone, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";

const organizers = [
  {
    name: "Lisa Schulz",
    role: "Brautjungfer & Hauptorganisatorin",
    description:
      "Für allgemeine Fragen oder falls ihr Teil des Programms sein möchtet, könnt ihr euch gerne an Lisa wenden. Sie ist die beste Ansprechpartnerin für alles rund um unseren großen Tag!",
    phone: "+49 1516 4064564",
  },
  {
    name: "Paul Grigorchuk",
    role: "Bruder des Bräutigams & Trauzeuge",
    description:
      "Bei Fragen, die die Familie des Bräutigams betreffen, könnt ihr euch jederzeit an Paul wenden. Er steht euch gerne zur Verfügung!",
    phone: "+49 1523 3875267",
  },
  {
    name: "Lea Milène Komnik",
    role: "Schwester der Braut & Trauzeugin",
    description:
      "Für Fragen im Zusammenhang mit der Familie der Braut könnt ihr euch vertrauensvoll an Milene wenden. Sie hilft euch gerne weiter!",
    phone: "+49 170 4028932",
  },
];

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Kontakt"
        subtitle=" Eure Ansprechpartner für die Hochzeit"
        image="https://i.imgur.com/4vMevSc.jpeg"
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
          <h2 className="text-3xl font-serif mb-4 text-content">
            Unser Organisationsteam
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Um dem Brautpaar die Vorbereitungen zu erleichtern, wendet euch
            bitte bei Fragen direkt an unser Organisationsteam. Wir helfen euch
            gerne weiter und sorgen dafür, dass alle Details perfekt koordiniert
            werden.
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
                  <span className="text-2xl font-serif text-content">
                    {organizer.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-serif mb-1 text-content">
                  {organizer.name}
                </h3>
                <p className="text-content-secondary font-medium">
                  {organizer.role}
                </p>
              </div>

              <p className="text-content-secondary text-center mb-6">
                {organizer.description}
              </p>

              <div className="flex items-center justify-center gap-3 text-content-secondary">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href={`tel:${organizer.phone}`}
                  className="hover:text-content transition-colors"
                >
                  {organizer.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
