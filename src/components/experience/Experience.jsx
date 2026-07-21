import { 
    ShootingStar,
    Opengenus,
    Hyperledger,
    Chubb,
} from "../../images/index";

import { 
    ExperienceSection, 
    ExperienceContainer, 
    ExperienceP, 
    StarGif,
    ExperienceContent,
    ExperienceTile, 
    ExperienceImg, 
    ExperienceDetails, 
    ExperienceOrg, 
    ExperienceRole,
    ExperienceDes, 
    ExperienceSkill, 
    SkillTag,
} from "./Experience.styles";

export const Experience = () => {

    const experienceDetails = [
        {
          icon: Chubb,
          orgName: "CHUBB",
          role: "Software Development Engineer",
          timeLine: "Jul 2024 - Present",
          description: "I own full-stack features on a large enterprise insurance platform (Duck Creek) — designing, developing, and optimizing C#/.NET back-end components from requirements through testing, code review, and integration. Facing a manual, error-prone release process, I engineered a C#/.NET automation tool that cut manual processing time by 87% and earned formal recognition from leadership, and built a screenshot utility that automates QA evidence capture, saving ~1.5 hours per regression cycle and now adopted by multiple external teams.",
          tags: [
            { id: "1", item: "C#" },
            { id: "2", item: ".NET" },
            { id: "3", item: "Duck Creek" },
            { id: "4", item: "SQL" },
            { id: "5", item: "Automation" },
          ],
        },
        {
          icon: Chubb,
          orgName: "CHUBB",
          role: "Software Engineering Intern",
          timeLine: "Dec 2023 - Jun 2024",
          description: "Trained intensively in .NET and Angular (TypeScript) and applied both to full-stack development of internal applications, delivering a capstone project that integrated a .NET REST back end with an Angular front end.",
          tags: [
            { id: "1", item: ".NET" },
            { id: "2", item: "Angular" },
            { id: "3", item: "TypeScript" },
            { id: "4", item: "SQL" },
          ],
        },
        {
          icon: Hyperledger,
          orgName: "Hyperledger (LFX)",
          role: "Front End Contributor",
          timeLine: "Jul 2023 - Nov 2023",
          description: "Selected for the LFX Mentorship program, I worked with a team responsible for improving the onboarding experience on Hyperledger's official website under the Linux Foundation.",
          tags: [
            { id: "1", item: "React.Js" },
            { id: "2", item: "HTML" },
            { id: "3", item: "CSS" },
            { id: "4", item: "JavaScript" },
            { id: "5", item: "Figma" },
          ],
        },
        {
          icon: Opengenus,
          orgName: "OpenGenus",
          role: "Software Intern (C++)",
          timeLine: "Jan 2023 - Dec 2023",
          description: "Built developer utilities in C++ — including a trie-based spell-checker — applying core data structures and algorithms with attention to time and space complexity. Researched and authored technical articles on algorithms and systems topics with 15K+ views, and was recognized among the top 1% of interns for performance.",
          tags: [
            { id: "1", item: "C++" },
            { id: "2", item: "DSA" },
            { id: "3", item: "Technical Writing" },
          ],
        },
      ];


      
    return (
        <ExperienceSection id="experience">
            <ExperienceContainer>
                <ExperienceP><StarGif src={ShootingStar}/>    EXPERIENCE </ExperienceP>
                <ExperienceContent>
                {experienceDetails.map((experience)=>(
                    <ExperienceTile key={`${experience.orgName}-${experience.role}`}>
                      <ExperienceImg src={experience.icon} />
                      <ExperienceDetails>
                        <ExperienceOrg>{experience.orgName}</ExperienceOrg>
                        <ExperienceRole>{experience.role} ({experience.timeLine})</ExperienceRole>
                        <ExperienceDes>{experience.description}</ExperienceDes>
                        <ExperienceSkill>
                          {experience.tags.map((tag)=>(
                            <SkillTag key={tag.id}>{tag.item}</SkillTag>
                          ))}
                        </ExperienceSkill>
                      </ExperienceDetails>
                    </ExperienceTile>
                ))}
                </ExperienceContent>
                
            </ExperienceContainer>
        </ExperienceSection>
    );
};