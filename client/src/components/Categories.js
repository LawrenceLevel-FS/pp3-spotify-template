import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCateglories = async () => {
      try {
        const response = await axios("http://localhost:3001/categories");
        const data = await response.data;
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    getCateglories();
  }, []);

  // click category
  const linkCategory = async (item) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/categories",
        data: item,
      });
      const redirectUrl = response.data.redirectUrl;
      // Redirect to the new URL
      if (redirectUrl) {
        navigate(redirectUrl, { state: { item: item } });
      } else {
        console.error("Redirect URL not found");
      }
    } catch (error) {
      console.log(error.message);
      if (error.request.withCredentials === false) {
        navigate("/login");
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
    <div id="categories" className="mt-4">
      <h2 className="text-lg tracking-wide mb-2 mt-6 font-medium">
        Categories
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categories &&
          categories.categories.items.map((item) => {
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
