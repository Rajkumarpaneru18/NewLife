import PregnantWoman from "../../assets/img/hero-preg-woman.png"
const Hero = () => {

  return (
    <div className="my-10  flex justify-center items-center gap-20 flex-col">
      <div className="flex justify-between items-center gap-10">
        {/* Left Part */}
        <div className=" flex flex-col justify-center items-start gap-1 tracking-wider">
          <p className="text-3xl text-white">
            <span className="text-6xl e font-bold">Ask </span>
            <span> personalized</span>
          </p>
          <p className="py-2 text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
            Pregnency Question
          </p>
          <p className="text-xl text-white">for Your Better Health</p>
        </div>
        <div>
          <img
            src={PregnantWoman}
            alt="mother"
            className="aspect-auto w-80"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-10">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-white  text-2xl tracking-wide">
            <span>
              Be the{"  "}
              <span className="text-white text-4xl font-bold">star</span>
            </span>
            {"  "}
            <span>
              of your{"  "}
              <span className="text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
                own child
              </span>
            </span>
          </div>
          <div className="text-gray-50 text-sm  text-center w-1/2 flex justify-center items-center">
            Embark on a beautiful journey filled with joy and anticipation. As
            you become the guiding star of your own child, embrace the physical
            and emotional changes with love and excitement.
          </div>
        </div>
        <div className="ratio ratio-16x9 aspect-video w-full flex justify-center items-start">
          <iframe
            src="https://www.youtube.com/embed/xNRJwmlRBNU?si=TpoAkG9sE2Gk77Ta"
            title="YouTube video"
            allowfullscreen
            className="rounded-3xl w-4/5 h-[57vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
