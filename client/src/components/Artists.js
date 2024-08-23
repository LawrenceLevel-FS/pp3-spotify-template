import { useContext, useState, useEffect } from "react";
import { MyContext } from "./MyContext";
import axios from "axios";

const Artist = () => {
  const [Artists, setArtists] = useState();
  const [loading, setLoading] = useState(true);
  const { getToken } = useContext(MyContext);

  const displayArtists = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(
        "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = response.data;
      console.log(data);

      setArtists(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    displayArtists();
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
      <h2 className="text-4xl tracking-wide">Artists</h2>
      <div className="flex overflow-scroll mb-10 mt-4 gap-2 bg-red-600">
        {Artists.artists.map((artist) => {
          return (
            <div key={artist.id}>
              <img
                className="object-cover min-h-28 min-w-28"
                src={artist.images[0].url}
                alt=""
              />
              <p>{artist.name}</p>
              <p>{artist.release_date}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Artist;
