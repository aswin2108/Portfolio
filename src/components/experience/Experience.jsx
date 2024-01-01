import { 
    ShootingStar,
    Opengenus,
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
          icon: Opengenus,
          orgName: "OpenGenus",
          role: "Software Engineering Intern",
          timeLine: "Jan 2020 - Present",
          description: "During my software internship at OpenGenus, I developed a robust keylogger in C++, created a comprehensive restaurant management software, developed a dynamic Snake game in C++, designed and implemented an efficient trie-based spell checker, developed a calendar system in C++, researched and authored technical articles on algorithmic problems, and contributed to the book \"Master C Programming with Practical Projects\", and currently leading as the main author for the upcoming book \"Master Data Structure Problems.\"",
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