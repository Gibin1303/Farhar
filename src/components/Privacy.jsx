import React from "react";

const Privacy = () => {
  return (
    <section className="bg-gray-50 min-h-[80vh] flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
        Privacy Policy
      </h1>

      {/* Content */}
      <div className="text-center space-y-6 max-w-2xl">
        <div>
          <h2 className="font-semibold">Data</h2>
          <p className="text-gray-700">
            Collects username, password, role, and investments under UAE laws.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Usage</h2>
          <p className="text-gray-700">
            Used for services and compliance, stored securely.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">Rights</h2>
          <p className="text-gray-700">
            Request data changes at{" "}
            <a
              href="mailto:support@crowdfunding.ae"
              className="text-yellow-600 hover:underline"
            >
              support@crowdfunding.ae
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
