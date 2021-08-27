import './App.css';
import Main from './Components/Main.js'
import Signin from './Components/Signin.js'
import Create from './Components/Create.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Main/>
      <Signin />
      <Create />
      </header>  
      
    </div>
  );
}

export default App;
