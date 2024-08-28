import { useContext, useState, useEffect } from "react";
import { MyContext } from "./MyContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Albums = () => {
  const [myAlbums, setMyAlbums] = useState();
  const [loading, setLoading] = useState(true);
  const { getToken } = useContext(MyContext);
  const navigate = useNavigate();

  const displayAlbums = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(
        "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = response.data;

      setMyAlbums(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.request.withCredentials === false) {
        navigate("/login");
      }
      setLoading(true);
    }
  };
  useEffect(() => {
    displayAlbums();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <article>
      <h2 className="text-4xl tracking-wide">Albums</h2>
      <div className="flex overflow-scroll mb-10">
        {myAlbums.albums.map((album) => {
          return (
            <div key={album.id}>
              <img src={album.images[0].url} width="200" height="200" alt="" />
              <p>{album.name}</p>
              <p>{album.release_date}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Albums;
