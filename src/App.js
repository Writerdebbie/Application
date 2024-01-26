import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Berlin" />
        <footer>
          This App was designed by{" "}
          <a href="https://gloria-page.netlify.app/" target="-blank">
            Gloria Nnamdi
          </a>{" "}
          and is Open-sourced on{" "}
          <a href="https://www.github.com/writterdebbie" target="-blank">
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://www.netlify.com/writerdebbie" target="-blank">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
