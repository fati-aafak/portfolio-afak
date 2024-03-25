import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
       
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
          
          
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Stage enseignante informatique"
            result="Success"
            des="En tant que stagiaire en enseignement informatique, j'ai l'opportunité d'assister et d'accompagner des enseignants dans la conception et la mise en œuvre de programmes pédagogiques en informatique"
          />
          <ResumeCard
            title="Stage ISTA"
            result="Success"
            des="Prendre en charge le support technique auprés des utilisateurs
            Apporter des solutions aux différents problèmes d'utilisation moyenne informatiques"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
