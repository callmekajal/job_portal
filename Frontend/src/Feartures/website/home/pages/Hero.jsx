import React from 'react'



const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Build Your Future With
            <span className="text-blue-600"> Modern Technology</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We create powerful digital solutions using modern technologies
            to help businesses grow faster and smarter.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="px-7 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-500">Users</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-500">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">99%</h3>
              <p className="text-gray-500">Success</p>
            </div>
          </div>
        </div>


        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="https://illustrations.popsy.co/blue/web-design.svg"
              alt="Hero"
              className="relative w-[400px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero