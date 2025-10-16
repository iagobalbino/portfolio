import Bio from "../../components/Bio";
import Contact from "../../components/Contact";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Projects from "../../components/ProjectsSection";

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
        <Projects />
        <Contact />
      </Container>
    </div>
  );
};

export default Home;