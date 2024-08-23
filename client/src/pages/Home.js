import Albums from "../components/Albums";
import Artist from "../components/Artists";

const Home = () => {
  return (
    <section className="text-white bg-black min-h-screen px-6 pt-8">
      {/* Album Section */}
      <div>
        <Albums />
      </div>
      {/* Artists Section */}
      <div>
        <Artist />
      </div>
      <h2 className="text-4xl tracking-wide">Playlist</h2>
      {/* Playlist Section */}
      <h2 className="text-4xl tracking-wide">Artists</h2>
    </section>
  );
};

export default Home;
