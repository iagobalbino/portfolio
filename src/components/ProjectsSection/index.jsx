import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledProjectsSection = styled.section`
  padding: 25.6px;

  a {
    margin: 6.4px 0;
    color: #000000de;
  }

  .all-projects {
    margin-top: 3.2rem;
  }

`;

const ProjectsSection = () => {
  return (
    <StyledProjectsSection>
      <ProjectCard
        year={'2025'}
        cardTitle={'Gueto Boxe'}
        cardInfo={'Site institucional para a Academia de Boxe Gueto'}
        href={'https://guetoboxe.com.br/'}
        src={'src/assets/gueto_boxe.png'}
      />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;