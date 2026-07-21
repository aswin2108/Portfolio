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
} from "../../images/index";

import { 
    OpenSource,
    OpensourceTitle,
    ContributionUL,
    ContriUlLi,
    ContriImg,
} from "./OpenSource.styles";

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

      // Each tile warps in with a springy scale-up + half spin, staggered
      // one after another so they feel like they materialise from the stars.
      const warpInAnimation = {
        hidden: {
            scale: 0,
            rotate: -180,
            opacity: 0,
        },
        visible: (i) => ({
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 180,
                damping: 12,
                delay: 0.08 * i,
            },
        }),
      };

      return(

        <OpenSource id="opensource">
            <OpensourceTitle>Open Source Programs & Contributions</OpensourceTitle>

            <ContributionUL ref={ref}>
            {openSourceOrg.map((org, index) => (
                <motion.div
                    key={org.id}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={warpInAnimation}
                    custom={index}
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                <ContriUlLi
                    bgcolour={org.colour}
                    style={{ animationDelay: `${(index % 6) * 0.35}s` }}
                >
                    <ContriImg
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