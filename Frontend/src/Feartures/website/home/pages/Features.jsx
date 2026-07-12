import React from "react";
import { Rocket, ShieldCheck, Users, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Rocket size={32} />,
      title: "Fast Performance",
      description:
        "High performance solutions with modern technologies for better user experience.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Secure Platform",
      description:
        "Advanced security practices to keep your data safe and protected.",
    },
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description:
        "Work with experienced professionals who deliver quality solutions.",
    },
    {
      icon: <Zap size={32} />,
      title: "Smart Solutions",
      description:
        "Innovative ideas and scalable solutions for your business growth.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-white">

      <div className="max-w-7xl mx-auto text-center">

        <p className="text-blue-600 font-semibold">
          OUR FEATURES
        </p>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          Powerful Features For Your Success
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We provide modern, reliable and scalable solutions to help
          businesses grow faster.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300"
            >

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mx-auto">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-6">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;