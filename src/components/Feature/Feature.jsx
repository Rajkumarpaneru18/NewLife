import FeatureImage from "../../assets/img/feature.png";

const Feature = () => {
  return (
    <div className="w-full flex justify-center items-center gap-20">
      <div className="w-2/5">
        <img src={FeatureImage} />
      </div>

      <div className="w-2/5  text-white flex flex-col gap-6">
        <div className="text-4xl font-black flex flex-col justify-center items-start">
          <div>
            NewLife
            <br />
            <span className=" text-center bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
              {" "}
              Pregnency Question
            </span>
          </div>
          <span>Web App</span>
        </div>
        <ul className="ml-5 list-disc text-gray-400 list-outside flex gap-5 flex-col text-lg">
          <li className="">
            Pregnancy brings anticipation and excitement as new life is
            anticipated, creating an atmosphere of joy.
          </li>
          <li className="">
            Expectant mothers experience physical changes such as weight gain
            and hormonal shifts, alongside a range of emotions from joy to
            occasional
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feature;
