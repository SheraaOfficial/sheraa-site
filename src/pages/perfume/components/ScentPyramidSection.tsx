
import React from 'react';
import { motion } from 'framer-motion';

const ScentPyramidSection: React.FC = () => {
  const notes = [
    {
      level: "Top Notes",
      position: "top",
      scents: ["Bergamot", "Pink Pepper", "Cardamom"],
      description: "The initial impression—bright and invigorating, like the dawn over Sharjah's horizon",
      size: "w-32 h-16"
    },
    {
      level: "Heart Notes", 
      position: "middle",
      scents: ["Rose", "Jasmine", "Oud"],
      description: "The soul of the fragrance—rich and complex, embodying passion and tradition",
      size: "w-48 h-20"
    },
    {
      level: "Base Notes",
      position: "bottom",
      scents: ["Sandalwood", "Amber", "Musk"],
      description: "The lasting foundation—warm and grounding, like the enduring spirit of enterprise",
      size: "w-64 h-24"
    }
  ];

  return (
    <section className="py-24 bg-luxury-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-6">
            Olfactory Journey
          </h2>
          <div className="w-24 h-px bg-luxury-gold mx-auto mb-8" />
          <p className="text-lg text-luxury-charcoal/80 font-light max-w-2xl mx-auto">
            A carefully orchestrated composition that unfolds in three distinct phases, 
            each revealing new depths and nuances.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Pyramid Visual */}
          <div className="flex flex-col items-center space-y-8 mb-16">
            {notes.map((note, index) => (
              <motion.div
                key={note.level}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-4"
              >
                {/* Pyramid Level */}
                <div className={`${note.size} bg-luxury-beige border border-luxury-gold/30 
                  flex items-center justify-center relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/10 to-transparent" />
                  <span className="text-xs tracking-wider uppercase text-luxury-charcoal/70 font-light relative z-10">
                    {note.level}
                  </span>
                </div>

                {/* Note Details */}
                <div className="text-center max-w-md space-y-3">
                  <div className="flex flex-wrap justify-center gap-2">
                    {note.scents.map((scent, idx) => (
                      <span 
                        key={idx}
                        className="text-sm px-3 py-1 bg-luxury-beige/50 text-luxury-charcoal border border-luxury-stone/30 rounded-full font-light"
                      >
                        {scent}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-luxury-charcoal/70 font-light italic leading-relaxed">
                    {note.description}
                  </p>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < notes.length - 1 && (
                  <div className="w-px h-8 bg-luxury-gold/30" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Experience Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-luxury-beige/50 p-8 rounded-sm"
          >
            <p className="text-lg text-luxury-charcoal/80 font-light leading-relaxed">
              Like the entrepreneurial journey itself, this fragrance evolves and deepens with time, 
              revealing new facets of its character as it settles into your unique chemistry—
              a personal signature as distinctive as your vision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScentPyramidSection;
