import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-4xl font-bold">Stage operationnel Développeur MERN</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Gestion de Base de Données "
            subTitle="ARK-X Talent Factory Jan. 2024 - Juin 2024"
            result="Rabat"
            des="Conception et maintenance de bases de données MongoDB robustes."
          />
          <ResumeCard
            title="Développement Back-End "
            subTitle="ARK-X Talent Factory Jan. 2024 - Juin 2024"
            result="Rabat"
            des="Mise en place de serveurs et d'API avec Node.js et Express.js."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="ARK-X Talent Factory Jan. 2024 - Juin 2024"
            result="Rabat"
            des="Conception et développement de l'interface utilisateur (UI) avec React.js."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
