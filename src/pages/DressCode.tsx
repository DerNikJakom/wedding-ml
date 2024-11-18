import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Palette, Sparkles, ShirtIcon } from 'lucide-react';

const DressCode = () => {
  const colorPalette = [
    { color: 'bg-black', label: 'Schwarz' },
    { color: 'bg-accent-dark', label: 'Anthrazit' },
    { color: 'bg-accent', label: 'Silber' },
    { color: 'bg-white', label: 'Weiß' }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Kleiderordnung"
        subtitle="Black Tie"
        image="https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <ShirtIcon className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-serif mb-4 text-content">Dresscode: Black Tie</h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Wir bitten unsere Gäste, sich an den Black-Tie-Dresscode zu halten. Dies bedeutet formelle Abendgarderobe,
            die der Bedeutung dieses besonderen Anlasses entspricht.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="touch-card"
          >
            <h3 className="text-xl font-serif mb-4 text-content">Für die Herren</h3>
            <ul className="space-y-2 text-content-secondary">
              <li>• Smoking oder schwarzer Anzug</li>
              <li>• Weißes Smokinghemd</li>
              <li>• Schwarze Fliege</li>
              <li>• Schwarze Lackschuhe</li>
              <li>• Schwarze Socken</li>
              <li>• Optional: Kummerbund oder Weste</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="touch-card"
          >
            <h3 className="text-xl font-serif mb-4 text-content">Für die Damen</h3>
            <ul className="space-y-2 text-content-secondary">
              <li>• Bodenlanges Abendkleid</li>
              <li>• Elegantes Cocktailkleid</li>
              <li>• Hochwertige Materialien wie Seide, Samt oder Chiffon</li>
              <li>• Dezenter, eleganter Schmuck</li>
              <li>• Abendschuhe</li>
              <li>• Kleine Abendtasche</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-serif text-content">Hochzeitsfarben</h3>
          </div>
          <div className="flex justify-center gap-4">
            {colorPalette.map(({ color, label }) => (
              <div key={label} className="text-center">
                <div className={`w-16 h-16 rounded-full ${color} mb-2 border border-black/10`}></div>
                <span className="text-sm text-content-secondary">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-serif mb-4 text-content">Zusätzliche Hinweise</h3>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Die Feier findet hauptsächlich in klimatisierten Innenräumen statt. 
            Bitte beachten Sie, dass wir eine formelle Abendveranstaltung planen, 
            bei der die Garderobe der Festlichkeit des Anlasses entsprechen sollte.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DressCode;