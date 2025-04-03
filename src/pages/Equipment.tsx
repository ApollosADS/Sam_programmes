import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Equipment = () => {
  return (
    <>
      <Helmet>
        <title>Nos Équipements - Sam Programmes</title>
        <meta 
          name="description" 
          content="Sam Programmes utilise des appareils de pointe pour garantir des services électroniques précis, incluant Key Lost reprogrammers, multimètres et stations de soudure." 
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
            Équipements avancés pour une maintenance auto précise.
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src="/public/scanner.jpg" alt="Scanner professionnel" className="w-full h-72 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scanners Professionnels</h2>
              <p className="text-gray-600">
                Nos scanners de dernière génération permettent un diagnostic précis et complet de tous les systèmes électroniques de votre véhicule.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="/Reprogrammation_calculateur.jpg" alt="Programmateur de clés" className="w-full h-72 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Programmateurs de Clés</h2>
              <p className="text-gray-600">
                Équipements spécialisés pour la programmation et la reproduction de clés codées pour toutes les marques de véhicules.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img src="/scanneur.jpg" alt="Station de diagnostic" className="w-full h-72 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stations de Diagnostic</h2>
              <p className="text-gray-600">
                Stations complètes pour l'analyse et la réparation des systèmes électroniques automobiles.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Equipment;