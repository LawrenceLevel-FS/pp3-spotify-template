import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      const token = await axios.get("http://localhost:3001/auth/getToken");
      const tokenData = token.data.token;

      const response = await axios.get(
        "https://api.spotify.com/v1/browse/categories",
        {
          headers: {
            Authorization: `Bearer ${tokenData[0].accessToken}`,
          },
        }
      );

      const data = response.data;
      setCategories(data);
      setLoading(false);
      console.log(categories);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
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
    <section className="bg-black min-h-screen text-white px-6">
      {/* Search bar */}
      <div className="pt-10">
        <div className="bg-gray-200 flex items-center gap-4 py-1 rounded">
          <IoSearchOutline size={20} className="text-gray-500 ml-4" />
          <input
            placeholder={"search songs.."}
            className="border bg-inherit w-full"
            type="text"
          />
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
