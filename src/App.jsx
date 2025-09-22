import './App.css'
import Bio from './components/Bio'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Bio
        img={"https://avatars.githubusercontent.com/u/42919327?v=4"}
        alt={"Iago Balbino"}
        h2={"Eu crio sistemas"}
        bio={"Desenvolvedor Rio de Janeiro"}
      />
    </>
  )
}

export default App
