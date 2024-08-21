import Albums from "../components/Albums";

const Home = () => {
  return (
    <section className="text-white bg-black min-h-screen px-6 pt-8">
      {/* Album Section */}
      <div>
        <Albums />
      </div>
      {/* Playlist Section */}
      <h2 className="text-4xl tracking-wide">Playlist</h2>
      {/* Artists Section */}
      <h2 className="text-4xl tracking-wide">Artists</h2>
    </section>
  );
};

export default Home;
