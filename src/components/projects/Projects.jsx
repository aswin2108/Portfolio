import {
  ProjectSection,
  SectionContainer,
  SectionContent,
  ProjectP,
  ProjectTile,
  ProjectImg,
  ProjectTitle,
  ProjectAbout,
  ProjectDetails,
  ProjectLinks,
  ProjectLink
} from "./Projects.styles";

import { TiaraImg, BroImg,PortfolioImg } from "../../images";

export const Projects = () => {

  const projectDetails = [
    {
      img: BroImg,
      title: "BroDiary📖",
      github: "d",
      live: "",
      description: "Brodiary is an amssjioihweofihwofhfowh hdshsodh dcosdc sdcsdisd ochsdhsc   d XIH  SX I DIWEDKA K ikv il",
    },
    {
      img: TiaraImg,
      title: "Tiara Clothing 👔👗",
      github: "d",
      live: "ddd",
      description: "Brodiary is an amssjioihweofihwofhfowh hdshsodh dcosdc sdcsdisd ochsdhsc   d XIH  SX I DIWEDKA K ikv il",
    },
    {
      img: PortfolioImg,
      title: "Portfolio 👦🏽",
      github: "d",
      live: "ddd",
      description: "Brodiary is an amssjioihweofihwofhfowh hdshsodh dcosdc sdcsdisd ochsdhsc   d XIH  SX I DIWEDKA K ikv il",
    },
    {
      img: PortfolioImg,
      title: "Spyware 🕵🏻‍♂️",
      github: "d",
      live: "ddd",
      description: "Brodiary is an amssjioihweofihwofhfowh hdshsodh dcosdc sdcsdisd ochsdhsc   d XIH  SX I DIWEDKA K ikv il",
    },
  ];

  return (
    <ProjectSection id="projects">
      <SectionContainer>
      <ProjectP>PROJECTS 💻</ProjectP>
        <SectionContent>
          {projectDetails.map((project)=>(
            <ProjectTile key={project.title}>
              <ProjectImg src={project.img} alt="Project tile"/>
              <ProjectDetails>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectAbout>{project.description}</ProjectAbout>
              <ProjectLinks>
               <ProjectLink href={project.github}>GitHub</ProjectLink>
               {project.live !== "" ? <ProjectLink href={project.live}>Live</ProjectLink> : <div></div>}
             </ProjectLinks>
              </ProjectDetails>
            </ProjectTile>
          ))}
        </SectionContent>
      </SectionContainer>
    </ProjectSection>
  );
};
