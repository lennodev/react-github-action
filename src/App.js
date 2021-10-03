import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! <br />
          This repository aims to demonstrate the capabilities of GitHub actions. <br />
          The React application will be deployed to GitHub Pages once <br />
          the source code committed and pushed to main branch.
        </p>
        <a
          className="App-link"
          href="https://github.com/lennodev/react-github-action"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
