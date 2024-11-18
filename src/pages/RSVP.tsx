import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  attending: string;
  guests: number;
  mealPreference: string;
  dietaryRestrictions: string;
  songRequest: string;
};

const encode = (data: { [key: string]: any }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const RSVP = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const attending = watch('attending');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "wedding-rsvp",
          ...data
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        throw new Error('Formular konnte nicht gesendet werden');
      }
    } catch (error) {
      console.error('RSVP Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 mt-16">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Zusage</h1>
          <p className="text-center text-content-secondary mb-12">
            Bitte antworten Sie bis zum 08. Januar 2025
          </p>

          {submitStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="touch-card text-center"
            >
              <Check className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h2 className="text-2xl font-serif mb-4 text-content">Vielen Dank!</h2>
              <p className="text-content-secondary">
                Ihre Zusage wurde erfolgreich übermittelt. Wir freuen uns darauf, mit Ihnen zu feiern!
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="touch-card space-y-6"
              name="wedding-rsvp"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="wedding-rsvp" />
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  {...register('name', { required: 'Name wird benötigt' })}
                  name="name"
                  className="input-field"
                  placeholder="Ihr vollständiger Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-Mail</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'E-Mail wird benötigt',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Ungültige E-Mail-Adresse',
                    },
                  })}
                  name="email"
                  className="input-field"
                  placeholder="ihre@email.de"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Werden Sie teilnehmen?
                </label>
                <select
                  {...register('attending', { required: 'Bitte wählen Sie eine Option' })}
                  name="attending"
                  className="input-field"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="yes">Ja, ich nehme gerne teil</option>
                  <option value="no">Leider kann ich nicht teilnehmen</option>
                </select>
                {errors.attending && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.attending.message}
                  </p>
                )}
              </div>

              {attending === 'yes' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Anzahl der Gäste
                    </label>
                    <input
                      type="number"
                      {...register('guests', {
                        required: 'Anzahl der Gäste wird benötigt',
                        min: { value: 1, message: 'Mindestens 1 Gast' },
                        max: { value: 2, message: 'Maximal 2 Gäste' },
                      })}
                      name="guests"
                      className="input-field"
                    />
                    {errors.guests && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.guests.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Menüauswahl
                    </label>
                    <select
                      {...register('mealPreference', {
                        required: 'Bitte wählen Sie ein Menü',
                      })}
                      name="mealPreference"
                      className="input-field"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="beef">Rinderfilet</option>
                      <option value="fish">Lachs</option>
                      <option value="vegetarian">Vegetarisch</option>
                      <option value="vegan">Vegan</option>
                    </select>
                    {errors.mealPreference && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mealPreference.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Allergien oder Unverträglichkeiten
                    </label>
                    <textarea
                      {...register('dietaryRestrictions')}
                      name="dietaryRestrictions"
                      className="input-field h-24 resize-none"
                      placeholder="Bitte geben Sie etwaige Allergien oder Unverträglichkeiten an..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Musikwunsch
                    </label>
                    <input
                      {...register('songRequest')}
                      name="songRequest"
                      className="input-field"
                      placeholder="Welches Lied bringt Sie zum Tanzen?"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
              </button>

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-500 mt-4">
                  <AlertCircle className="w-5 h-5" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RSVP;