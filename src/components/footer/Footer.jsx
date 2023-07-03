import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterWrapper,
  FooterText,
  SectionContainer,
  FooterRc,
  FooterRcSocials,
  FooterRcSocialIcon,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <SectionContainer>
        <FooterRc>
          <FooterText>
            Did you find this website awesome? Give it a star 🌟 on GitHub!
          </FooterText>
          <FooterRcSocials>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aswin2108/Portfolio"
            >
              <FooterRcSocialIcon>
                <FaGithub />
              </FooterRcSocialIcon>
            </a>
          </FooterRcSocials>
        </FooterRc>
      </SectionContainer>
    </FooterWrapper>
  );
};
