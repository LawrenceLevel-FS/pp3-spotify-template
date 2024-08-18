import "./index.css";
import NavBar from "./components/NavBar";
import { ContextProvider } from "./components/MyContext";

function App() {
  return (
    <ContextProvider>
      <NavBar />
    </ContextProvider>
  );
}

export default App;
