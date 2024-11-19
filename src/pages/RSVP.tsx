import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const RSVP = () => {
  const [isAttending, setIsAttending] = useState<string>('');

  // Generiere Array mit Zahlen von 1 bis 10 für die Gästeauswahl
  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div>
      <PageHeader
        title="Zusage"
        subtitle="Wir freuen uns auf Ihre Antwort"
        image="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-2xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-content-secondary mb-12">
            Bitte antworten Sie bis zum 08. Januar 2025
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
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-content">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="input-field"
                placeholder="Ihr vollständiger Name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-content">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="input-field"
                placeholder="ihre@email.de"
              />
            </div>

            {/* Teilnahme */}
            <div>
              <label htmlFor="attending" className="block text-sm font-medium mb-2 text-content">
                Werden Sie teilnehmen?
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
              {isAttending === 'no' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  {/* Nachricht bei Absage */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-content">
                      Möchten Sie uns noch etwas mitteilen?
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

              {isAttending === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  {/* Begleitung */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-2 text-content">
                      Anzahl der Personen (inkl. Ihrer Person)
                    </label>
                    <select
                      name="guests"
                      id="guests"
                      required
                      className="input-field"
                    >
                      {guestOptions.map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Person' : 'Personen'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Unverträglichkeiten */}
                  <div>
                    <label htmlFor="dietary" className="block text-sm font-medium mb-2 text-content">
                      Allergien oder Unverträglichkeiten
                    </label>
                    <textarea
                      name="dietary"
                      id="dietary"
                      rows={3}
                      className="input-field"
                      placeholder="Bitte geben Sie etwaige Allergien oder Unverträglichkeiten an..."
                    />
                  </div>

                  {/* Musikwunsch */}
                  <div>
                    <label htmlFor="song" className="block text-sm font-medium mb-2 text-content">
                      Ihr Musikwunsch für die Feier
                    </label>
                    <input
                      type="text"
                      name="song"
                      id="song"
                      className="input-field"
                      placeholder="Welches Lied bringt Sie zum Tanzen?"
                    />
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-content">
                      Möchten Sie uns noch etwas mitteilen?
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
            </AnimatePresence>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Zusage absenden
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RSVP;