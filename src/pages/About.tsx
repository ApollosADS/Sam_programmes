import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Helmet>
        <title>À propos de Sam Programmes</title>
        <meta 
          name="description" 
          content="Découvrez Sam Programmes, une entreprise spécialisée en électronique automobile au Bénin depuis 2017. Nous allions expertise technique et satisfaction client." 
        />
      </Helmet>

      <main className="py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Votre expert en électronique automobile au Bénin depuis 2017
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Histoire</h2>
                <p className="text-gray-600">
                  Depuis 2017, Sam Programmes s'est établi comme un leader dans le domaine de l'électronique automobile au Bénin. 
                  Notre engagement envers l'excellence et l'innovation nous a permis de devenir une référence dans le secteur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Mission</h2>
                <p className="text-gray-600">
                  Notre mission est d'offrir des solutions électroniques automobiles de haute qualité, 
                  en combinant expertise technique et service client exceptionnel pour garantir la satisfaction totale de nos clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos Valeurs</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Excellence :</span>
                    Nous visons l'excellence dans chaque intervention
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Innovation :</span>
                    Nous restons à la pointe de la technologie
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Intégrité :</span>
                    Nous travaillons avec honnêteté et transparence
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Notre Vision</h2>
                <p className="text-gray-600">
                  Nous aspirons à devenir le leader incontesté de l'électronique automobile en Afrique de l'Ouest, 
                  en établissant de nouveaux standards d'excellence et d'innovation dans notre domaine.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;