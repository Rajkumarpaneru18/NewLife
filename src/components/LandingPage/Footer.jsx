const Footer = () => {
  return (
    <footer className="p-2 text-white h-40 bg-gradient-to-r from-purple-500 to-violet-800">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex">
          <img
            src="../src/images/mother.jpg" // Replace with the path to your logo image
            alt="Logo"
            className=" h-16 w-16 rounded-full ml-64 mt-10" // Adjust the height and width according to your logo dimensions
          />
          <span className="ml-2 mr-44 items-center mt-14">NewLife</span>
        </div>
        <div className="flex space-x-20 items-center mt-10">
          <a href="#" className="hover:pointer">
            Home
          </a>
          <a href="#" className="hover:pointer">
            Features
          </a>
          <a href="#" className="hover:pointer">
            Testimonials
          </a>
          <a href="#" className="hover:pointer">
            Hero
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer