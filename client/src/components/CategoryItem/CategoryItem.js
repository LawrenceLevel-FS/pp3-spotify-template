import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CategoryItem = () => {
  const [categlorySongs, setCategolorySongs] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  useEffect(() => {
    const playlistItems = async (item) => {
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3001/categories/playlist",
          data: item,
        });
        const data = response.data;
        // const redirectUrl = response.data.redirectUrl;
        setCategolorySongs(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        if (error.request.withCredentials === false) {
          navigate("/login");
        }
        setLoading(false);
      }
    };
    playlistItems(item);
  }, [item, navigate]);

  // getting tracks
  const getTracks = async (track) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/categories/tracks",
        data: track,
      });
      // const redirectUrl = response.data.redirectUrl;
      const data = response.data;

      if (data) {
        navigate(`/categories/tracks/${track.id}`, {
          state: { data: data, track: track },
        });
      } else {
        console.log({ Error: "No data found" });
      }
    } catch (error) {
      if (error.request.withCredentials === false) {
        navigate("/login");
      } else {
        console.log(error);
      }
    }
  };

  if (loading) {
    return (
      <div>
        <p>...Loading</p>
      </div>
    );
  }

  return (
    <div id="categoriesItems" className="pt-1 bg-black text-white px-6">
      <h2 className="text-lg tracking-wide mb-2 mt-6 font-medium">
        {item.name}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categlorySongs &&
          categlorySongs.data.playlists.items.map((item) => {
            return (
              <div
                onClick={() => getTracks(item)}
                key={item.snapshot_id}
                className="text-center mb-6"
              >
                <img
                  src={item.images[0].url}
                  className="w-32 rounded-lg"
                  alt={item.name}
                />
                <h1 className="text-gray-400 font-bold text-sm mt-1">
                  {item.name}
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryItem;
