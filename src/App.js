import "./App.css";
import { Navbar } from "./frontend/components/Navbar/Navbar";
import { Routing } from "./frontend/Routing/Routing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
