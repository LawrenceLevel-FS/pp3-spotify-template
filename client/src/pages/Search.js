import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const [categories, setCategories] = useState({});

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

      const data = await response.data;

      await setCategories(data);
      console.log(categories);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section className="bg-black h-screen text-white px-6">
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
        <h2 className="text-lg tracking-wide">Categories</h2>
      </div>
      {categories.categories.items.map((item) => {
        return (
          <div>
            <img src={item.icons[0].url} width={item.icons[0].width} alt="" />
            <h1 className="text-black">{item.name}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Search;
