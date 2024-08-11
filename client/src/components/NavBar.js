const NavBar = () => {
  return (
    <nav className="bg-black flex h-screen w-1/4">
      <div>
        <div id="user-card">
          <div
            id="user-image"
            className="bg-white w-10 h-10 rounded-full"
          ></div>
          <h4>First Name</h4>
        </div>
        <ul>
          <li>Songs</li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
