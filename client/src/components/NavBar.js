import {
  IoMenu,
  IoHeart,
  IoSearchOutline,
  IoHome,
  IoLibrary,
  IoClose,
} from "react-icons/io5";
import { MyContext } from "./MyContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const { toggleMenu, setToggleMenu } = useContext(MyContext);

  return (
    <nav className="bg-black flex w-full px-4 py-2 justify-between items-center">
      {/* Menu */}
      {toggleMenu && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="bg-black text-white absolute px-6 py-2 rounded-lg top-2 "
        >
          <IoClose
            onClick={() => setToggleMenu(!toggleMenu)}
            size={30}
            className="mb-8 "
          />
          <li className="flex items-center gap-2 mb-6 text-2xl font-thin">
            <IoHome className="mr-6" /> Home
          </li>
          <li className="flex items-center gap-2 mb-6 text-2xl font-thin">
            <IoSearchOutline className="mr-6" /> Search
          </li>
          <li className="flex items-center gap-2 mb-6 text-2xl font-thin">
            <IoHeart className="mr-6" /> Favorite
          </li>
          <li className="flex items-center gap-2 mb-6 text-2xl font-thin">
            <IoLibrary className="mr-6" /> Library
          </li>
        </motion.ul>
      )}
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className="text-gray-200 border rounded-full p-2"
      >
        <IoMenu size={20} />
      </div>
      {/* LOGO */}
      <h4 className="text-white font-bold">LevMusica</h4>
      {/* Profile Image */}
      <img
        className="w-10 h-10 rounded-full object-cover"
        src="https://placehold.co/400"
        alt=""
      />
    </nav>
  );
};
export default NavBar;
