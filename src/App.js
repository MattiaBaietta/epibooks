import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Mynav';
import Myfooter from './components/Myfooter';
import Container from 'react-bootstrap/Container';
import Jumbo from './components/Jumbotron';
import Libri from './components/AllTheBooks';

function App() {
  return (
    <div>
      <Container>
        <Navigation />
        <Jumbo />
        <Libri />
        <Myfooter />
        
      </Container>
    </div>

    
  );
}

export default App;
