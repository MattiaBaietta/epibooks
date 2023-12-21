import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Mynav';
import Myfooter from './components/Myfooter';
import Container from 'react-bootstrap/Container';
import Jumbo from './components/Jumbotron';

import fantasy from './data/fantasy.json'
import BookList from './components/BookList';


function App() {
  return (
    <div>
      <Container>
        <Navigation />
        
        <Jumbo />
        <BookList arraylibri={fantasy}/>
        <Myfooter />
      </Container>
    </div>

    
  );
}

export default App;
