import { DeskSetup, RoundedText, WomanTechnologist } from "../../images";
import {
  AboutContent,
  ContentImage,
  ContentText,
  ImageSideContainer,
  SectionContainer,
  SectionWrapper,
  WorkEmoji,
  ContentTextH3,
  ContentTextH4,
  ContentTextP,
  ImageSideSpan,
  ImageSideSpanImage,
} from "./AboutMe.styles";

export const AboutMe = () => {
  return (
    <SectionWrapper id="about">
      <SectionContainer>
        <AboutContent>
          <ImageSideContainer>
            
            <ContentImage src={DeskSetup} alt="mee" />
          </ImageSideContainer>
          <ContentText>
            <ContentTextH3>About me</ContentTextH3>
            <ContentTextH4>
              Context
            </ContentTextH4>
            <ContentTextP>
              About content
            </ContentTextP>
          </ContentText>
        </AboutContent>
      </SectionContainer>
    </SectionWrapper>
  );
};
