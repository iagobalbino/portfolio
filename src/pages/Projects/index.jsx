import Container from "../../components/Container";
import ProjectsSection from "../../components/ProjectsSection";
import ProjectCard from "../../components/ProjectsSection/ProjectCard";
import Title from "../../components/Title";

const Projects = () => {

  return (
    <Container>
      <Title
        title={'Projetos'}
      />
      <ProjectsSection />
    </Container>
  );
};

export default Projects;
