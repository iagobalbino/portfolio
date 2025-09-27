import './App.css'
import Bio from './components/Bio'
import Container from './components/Container'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'

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
        <ProjectCard
          year={'2025'}
          cardTitle={'Gueto Boxe'}
          cardInfo={'Site institucional para a Academia de Boxe Gueto'}
          href={'http://guetoboxe.com.br/'}
          src={'https://github.com/iagobalbino/gueto-boxe/raw/main/images/logo.png'}
        />
      </Container>


    </>
  )
}

export default App
