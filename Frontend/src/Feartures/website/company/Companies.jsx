import React from "react";
import { Building2, MapPin, Users } from "lucide-react";

const Companies = () => {

  const companies = [
    {
      name: "Google",
      location: "Bangalore",
      employees: "100K+ Employees",
      jobs: "120 Open Jobs",
    },
    {
      name: "Microsoft",
      location: "Hyderabad",
      employees: "200K+ Employees",
      jobs: "150 Open Jobs",
    },
    {
      name: "TCS",
      location: "Mumbai",
      employees: "600K+ Employees",
      jobs: "500 Open Jobs",
    },
    {
      name: "Infosys",
      location: "Pune",
      employees: "300K+ Employees",
      jobs: "250 Open Jobs",
    },
  ];


  return (
    <section className="bg-white px-6 py-20 lg:px-20">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="font-semibold text-blue-600">
            TOP COMPANIES
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Explore Companies Hiring Now
          </h2>

          <p className="mt-4 text-gray-600">
            Find opportunities from leading companies around the world.
          </p>

        </div>


        {/* Company Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">


          {companies.map((company,index)=>(

            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Building2 size={30}/>
              </div>


              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {company.name}
              </h3>


              <div className="mt-4 space-y-3 text-sm text-gray-600">

                <p className="flex items-center gap-2">
                  <MapPin size={18}/>
                  {company.location}
                </p>


                <p className="flex items-center gap-2">
                  <Users size={18}/>
                  {company.employees}
                </p>


                <p className="font-medium text-blue-600">
                  {company.jobs}
                </p>

              </div>


              <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                View Jobs
              </button>


            </div>

          ))}


        </div>

      </div>

    </section>
  );
};


export default Companies;