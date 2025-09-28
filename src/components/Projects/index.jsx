import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledProjects = styled.section`
  padding: 25.6px;

  h6 {
    margin: 6.4px 0;
  }
`;

const Projects = () => {
  return (
    <StyledProjects>
      <h6>Projetos</h6>
      <ProjectCard
        year={'2025'}
        cardTitle={'Gueto Boxe'}
        cardInfo={'Site institucional para a Academia de Boxe Gueto'}
        href={'http://guetoboxe.com.br/'}
        src={'https://github.com/iagobalbino/gueto-boxe/raw/main/images/logo.png'}
      />
    </StyledProjects>
  );
};

export default Projects;