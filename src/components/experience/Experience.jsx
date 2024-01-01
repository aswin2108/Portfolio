import { 
    ShootingStar,
    Opengenus,
    Hyperledger,
    Chubb,
} from "../../images";

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

import Stars from "../../images/star2.jpg";

export const Experience = () => {

    const experienceDetails = [
        {
          icon: Chubb,
          orgName: "CHUBB",
          role: "Technology Intern",
          timeLine: "Dec 2023 - Present",
          description: "At this point of time I am currently undergoing training program which includes various tech stacks and will later be assigned to a particular track",
          tags: [
            {
              id: "1",
              item: "SQL",
            },
            {
              id: "2",
              item: "Angular",
            },
            {
              id: "3",
              item: "Python",
            },
            {
              id: "4",
              item: "C#",
            },
          ],
        },
        {
          icon: Hyperledger,
          orgName: "Hyperledger (LFX)",
          role: "Front End Contributor",
          timeLine: "July 2023 - Nov 2023",
          description: "I was selected as a part of LFX Mentorship program. During my time here I was a part of a team which was responsible for improving the onboarding part of hyperledger's official website.",
          tags: [
            {
              id: "1",
              item: "React.Js",
            },
            {
              id: "2",
              item: "HTML",
            },
            {
              id: "3",
              item: "CSS",
            },
            {
              id: "4",
              item: "JavaScript",
            },
            {
              id: "4",
              item: "Figma",
            },
          ],
        },
        {
          icon: Opengenus,
          orgName: "OpenGenus",
          role: "Software Engineering Intern",
          timeLine: "Dec 2022 - Nov 2023",
          description: "During my software internship at OpenGenus, I developed a robust keylogger in C++, created a comprehensive restaurant management software, developed a dynamic Snake game in C++, designed and implemented an efficient trie-based spell checker, developed a calendar system in C++, researched and authored technical articles on algorithmic problems, and contributed to the book \"Master C Programming with Practical Projects\", and currently leading as the main author for the upcoming book \"Introduction to Algorithms for System Design.\"",
          tags: [
            {
              id: "1",
              item: "C++",
            },
            {
              id: "2",
              item: "HTML",
            },
            {
              id: "3",
              item: "CSS",
            },
            {
              id: "4",
              item: "JavaScript",
            },
          ],
        },
      ];


      
    return (
        <ExperienceSection id="experience" style={{
          backgroundImage: `url(${Stars})`,
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
            <ExperienceContainer>
                <ExperienceP><StarGif src={ShootingStar}/>    EXPERIENCE </ExperienceP>
                <ExperienceContent>
                {experienceDetails.map((experience)=>(
                    <ExperienceTile key={experience.orgName}>
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