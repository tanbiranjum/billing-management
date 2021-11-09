import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

function AppBar() {
  return (
    
  )
}

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi my name is tanvir
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
