import React from "react";

const Cta = ({ title, description, children }) => {
  return (
    <div className="text-center mt-16 lg:col-span-3">
      <div className="bg-accent dark:bg-accent-dark  rounded-2xl p-8 shadow-xl">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-4  text-black">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg mb-8 opacity-90 max-w-4xl mx-auto text-black/90">
          {description}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Cta;
