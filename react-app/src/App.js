import "./App.css";

import { Buttons } from "./components/buttons/botons";
import { Escena } from "./components/escena/Escena";
import { Welcome } from "./components/welcome/Welcome";
import { StyledBackground } from "./components/welcome/Styled-welcome";
import { scenes } from "./data/content";
import { useState } from "react";

function App() {
  const [start, setStart] = useState(true);
  const [active, setActive] = useState(0);

  const startScene = () => setStart(false);

  const previous = () => active !== 1 && setActive((active) => active - 1);
  const next = () =>
    active !== scenes.length && setActive((active) => active + 1);

  return (
    <div className="App">
      {start ? (
        <>
          <StyledBackground />
          <Welcome startScene={startScene} />
        </>
      ) : (
        <>
          <Buttons previous={previous} next={next} />
          {scenes.map((scene) => (
            <Escena
              key={scene.id}
              text={scene.text}
              isActive={scene.id === active}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
