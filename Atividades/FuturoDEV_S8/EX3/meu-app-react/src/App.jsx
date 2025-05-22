import { GnocchiList } from "./components/GnocchiList/GnocchiList";
import { SauceList } from "./components/SauceList/SauceList";

function App() {
  return (
    <div className="App">
      <h1>Menu de Gnocchi</h1>
      <GnocchiList />
      <SauceList />
    </div>
  );
}

export default App;
