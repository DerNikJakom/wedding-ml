import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";

const RSVP = () => {
  const [isAttending, setIsAttending] = useState<string>("");
  const deadline = new Date("2024-12-31T23:59:59");
  const currentDate = new Date();
  const isAfterDeadline = currentDate > deadline;

  // Generiere Array mit Zahlen von 1 bis 10 für die Gästeauswahl
  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  if (isAfterDeadline) {
    return (
      <div>
        <PageHeader
          title="Zusage"
          subtitle="Anmeldefrist abgelaufen"
          image="https://i.imgur.com/ZVoPnLr.jpeg"
        />

        <div className="max-w-2xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="touch-card text-center"
          >
            <h2 className="text-2xl font-serif mb-4 text-content">
              Anmeldefrist abgelaufen
            </h2>
            <p className="text-content-secondary mb-6">
              Die Anmeldefrist für unsere Hochzeit ist leider am 31. Dezember
              2024 abgelaufen. Wir bedauern, dass wir keine weiteren Anmeldungen
              mehr entgegennehmen können.
            </p>
            <p className="text-content-secondary">
              Bei Fragen wendet euch bitte an unser{" "}
              <a href="/contact" className="text-primary hover:underline">
                Organisationsteam
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Zusage"
        subtitle="Wir freuen uns auf Ihre Antwort"
        image="https://i.imgur.com/ZVoPnLr.jpeg"
      />

      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-content-secondary mb-12">
            Bitte antworte bis zum 31. Dezember 2024
          </p>

          <form
            name="rsvp"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="touch-card space-y-6"
          >
            {/* Netlify Form Detection */}
            <input type="hidden" name="form-name" value="rsvp" />
            <input type="hidden" name="bot-field" />

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-content"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="input-field"
                placeholder="Dein vollständiger Name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-content"
              >
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="input-field"
                placeholder="deine@email.de"
              />
            </div>

            {/* Teilnahme */}
            <div>
              <label
                htmlFor="attending"
                className="block text-sm font-medium mb-2 text-content"
              >
                Wirst Du teilnehmen?
              </label>
              <select
                name="attending"
                id="attending"
                required
                className="input-field"
                value={isAttending}
                onChange={(e) => setIsAttending(e.target.value)}
              >
                <option value="">Bitte wählen...</option>
                <option value="yes">Ja, ich nehme gerne teil</option>
                <option value="no">Leider kann ich nicht teilnehmen</option>
              </select>
            </div>

            <AnimatePresence>
              {isAttending === "no" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  {/* Nachricht bei Absage */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-content"
                    >
                      Möchtest Du uns noch etwas mitteilen?
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="input-field"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>
                </motion.div>
              )}

              {isAttending === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  {/* Begleitung */}
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium mb-2 text-content"
                    >
                      Anzahl der Personen (inkl. deiner Person)
                    </label>
                    <select
                      name="guests"
                      id="guests"
                      required
                      className="input-field"
                    >
                      {guestOptions.map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Person" : "Personen"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Unverträglichkeiten */}
                  <div>
                    <label
                      htmlFor="dietary"
                      className="block text-sm font-medium mb-2 text-content"
                    >
                      Allergien oder Unverträglichkeiten
                    </label>
                    <textarea
                      name="dietary"
                      id="dietary"
                      rows={3}
                      className="input-field"
                      placeholder="Bitte gib etwaige Allergien oder Unverträglichkeiten an..."
                    />
                  </div>

                  {/* Musikwunsch */}
                  <div>
                    <label
                      htmlFor="song"
                      className="block text-sm font-medium mb-2 text-content"
                    >
                      Dein Musikwunsch für die Feier
                    </label>
                    <input
                      type="text"
                      name="song"
                      id="song"
                      className="input-field"
                      placeholder="Welches Lied bringt Dich zum Tanzen?"
                    />
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-content"
                    >
                      Möchtest Du uns noch etwas mitteilen?
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="input-field"
                      placeholder="Deine Nachricht an uns..."
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button type="submit" className="btn-primary w-full">
              Zusage absenden
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RSVP;
