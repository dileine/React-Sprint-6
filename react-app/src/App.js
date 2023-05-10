import "./App.css";

import { Buttons } from "./components/buttons/botons";
import { Escena } from "./components/escena/Escena";
import { scenes } from "./data/content";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(0);

  const previous = () => active !== 1 && setActive((active) => active - 1);
  const next = () =>
    active !== scenes.length && setActive((active) => active + 1);

  return (
    <div className="App">
      <Buttons previous={previous} next={next} />
      {scenes.map((scene) => (
        <Escena
          key={scene.id}
          text={scene.text}
          isActive={scene.id === active}
        />
      ))}
    </div>
  );
}

export default App;
