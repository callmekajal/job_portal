import React from "react";
import { MapPin, Briefcase } from "lucide-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import JobsHero from "./JobsHero";

const Jobs = () => {
    const navigate = useNavigate();
    const jobs = [
        {
            title: "Frontend Developer",
            company: "Tech Solutions",
            location: "Remote",
            type: "Full Time",
            salary: "₹6 - 10 LPA",
        },
        {
            title: "Backend Developer",
            company: "Startup Hub",
            location: "Bangalore",
            type: "Full Time",
            salary: "₹8 - 12 LPA",
        },
        {
            title: "UI/UX Designer",
            company: "Creative Studio",
            location: "Delhi",
            type: "Internship",
            salary: "₹20K/month",
        },
        {
            title: "Frontend Developer",
            company: "Tech Solutions",
            location: "Remote",
            type: "Full Time",
            salary: "₹6 - 10 LPA",
        },
        {
            title: "Backend Developer",
            company: "Startup Hub",
            location: "Bangalore",
            type: "Full Time",
            salary: "₹8 - 12 LPA",
        },
        {
            title: "UI/UX Designer",
            company: "Creative Studio",
            location: "Delhi",
            type: "Internship",
            salary: "₹20K/month",
        },
    ];


    return (
        <section className="">
            <JobsHero/>
<div className="py-20 px-6 lg:px-20 bg-gray-50">
            <div className="max-w-7xl mx-auto ">

                


                {/* Job Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                    {jobs.map((job, index) => (

                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition"
                        >

                            <div className="flex justify-between items-start">

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {job.title}
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        {job.company}
                                    </p>
                                </div>

                                <Briefcase className="text-blue-600" />

                            </div>


                            <div className="mt-5 space-y-3 text-sm text-gray-600">

                                <p className="flex items-center gap-2">
                                    <MapPin size={18} />
                                    {job.location}
                                </p>

                                <p>
                                    💼 {job.type}
                                </p>

                                <p>
                                    💰 {job.salary}
                                </p>

                            </div>


                            <button
                                onClick={() => navigate("/jobs-description")}
                                className="mt-6 w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
                            >
                                Apply Now
                            </button>


                        </div>

                    ))}

                </div>


                {/* View All Button */}
                <div className="text-center mt-10">

                    <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                        View All Jobs
                    </button>

                </div>


            </div>
            </div>
        </section>
    );
};


export default Jobs;