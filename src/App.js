import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong>REACT WEATHER APP.</strong>
      </header>
      <Weather />
      <p>
        This App is designed by{" "}
        <a href="https://github.com/Writerdebbie">Gloria</a> using React and is
        Open-sourced on
        <a href="https://github.com/Writerdebbie"> Github</a> and hosted on{" "}
        <a href="https://app.netlify.com/teams/writerdebbie/overview">
          {" "}
          Netlify
        </a>{" "}
      </p>
    </div>
  );
}

export default App;
