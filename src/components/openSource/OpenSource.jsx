import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
} from "../../images";

import { 
    OpenSource,
    OpensourceTitle,
    ContributionUL,
    ContriUlLi,
    ContriImg,
} from "./OpenSource.styles";

import Stars from "../../images/star2.jpg";

export const OS = () => {
    const openSourceOrg = [
        {
            id: "1",
            title: "24 Pull Requests 2022",
            icon: PR24,
            colour: "#f57171"
        },
        {
            id: "2",
            title: "Hacktoberfest 2022",
            icon: Hacktoberfest,
            colour: "#65b8f7"
        },
        {
            id: "3",
            title: "Carbon Language",
            icon: Carbon,
            colour: "#faf7f7"
        },
        {
            id: "4",
            title: "@atsign-foundation",
            icon: Atsign,
            colour: "#f08d1d"
        },
        {
            id: "5",
            title: "cBioPortal",
            icon: CbioPortal,
            colour: "#faf7f7"
        },
        {
            id: "6",
            title: "GDSC",
            icon: GDSC,
            colour: "#b630f0"
        },
        {
            id: "7",
            title: "LeetCode",
            icon: LeetCode,
            colour: "#f0a422"
        },
        {
            id: "8",
            title: "OpenShipt",
            icon: OpenShift,
            colour: "#d60b15"
        },
        {
            id: "9",
            title: "Python Scripts",
            icon: PythonScripts,
            colour: "#ecf026"
        },
        {
            id: "10",
            title: "RaRe-Technologies",
            icon: RareTech,
            colour: "#3baff7"
        },
        {
            id: "11",
            title: "ScoreLabs",
            icon: ScoreLabs,
            colour: "#34fa3b"
        },
        {
            id: "12",
            title: "WebGoat",
            icon: WebGoat,
            colour: "#e8a735"
        },
      ];

      const [ref, inView] = useInView({
        triggerOnce: true, 
      });

      const riseUpAnimation = {
        hidden: { 
            y: -500, 
            opacity: 0 
        },
        visible: (id) => ({ 
            y: 0, 
            opacity: 1,
            transition: {
                delay: 0.3*id,
            }
        }),
      };

      return(
        
        <OpenSource id="opensource" style={{
            backgroundImage: `url(${Stars})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
            <OpensourceTitle>Open Source Programs & Contributions</OpensourceTitle>
            
            <ContributionUL>
            {openSourceOrg.map((org) => (
                <motion.div
                    key={org.id}
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={riseUpAnimation}
                    custom={org.id}
                    >
                <ContriUlLi key={org.title} bgcolour={org.colour}>
                    <ContriImg
                    key={org.title}
                    src={org.icon}
                    title={org.title}
                    alt="org-logo"
                    /> 
                    </ContriUlLi>
                    </motion.div>
                ))}
            </ContributionUL>
            
        </OpenSource>
      );
}