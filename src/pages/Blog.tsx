import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Sam Programmes</title>
        <meta 
          name="description" 
          content="Suivez les dernières actualités et conseils de Sam Programmes sur l'entretien électronique automobile, la reprogrammation et les diagnostics de véhicules." 
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
            Conseils et actualités sur l'électronique automobile
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.article
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800"
                alt="Diagnostic automobile"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  L'importance du diagnostic électronique régulier
                </h2>
                <p className="text-gray-600 mb-4">
                  Découvrez pourquoi un diagnostic régulier est essentiel pour la santé de votre véhicule.
                </p>
                <a href="#" className="text-red-600 hover:text-red-700 font-medium">
                  Lire la suite →
                </a>
              </div>
            </motion.article>

            <motion.article
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1589147310013-c88f1f23d685?auto=format&fit=crop&q=80&w=800"
                alt="Calculateur automobile"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Les avantages de la reprogrammation du calculateur
                </h2>
                <p className="text-gray-600 mb-4">
                  Comment la reprogrammation peut améliorer les performances de votre véhicule.
                </p>
                <a href="#" className="text-red-600 hover:text-red-700 font-medium">
                  Lire la suite →
                </a>
              </div>
            </motion.article>

            <motion.article
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800"
                alt="Clé de voiture"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Sécurité : l'importance des clés codées
                </h2>
                <p className="text-gray-600 mb-4">
                  Tout ce que vous devez savoir sur les systèmes de clés codées modernes.
                </p>
                <a href="#" className="text-red-600 hover:text-red-700 font-medium">
                  Lire la suite →
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;