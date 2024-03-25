import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Licence d'université specialisée genie informatique"
            subTitle="Ecole Supérieure de Technologie Kenitra, Morocco 2022 - 2023"
            des="Compétences : Logiciel office : vmware,virtual box. · Développement web et fram · Bases de données · Réseaux informatiques · Administration et sécurité des réseaux · Virtualisation · Uml · Cloud Computing · Internet des objets et domotique · Programmation orientée objet · Gestion de projet"
          />
          <ResumeCard
            title="Diplôme de Technicien Spécialisé en Réseaux Informatiques 2020 -2022"
            subTitle="nstitut Spécialisé de Technologie Appliquée Sala al jadida 2020 - 2022"
            des="Compétences : Administration réseaux sous linux · Évolutivité des réseaux · Interconnexion de réseaux · Sécurité des réseaux informatiques · administration réseau sous Windows "
          />
          <ResumeCard
            title="Baccalauréat en sciences physiques"
            subTitle="Abi chouib doukaliAbi chouib doukali"
            des="sciences physiques"
          />
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education