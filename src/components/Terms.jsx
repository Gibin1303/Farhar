import React from "react";

const Terms = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-6">
      {/* Title */}
      <h1 className="text-3xl font-medium mb-8 text-gray-900 text-center">
        Terms of Service
      </h1>

      {/* Sections */}
      <div className="text-center space-y-6 max-w-2xl">
        <div>
          <h2 className="text-lg font-semibold mb-1">Eligibility</h2>
          <p className="text-gray-700">
            Users must be 18+ and comply with UAE laws.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-1">Risks</h2>
          <p className="text-gray-700">
            Investments carry risks; users are liable for losses.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-1">Jurisdiction</h2>
          <p className="text-gray-700">
            UAE law applies, disputes in Dubai courts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;






