import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Categories = ({ categories, getToken }) => {
  const navigate = useNavigate();
  // click category
  const linkCategory = async (item) => {
    const token = await getToken();
    await axios
      .get(item.href, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const playlistData = res.data;
        if (playlistData) {
          navigate(`${item.id}`, {
            item,
            state: { playlistData: playlistData },
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div id="categories" className="mt-4">
      <h2 className="text-lg tracking-wide mb-2 mt-6 font-medium">
        Categories
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.categories.items.map((item) => {
          return (
            <div
              onClick={() => linkCategory(item)}
              key={item.id}
              className="text-center mb-6"
            >
              <img
                src={item.icons[0].url}
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
export default Categories;
