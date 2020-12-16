import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Form from './components/Form'

var userIsRegistered = true;

function renderConditionally(){
  if (isLoggedIn === true){
    return <h1>HALLO!</h1>:
  }
  else {
    <form className="form">
      <Input type="text"placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit"> Login </button>
    </form>
  }
}

function App() {
  return (
    <>
      <Header/>
      <main>
          <Container>
            <h2>Mau buat surat? </h2>
            <Form isRegistered={userIsRegistered} />
          </Container>
         
      </main>
     <Footer/>
    </>
  );
}

export default App;
