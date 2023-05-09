import "./App.css";
import { Escena } from "./components/Escena";
import { sceneText } from "./data/content";

function App() {
  return (
    <div className="App">
      {sceneText.map((text, index) => (
        <Escena key={index} text={text} />
      ))}
    </div>
  );
}

export default App;
