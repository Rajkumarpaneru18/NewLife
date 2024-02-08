const Feature = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-white font-extrabold text-4xl text-end mb-6 mr-80">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-700 px-2 py-1 rounded-md">
              NewLife
            </span>
            <span className="absolute inset-x-0 bottom-0 w-3 h-1 bg-gradient-to-r from-yellow-300 to-yellow-400"></span>
          </span>{" "}
          Web App Features
        </h1>
      </div>
      <div className="flex space-x-36 color">
        <div>
          <img
            src="../src/images/features1.png"
            alt="mobile health"
            className="justify-start ml-64 h-250 w-300"
          />
        </div>
        <div>
          <ul className="list-disc text-left ml-48 max-w-96 whitespace-normal text-lg font-semibold text-gray-800 leading-8">
            <li className="mb-4">
              Joyful Anticipation: Pregnancy is characterized by the excitement
              and anticipation of bringing new life into the world, fostering an
              atmosphere of joy and expectation.
            </li>
            <li className="mb-4">
              Physical and Emotional Changes: Expectant mothers undergo a myriad
              of physical transformations, such as weight gain and hormonal
              shifts, accompanied by a spectrum of emotional experiences ranging
              from happiness to occasional anxiety.
            </li>
            {/* Add more points as needed */}
          </ul>
        </div>
      </div>
    </div>
  );

}

export default Feature