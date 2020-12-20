import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import {Form} from './components/Form'


class App extends Component{
  render(){
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}


export default App;
