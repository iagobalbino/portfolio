import { Link } from "react-router";
import Container from "../../components/Container";
import MenuLink from "../../components/MenuLink";
import ProjectsSection from "../../components/ProjectsSection";
import Title from "../../components/Title";

const Projects = () => {

  return (
    <Container>
      <Title
        title={'Projetos'}
      />
      <ProjectsSection />
      <div style={{ marginTop: '3.2rem', padding: '25.6px' }}>
        <a style={{ margin: '6.4px 0', color: '#000000de' }} href={'https://github.com/iagobalbino?tab=repositories'} target="_blank">Ver todos os projetos no Github →</a>
      </div>
    </Container>
  );
};

export default Projects;
