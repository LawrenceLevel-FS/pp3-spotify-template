import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="bg-black flex w-full px-4 py-2 justify-between items-center">
      <div className="text-gray-200 border rounded-full p-2">
        <IoMenu size={20} />
      </div>
      <h4 className="text-white font-bold">LevMusica</h4>
      <img
        className="w-10 h-10 rounded-full object-cover"
        src="https://placehold.co/400"
        alt=""
      />
    </nav>
  );
};
export default NavBar;
