import React, { useState } from "react";

const JobsHero = () => {

  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  
  
    const handleSearch = () => {
      onSearch(jobTitle, location);
    };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white px-6 py-20 lg:px-20">

      <div className="mx-auto max-w-7xl text-center">

        <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
          Find Your 
          <span className="text-blue-600"> Dream Job </span>
          Today
        </h1>


        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Explore thousands of job opportunities from top companies
          and take the next step in your career.
        </p>

{/* Stats */}
<div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">

  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
    <h3 className="text-3xl font-bold text-gray-900">
      10K+
    </h3>
    <p className="mt-2 text-gray-500">
      Jobs Available
    </p>
  </div>


  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
    <h3 className="text-3xl font-bold text-gray-900">
      500+
    </h3>
    <p className="mt-2 text-gray-500">
      Companies
    </p>
  </div>


  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
    <h3 className="text-3xl font-bold text-gray-900">
      50K+
    </h3>
    <p className="mt-2 text-gray-500">
      Candidates
    </p>
  </div>


  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
    <h3 className="text-3xl font-bold text-gray-900">
      95%
    </h3>
    <p className="mt-2 text-gray-500">
      Success Rate
    </p>
  </div>

</div>     {/* Search Box */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-4 rounded-2xl bg-white p-4 shadow-lg md:flex-row">


        <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Search job title, skills..."
        className="flex-1 rounded-lg border border-gray-200 px-5 py-3 outline-none focus:border-blue-500"
      />


      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="flex-1 rounded-lg border border-gray-200 px-5 py-3 outline-none focus:border-blue-500"
      />


      <button
        onClick={handleSearch}
        className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Search Jobs
      </button>

        </div>

      </div>

    </section>
  );
};


export default JobsHero;