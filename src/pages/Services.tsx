import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Nos Services - Sam Programmes</title>
        <meta 
          name="description" 
          content="Sam Programmes offre des services complets en électronique automobile : diagnostic scanner, programmation de calculateurs, et plus encore." 
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
            Nos Services Professionnels
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Diagnostic Scanner</h2>
                <p className="text-gray-600 mb-4">
                  Analyse complète et détaillée de votre véhicule pour identifier avec précision tout dysfonctionnement électronique.
                </p>
                <a href="/contact" className="text-red-600 hover:text-red-700 font-medium">
                  En savoir plus →
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Programmation de Calculateurs</h2>
                <p className="text-gray-600 mb-4">
                  Optimisation des performances de votre véhicule grâce à une programmation experte des calculateurs.
                </p>
                <a href="/contact" className="text-red-600 hover:text-red-700 font-medium">
                  En savoir plus →
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Clés Codées</h2>
                <p className="text-gray-600 mb-4">
                  Programmation et reproduction de clés codées pour tous types de véhicules avec les dernières technologies.
                </p>
                <a href="/contact" className="text-red-600 hover:text-red-700 font-medium">
                  En savoir plus →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;