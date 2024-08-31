import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../components/MyContext";
import axios from "axios";

const Playlists = () => {
  const { getToken } = useContext(MyContext);
  const [playlist, setPlaylist] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { playlistData } = location.state || {};

  useEffect(() => {
    const getPlaylist = async () => {
      const token = await getToken();
      try {
        const response = await axios.get(playlistData.href + "/playlists", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = response.data;

        setPlaylist(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPlaylist();
  }, [getToken, playlistData.href]);

  if (loading) {
    return (
      <div>
        <h1>Loading... </h1>
      </div>
    );
  }

  return (
    <section className="bg-black text-white">
      <h1 className="ml-6 text-lg tracking-wide mb-2 pt-6 font-medium">
        {playlistData.name}
      </h1>
      <div className="grid grid-cols-3 gap-3 mx-6">
        {playlist.playlists.items.map((songs) => {
          return (
            <div key={`${songs.id}343wsfdscdcsds`} className="text-center mb-6">
              <img
                src={songs.images[0].url}
                className="w-32 rounded-lg"
                alt={songs.name}
              />
              <h1 className="text-gray-400 font-bold text-sm mt-1">
                {songs.name}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Playlists;
