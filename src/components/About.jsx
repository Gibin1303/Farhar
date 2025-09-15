import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">About Us</h1>

      {/* Card Section */}
      <div className="max-w-2xl text-center  rounded-2xl p-8">
        {/* Mission */}
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Mission</h2>
        <p className="text-gray-600 mb-6">
          Founded in 2025, we support startups from Ideation to IPO with verified projects.
        </p>

        {/* Vision */}
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Vision</h2>
        <p className="text-gray-600 mb-6">
          Fostering a thriving UAE economy with investor profitability and evening meetings.
        </p>

        {/* Contact */}
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Contact</h2>
        <p className="text-gray-600">
          Email:{" "}
          <a
            href="mailto:support@crowdfunding.ae"
            className="text-yellow-600 hover:underline"
          >
            support@crowdfunding.ae
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
