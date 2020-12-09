import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import TextInput from "./TextInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          On the fly change.
          <br /> Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button id="myCustomId" className="buttonClass" />
        <br />
        <TextInput />
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
