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
  ProjectTags,
  ProjectTag,
  ProjectLinks,
  ProjectLink,
} from "./Projects.styles";

import {
  TiaraImg,
  BroImg,
  PortfolioImg,
  Spyware,
  MediaBackup,
  Payroll,
} from "../../images/index";

export const Projects = () => {
  const projectDetails = [
    {
      img: MediaBackup,
      title: "Media Backup 📷",
      github: "",
      live: "",
      tags: ["Go", "Flutter", "Dart", "Shizuku API"],
      description:
        "Turns retired Android phones into a personal, Google Photos–style media server you fully own. A Go back end runs on-device via the Shizuku API, and a Flutter client uploads and browses your photos and videos — a zero-cost private cloud from idle hardware.",
    },
    {
      img: Payroll,
      title: "Payroll System 💸",
      github: "",
      live: "",
      tags: ["C#", ".NET", "Angular", "Hangfire"],
      description:
        "An automated salary-disbursement system built on Hangfire background jobs, with real-time attendance and leave-management modules — engineered to make pay crediting hands-off and failure-resistant.",
    },
    {
      img: TiaraImg,
      title: "Tiara Clothing 👔👗",
      github: "https://github.com/aswin2108/TIARA-CLOTHING",
      live: "https://64a04ed5de74513fcc7bd9f7--deft-pasca-9d0407.netlify.app/",
      tags: ["React", "Firebase", "Stripe"],
      description:
        "A full-featured e-commerce clothing app built with React and Firebase, featuring cart/checkout state management and secure Stripe payment processing — live end to end.",
    },
    {
      img: BroImg,
      title: "BroDiary 📖",
      github: "https://github.com/aswin2108/BroDiary",
      live: "https://strong-sundae-b9e5ef.netlify.app/",
      tags: ["Python", "Sentiment Analysis", "Chatbot"],
      description:
        "Discover yourself through words. Analyze your emotions with sentiment analysis and converse with a supportive chatbot.",
    },
    {
      img: PortfolioImg,
      title: "Portfolio 👦🏽",
      github: "https://github.com/aswin2108/Portfolio",
      live: "",
      tags: ["React", "MUI", "styled-components"],
      description:
        "This project showcases my skills, projects, and contributions. It acts as an online resume and a platform to highlight my accomplishments. You are here right now...!",
    },
    {
      img: Spyware,
      title: "Spyware 🕵🏻‍♂️",
      github: "https://github.com/aswin2108/Screenshot-Keylogger",
      live: "",
      tags: ["Java", "Keylogging", "Screen Capture"],
      description:
        "A Java keylogger with a screen scraper, built for educational purposes to demonstrate keylogging and screen-scraping techniques.",
    },
  ];

  return (
    <ProjectSection id="projects">
      <SectionContainer>
        <ProjectP>PROJECTS 💻</ProjectP>
        <SectionContent>
          {projectDetails.map((project) => (
            <ProjectTile key={project.title}>
              <ProjectImg src={project.img} alt="Project tile" />
              <ProjectDetails>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectAbout>{project.description}</ProjectAbout>
                <ProjectTags>
                  {project.tags.map((tag) => (
                    <ProjectTag key={tag}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.github !== "" && (
                    <ProjectLink href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </ProjectLink>
                  )}
                  {project.live !== "" && (
                    <ProjectLink href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectDetails>
            </ProjectTile>
          ))}
        </SectionContent>
      </SectionContainer>
    </ProjectSection>
  );
};
