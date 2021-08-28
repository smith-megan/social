import './App.css';
import Main from './Components/Main.js'
import Signin from './Components/Signin.js'
import Create from './Components/Create.js'
import Email from './Components/Email/Email.js'
function App() {
  return (
    <div className="App">
      <Main/>
      <Signin />
      <Create />
      <Email />
    </div>
  );
}

export default App;
