import Bio from "../Bio";
import Container from "../Container";
import Header from "../Header";
import Projects from "../ProjectsSection";

const Home = () => {
  return (
    <div>
      <Container>
        <Header
          name={'Iago Balbino'}
          itens={['Projetos', 'Sobre', 'Redes sociais']}
        />
        <Bio
          img={'https://avatars.githubusercontent.com/u/42919327?v=4'}
          alt={'Foto Iago Balbino'}
          title={'Eu crio sistemas'}
          bio={'Oi, me chamo Iago, e sou um profissional de TI em transição de carreira. Atualmente busco ganhar experiência como desenvolvedor freelance, abaixo estão alguns dos meus projetos.'}
        />
        <Projects />
      </Container>
    </div>
  );
};

export default Home;