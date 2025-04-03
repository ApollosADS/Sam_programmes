import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PenTool as Tool, Shield, Clock, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Tool className="h-8 w-8 text-red-600" />,
      title: 'Diagnostic Précis',
      description: 'Équipements de pointe pour un diagnostic complet de votre véhicule'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Service Fiable',
      description: 'Une équipe d\'experts qualifiés à votre service'
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: 'Intervention Rapide',
      description: 'Solutions rapides et efficaces pour votre véhicule'
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: 'Expertise Reconnue',
      description: 'Plus de 5 ans d\'expérience dans l\'électronique automobile'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Acceuil - Sam programmes</title>
        <meta name="description" content="Depuis 2017, Sam Programmes fournit des services d'électronique automobile à la pointe de la technologie au Bénin, incluant diagnostics, reprogrammation de calculateurs et plus. Contactez-nous pour un service fiable et expert." />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center md:text-left">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Mieux ça Ronfle, Mieux la Destination est sûre !
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Solutions professionnelles pour l'électronique de votre véhicule
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a 
                  href="/contact" 
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Prendre Rendez-vous
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Pourquoi Choisir Sam Programmes ?</h2>
              <p className="mt-4 text-xl text-gray-600">Des services d'excellence pour votre véhicule</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin d'un diagnostic pour votre véhicule ?
            </h2>
            <p className="text-xl text-white mb-8">
              Contactez-nous dès aujourd'hui pour un service professionnel et rapide
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;