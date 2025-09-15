import React from "react";

const Accessibility = () => {
  return (
    <section className="bg-gray-50 min-h-[80vh] flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
        Accessibility Statement
      </h1>

      {/* Content */}
      <div className="text-center space-y-6 max-w-2xl">
        <div>
          <h2 className="font-semibold">Features</h2>
          <p className="text-gray-700">
            Keyboard and screen reader support per UAE guidelines.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Support</h2>
          <p className="text-gray-700">
            Issues resolved in 48 hours; report to{" "}
            <a
              href="mailto:support@crowdfunding.ae"
              className="text-yellow-600 hover:underline"
            >
              support@crowdfunding.ae
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Improvements</h2>
          <p className="text-gray-700">
            Ongoing updates based on feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;
