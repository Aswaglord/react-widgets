import AddSub from "./components/AddSub";
import ColorChange from "./components/ColorChange";
import GrowShrink from "./components/GrowShrink";
import HideMe from "./components/HideMe";
import HowdyGoodbye from "./components/HowdyGoodbye";
import Mount from "./components/Mount";
import PushAround from "./components/PushAround"
import Rgb from "./components/Rgb";
import "./styles/main.scss"


function App() {
  return (
    <div className="App">
      <AddSub />
      <hr />
      <HowdyGoodbye />
      <hr />
      <HideMe />
      <hr />
      <GrowShrink />
      <hr />
      <PushAround />
      <hr />
      <Mount />
      <hr />
      <ColorChange />
      <hr />
      <Rgb />
      <hr />
    </div>
  );
}

export default App;
