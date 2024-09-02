import "./index.css";
import NavBar from "./components/NavBar";
import { ContextProvider } from "./components/MyContext";
import { Route, Routes } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Library from "./pages/Library";
import Login from "./pages/Login";
import Playlists from "./pages/Playlists";
import Tracks from "./components/Tracks";

function App() {
  return (
    <ContextProvider>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Playlists />} />
        <Route path="/search/tracks/:id" element={<Tracks />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
