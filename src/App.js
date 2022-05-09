import './App.css';
import Header from './hero/header'
import Hero from './hero/hero'
import Info from './infouser/user'
import Learn from './learn/learn'
import Vebinar from './vebinars/vebinar'
import Cource from './cource/cource'
import Ourapps from './ourapps/ourapp';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Info/>
      <Learn/>
      <Vebinar/>
      <Cource/>
      <Ourapps/>
      <Footer/>
    </div>
  );
}


export default App;

