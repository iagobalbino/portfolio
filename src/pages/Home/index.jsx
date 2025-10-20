import { Link } from "react-router";
import Bio from "../../components/Bio";
import Contact from "../../components/Contact";
import Container from "../../components/Container";
import MenuLink from "../../components/MenuLink";
import ProjectsSection from "../../components/ProjectsSection";

const Home = () => {
  return (
    <div>
      <Container>
        <Bio
          img={'https://avatars.githubusercontent.com/u/42919327?v=4'}
          alt={'Foto Iago Balbino'}
          title={'Oi, eu sou um desenvolvedor'}
          bio={'Oi, me chamo Iago, e sou um profissional de TI em transição de carreira. Atualmente busco ganhar experiência como desenvolvedor freelance, abaixo estão alguns dos meus projetos.'}
        />

        <h6 style={{ fontSize: '1.2rem', padding: '25.6px', color: '#000000de' }}>Projetos</h6>
        <ProjectsSection />
        <div style={{ marginTop: '3.2rem', padding: '25.6px' }}>
          <Link style={{ margin: '6.4px 0', color: '#000000de' }} to={'/projects'}>Ver todos os projetos →</Link>
        </div>
        <Contact />
      </Container>
    </div>
  );
};

export default Home;