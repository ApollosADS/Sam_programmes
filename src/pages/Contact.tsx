import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Sam Programmes</title>
        <meta 
          name="description" 
          content="Contactez nous pour une prise de rendez-vous et devis gratuit pour diagnostics et services." 
        />
      </Helmet>

      <main className="py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contactez nous pour vos besoins en électronique automobile
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Formulaire de Contact</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-[600px] rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-[600px] rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informations de Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-red-600 mr-3" />
                    <span>+229 01 61 11 50 31</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-red-600 mr-3" />
                    <span>contact@samprogrammes.bj</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-red-600 mr-3" />
                    <span>1ere rue après le commissariat de Vodjé en allant au Carrefour TOYOTA, Cotonou, Bénin</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Horaires d'ouverture</h2>
                <div className="space-y-2">
                  <p>Lundi - Vendredi: 8h00 - 18h00</p>
                  <p>Samedi: 9h00 - 15h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;