const Header = () => {
  return (
    <header className="p-2 text-white">
      <div className="flex mt-10">
        <div className="flex p-2  items-center  ">
          <img
            src="../src/images/mother.jpg" // Replace with the path to your logo image
            alt="Logo"
            className=" justify-centre h-16 w-16 rounded-full ml-64 " // Adjust the height and width according to your logo dimensions
          />
          <span className="ml-2 text-white text-xl font-semibold">NewLife</span>
        </div>
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex space-x-40">
            <a
              href="#"
              className="hover:pointer font-semibold text-white hover:text-gray-200 transition-colors duration-300"
            >
              Possibilities
            </a>
            <a
              href="#"
              className="hover:pointer font-semibold text-white hover:text-gray-200 transition-colors duration-300"
            >
              FAQ
            </a>
            <a
              href="#"
              className="hover:pointer font-semibold text-white hover:text-gray-200 transition-colors duration-300"
            >
              Testimonials
            </a>
          </div>

          <button className="bg-green-200 hover:bg-green-300 py-1 px-3 rounded-full cursor-pointer ml-72">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
