const Login = () => {
  return (
    <section className="bg-black text-white bg min-h-screen flex pt-20 justify-center">
      <div className="flex items-center flex-col text-center bg-gray-900 w-fit h-fit mx-6 p-6 rounded-md">
        <h1 className="text-2xl mb-4 font-semibold">Welcome to LevMusica!</h1>
        <p className="mb-8">
          This App connects you with your favorite spotify music. Click the
          button below to get started
        </p>
        <a href="http://localhost:3001/auth/login">
          <button className="bg-green-600 py-2 px-6 font-bold rounded">
            Login with spotify
          </button>
        </a>
      </div>
    </section>
  );
};

export default Login;
