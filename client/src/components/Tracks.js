import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "./MyContext";
import axios from "axios";

const Tracks = () => {
  const location = useLocation();
  const [mySong, setMySong] = useState();
  const { getToken } = useContext(MyContext);

  const { song } = location.state || {};
  const displayTracks = async (item) => {
    const token = await getToken();
    try {
      const response = await axios.get(item.tracks.href, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMySong(song);
    console.log(mySong);
  }, []);
  return (
    <section>
      <h1>{mySong.name}</h1>
      {/* Display Tracks */}
    </section>
  );
};

export default Tracks;
