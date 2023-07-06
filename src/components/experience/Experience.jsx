import { 
    PR24,
    Atsign,
    Carbon,
    CbioPortal,
    GDSC,
    Hacktoberfest,
    LeetCode,
    OpenShift,
    PythonScripts,
    RareTech,
    ScoreLabs,
    WebGoat,
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
    OpensourceTitle,
    ContributionUL,
    ContriUlLi,
    ContriImg,
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

      const openSourceOrg = [
        {
            title: "24 Pull Requests 2022",
            icon: PR24,
            colour: "#f57171"
        },
        {
            title: "Hacktoberfest 2022",
            icon: Hacktoberfest,
            colour: "#65b8f7"
        },
        {
            title: "Carbon Language",
            icon: Carbon,
            colour: "#faf7f7"
        },
        {
            title: "@atsign-foundation",
            icon: Atsign,
            colour: "#f08d1d"
        },
        {
            title: "cBioPortal",
            icon: CbioPortal,
            colour: "#faf7f7"
        },
        {
            title: "GDSC",
            icon: GDSC,
            colour: "#b630f0"
        },
        {
            title: "LeetCode",
            icon: LeetCode,
            colour: "#f0a422"
        },
        {
            title: "OpenShipt",
            icon: OpenShift,
            colour: "#d60b15"
        },
        {
            title: "Python Scripts",
            icon: PythonScripts,
            colour: "#ecf026"
        },
        {
            title: "RaRe-Technologies",
            icon: RareTech,
            colour: "#3baff7"
        },
        {
            title: "ScoreLabs",
            icon: ScoreLabs,
            colour: "#34fa3b"
        },
        {
            title: "WebGoat",
            icon: WebGoat,
            colour: "#e8a735"
        },
      ]
      
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
                <OpensourceTitle>Open Source Programs & Contributions</OpensourceTitle>
                <ContributionUL>
                {openSourceOrg.map((org) => (
                    <ContriUlLi key={org.title} bgcolour={org.colour}>
                      <ContriImg
                        src={org.icon}
                        title={org.title}
                        alt="org-logo"
                      /> 
                    </ContriUlLi>
                  ))}
                </ContributionUL>
            </ExperienceContainer>
        </ExperienceSection>
    );
};