import "./index.css";
import NavBar from "./components/NavBar";
import { ContextProvider } from "./components/MyContext";
import { Route, Routes } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Library from "./pages/Library";

function App() {
  return (
    <ContextProvider>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/library" element={<Library />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
