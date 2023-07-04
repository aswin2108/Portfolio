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

import { TiaraImg, BroImg,PortfolioImg, Spyware } from "../../images";

export const Projects = () => {

  const projectDetails = [
    {
      img: BroImg,
      title: "BroDiary📖",
      github: "https://github.com/aswin2108/BroDiary",
      live: "https://64a46cb30ed0ff09c1ccff55--friendly-squirrel-a1b6f8.netlify.app/",
      description: "Discover yourself through words. Analyze your emotions with sentiment analysis and converse with a supportive chatbot.",
    },
    {
      img: TiaraImg,
      title: "Tiara Clothing 👔👗",
      github: "https://github.com/aswin2108/TIARA-CLOTHING",
      live: "https://64a04ed5de74513fcc7bd9f7--deft-pasca-9d0407.netlify.app/",
      description: "Discover trendy clothing items for all on this React-based e-commerce website. Browse categories, add to cart, and simulate the checkout process.",
    },
    {
      img: PortfolioImg,
      title: "Portfolio 👦🏽",
      github: "https://github.com/aswin2108/Portfolio",
      live: "",
      description: "This project showcases my skills, projects, and contributions. It acts as an online resume and a platform to highlight my accomplishments. You are here right now...!",
    },
    {
      img: Spyware,
      title: "Spyware 🕵🏻‍♂️",
      github: "https://github.com/aswin2108/Screenshot-Keylogger",
      live: "",
      description: "This Java Keylogger with Screen Scraper is a software program designed for educational purposes to demonstrate keylogging and screen scraping techniques.",
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
               <ProjectLink href={project.github} target="_blank">GitHub</ProjectLink>
               {project.live !== "" ? <ProjectLink href={project.live} target="_blank">Live</ProjectLink> : <div></div>}
             </ProjectLinks>
              </ProjectDetails>
            </ProjectTile>
          ))}
        </SectionContent>
      </SectionContainer>
    </ProjectSection>
  );
};
