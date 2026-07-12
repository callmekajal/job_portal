import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

const Blogs = () => {

  const blogs = [
    {
      title: "How to Crack Your Next Job Interview",
      description:
        "Learn the best interview preparation strategies and tips to get hired by top companies.",
      date: "12 July 2026",
      category: "Career Tips",
    },
    {
      title: "Top Skills Required for Developers in 2026",
      description:
        "Explore the latest technical skills companies are looking for in software engineers.",
      date: "05 July 2026",
      category: "Technology",
    },
    {
      title: "How to Create an ATS Friendly Resume",
      description:
        "Follow these resume tips to increase your chances of getting shortlisted.",
      date: "28 June 2026",
      category: "Resume",
    },
  ];


  return (
    <section className="bg-gray-50 px-6 py-20 lg:px-20">

      <div className="mx-auto max-w-7xl">


        {/* Heading */}
        <div className="text-center">

          <p className="font-semibold text-blue-600">
            OUR BLOGS
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Latest Career Insights
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Get useful career advice, job search tips and industry updates.
          </p>

        </div>



        {/* Blog Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">


          {blogs.map((blog,index)=>(

            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white border border-gray-200 transition hover:-translate-y-2 hover:shadow-xl"
            >


              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-300 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">
                  Blog
                </h3>
              </div>


              <div className="p-6">


                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  {blog.category}
                </span>


                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {blog.title}
                </h3>


                <p className="mt-3 text-gray-600 text-sm leading-6">
                  {blog.description}
                </p>


                <div className="mt-5 flex items-center justify-between">

                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16}/>
                    {blog.date}
                  </p>


                  <button className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700">
                    Read More
                    <ArrowRight size={18}/>
                  </button>

                </div>


              </div>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
};


export default Blogs;