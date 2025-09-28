import './App.css'
import Bio from './components/Bio'
import Container from './components/Container'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Container>
        <Header
          itens={['Iago Balbino', 'Projetos', 'Sobre', 'Redes sociais']}
        />
        <Bio
          title={'Eu crio sistemas'}
          bio={'Oi, me chamo Iago, e sou um profissional de TI em transição de carreira. Atualmente busco ganhar experiência como desenvolvedor freelance, abaixo estão alguns dos meus projetos.'}
        />
        <Projects />
      </Container>


    </>
  )
}

export default App
