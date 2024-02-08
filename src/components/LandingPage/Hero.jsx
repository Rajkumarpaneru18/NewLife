const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        {/* Left Part */}
        <div className="text ml-32">
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-8xl text-white">Ask</span>{" "}
            <span className=" text-white">Personalized</span> <br />
            <span className=" text-6xl bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-700 px-2 py-1 rounded-md">
              Pregnency Question
            </span>
          </h1>
          <p className="text-xl mb-4 mr-56 text-white font-extrabold">
            for Your Better Health
          </p>
        </div>
        <div>
          <img
            src="../src/images/first.png"
            alt="mother"
            className="h-80 w-auto mr-32"
          />
        </div>
      </div>
      <div className="flex justify-start ml-28">
        <div>
          <div className="max-w-md bg-gradient-to-b from-purple-300 to-purple-700 text-white p-4 rounded-2xl shadow-md">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quasi facere quos veritatis ipsa? Incidunt odit rerum
              corrupti quae, temporibus velit neque culpa eum! Illum deserunt
              dignissimos reprehenderit fugiat atque..
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <div>
          <h1 className="text-white font-extrabold text-4xl">
            <span className="relative inline-block text-xl">
              Be the{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-700 px-2 py-1 rounded-md text-4xl">
                Star
              </span>
              <span className="absolute inset-x-0 bottom-0 w-3 h-1 bg-gradient-to-r from-yellow-300 to-yellow-400"></span>
            </span>{" "}
            <span className="relative inline-block text-xl">
              of your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-700 px-2 py-1 rounded-md text-4xl">
                Own Child
              </span>
            </span>
          </h1>
          <p className="text-white text-lg mt-6">
            Embark on a beautiful journey filled with joy and anticipation.
            <br /> As you become the guiding star of your own child,
            <br /> embrace the physical and emotional changes
            <br /> with love and excitement.
            <span className="absolute inset-x-0 bottom-0 w-3 h-1 bg-gradient-to-r from-yellow-300 to-yellow-400 block"></span>
          </p>
          <div className="flex justify-center">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/xNRJwmlRBNU?si=TpoAkG9sE2Gk77Ta"
                title="YouTube video"
                allowfullscreen
                style={{ width: "800px", height: "450px" }}
                className=" rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
