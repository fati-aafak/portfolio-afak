import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="KRILI CAR"
          des=" Le projet consiste à développer un site web permettant aux utilisateurs de comparer les prix de location de voitures. Il comprendra une interface conviviale, une base de données de prix, un système de comparaison, des détails d'offres, un système de réservation en ligne , des avis d'utilisateurs .
          "
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Artisan Atlas is a Moroccan Artisans Marketplace Project."
          src={projectTwo}
        />
        <ProjectsCard
          title="site web ark-x"
          des=" formation ark-x"
          src={projectThree}
        />
          <ProjectsCard
          title="WeLcome to atlaS Fitness"
          des=" WeLcome to atlaS Fitness"
          src={projectFour}
        />
         <ProjectsCard
          title="Travel"
          des=" We Provide You Best Morocco Sightseeing Tours"
          src={projectFive}
        />
        
      </div>
    </section>
  );
}

export default Projects