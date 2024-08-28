import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "../components/MyContext";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState();
  const { getToken } = useContext(MyContext);
  const navigate = useNavigate();

  const getCategories = async () => {
    const token = await getToken();
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/browse/categories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      if (error.request.withCredentials === false) {
        navigate("/login");
      }
      console.log(error.request.withCredentials);
      setLoading(false);
    }
  };

  // search bar logic
  useEffect(() => {
    const getSearchResults = async () => {
      const token = await getToken();
      await axios
        .get(`https://api.spotify.com/v1/search?q=${searchValue}&type=album`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setSearchQuery(() => res.data);
          console.log(searchQuery.albums.items);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getSearchResults();
  }, [searchValue]);
  const searchSongs = (e) => {
    const { value } = e.target;
    const searchResults = document.querySelector("#search-results");
    setSearchValue(value);

    value.trim() === ""
      ? searchResults.classList.add("hidden")
      : searchResults.classList.remove("hidden");
    console.log(value);
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section className="bg-black min-h-screen text-white px-6 ">
      {/* Search bar */}
      <div className="pt-10 relative">
        <div className="bg-gray-200 flex items-center gap-4 py-1 rounded">
          <IoSearchOutline size={20} className="text-gray-500 ml-4" />
          <input
            placeholder={"search songs.."}
            className="border bg-inherit w-full text-black"
            type="text"
            onChange={searchSongs}
          />
        </div>
        <div
          id="search-results"
          className="hidden bg-red-400 w-full max-h-60 absolute mt-2 rounded overflow-scroll"
        >
          {searchQuery &&
            searchQuery.albums.items.map((music) => {
              return (
                <div key={music.id}>
                  <p>{music.artists[0].name}</p>
                </div>
              );
            })}
        </div>
      </div>

      {/* Categories */}
      <div id="categories" className="mt-4">
        <h2 className="text-lg tracking-wide mb-2 mt-6 font-medium">
          Categories
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {categories.categories.items.map((item) => {
            return (
              <div key={item.id} className="text-center mb-6">
                <a href="#">
                  <img
                    src={item.icons[0].url}
                    className="w-32 rounded-lg"
                    alt={item.name}
                  />
                  <h1 className="text-gray-400 font-bold text-sm mt-1">
                    {item.name}
                  </h1>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Search;
