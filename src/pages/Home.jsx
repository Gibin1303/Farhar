import React from "react";

const Home = () => {
  const stages = [
    "Ideation",
    "Pre-Seed",
    "Seed",
    "Series A",
    "Series B",
    "Series C",
    "IPO",
  ];

  const gridData = [
    { title: "1", description: "Founders" },
    { title: "0", description: "Investors" },
    { title: "0 AED", description: "Raised" },
    { title: "1", description: "Live" },
    { title: "0 AED", description: "Funds" },
    { title: "1", description: "Running" },
  ];
  return (
    <div>
      <main className="bg-gray-50">
        <section className="p-5">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 text-gray-900">
              Crowdfunding Prosperity
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              reprehenderit perferendis vitae vel ipsum explicabo.
            </p>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
            {["For Founders", "For Investors"].map((title, idx) => (
              <div
                key={idx}
                className="bg-white p-8 md:p-10 rounded-xl flex flex-col items-center justify-center border border-gray-300 shadow-lg"
              >
                <h3 className="text-black text-2xl font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 text-center text-lg md:text-xl mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  beatae saepe in! Fugit aut libero reiciendis expedita
                  molestiae suscipit consectetur?
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-3">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
                    Join Group
                  </button>
                  <button className="bg-gradient-to-r from-green-400 to-yellow-400 text-white px-5 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
                    START PROJECT
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Funding Stages */}
          <div className="mt-12">
            <h3 className="text-3xl font-medium text-center mb-6 text-gray-900">
              Funding Stages
            </h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {stages.map((stage, idx) => (
                <li key={idx}>
                  <button className=" bg-white text-black px-5 py-4 border border-gray-200 rounded-xl  font-semibold shadow-md hover:scale-105 transition-transform">
                    {stage}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate Section */}
          <div className="flex flex-col items-center mt-12 gap-6">
            <p className="text-center text-gray-700 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              facilis enim accusamus sed!
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
              DONATE
            </button>
            <span className="text-center text-base text-gray-800">
              Via WhatsApp: Join
            </span>
          </div>
        </section>
      </main>
      <section className="mt-12 bg-gray-50 h-auto">
        <div className="flex flex-col justify-center p-5">
          <h1 className="text-center text-3xl font-medium mb-8">
            Platform Statistics
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {gridData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
              >
                {/* Gold text for value */}
                {/* <h3 className="text-3xl font-bold text-[#FFD700]">
                  {item.value}
                </h3> */}

                {/* Title */}
                <p className="text-3xl font-bold  text-yellow-600 mt-2">
                  {item.title}
                </p>

                {/* Description */}
                <div>
                  <p className="text-gray-600 text-center mt-1 text-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="mt-12 bg-gray-50 h-auto">
        <div className="flex flex-col justify-center p-5">
          <h1 className="text-center text-3xl font-medium mb-8">
            Join the Movement
          </h1>
          <div className="flex flex-col text-center">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              totam!
            </p>
            <div className="flex gap-3 justify-center mt-3">
              <button
                className="text-md bg-[linear-gradient(to_right,black_10%,#facc15_85%)] 
               text-white px-4 py-2 rounded-full cursor-pointer 
               transition-transform duration-300 hover:scale-110 font-bold"
              >
                INVEST
              </button>
              <button
                className="text-md bg-[linear-gradient(to_right,black_10%,#facc15_85%)] 
               text-white px-4 py-2 rounded-full cursor-pointer 
               transition-transform duration-300 hover:scale-110 font-bold"
              >
                LAUNCH
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="mt-12 bg-gray-50 h-auto">
  <div className="flex flex-col justify-center p-5">
    {/* Heading */}
    <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium mb-6 md:mb-8 text-gray-900">
      Join the Movement
    </h1>

    {/* Description */}
    <div className="flex flex-col text-center max-w-2xl mx-auto">
      <p className="text-lg sm:text-xl text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, totam!
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
        <button className="text-md sm:text-lg bg-gradient-to-r from-black/10 to-yellow-400 text-white px-6 py-3 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 font-bold">
          INVEST
        </button>
        <button className="text-md sm:text-lg bg-gradient-to-r from-black/10 to-yellow-400 text-white px-6 py-3 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 font-bold">
          LAUNCH
        </button>
      </div>
    </div>
  </div>
</section>

{/* <section className="bg-gray-50 mt-12 h-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
            {["For Founders", "For Investors"].map((title, idx) => (
              <div
                key={idx}
                className="bg-white p-8 md:p-10 rounded-xl flex flex-col items-center justify-center border border-gray-300 shadow-lg p-6 hover:scale-110"
              >
                <h3 className="text-black text-2xl font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 text-center text-lg md:text-xl mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  beatae saepe in! Fugit aut libero reiciendis expedita
                  molestiae suscipit consectetur?
                </p>
         
                 
            </div>
            ))}
          </div>
</section> */}

<section className="bg-gray-50 mt-12 h-auto">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6">
    {["For Founders", "For Investors"].map((title, idx) => (
      <div
        key={idx}
        className="bg-white p-6 sm:p-8 md:p-10 rounded-xl flex flex-col items-center justify-center border border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <h3 className="text-black text-2xl md:text-3xl font-semibold mb-3 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae
          saepe in! Fugit aut libero reiciendis expedita molestiae suscipit
          consectetur?
        </p>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default Home;
