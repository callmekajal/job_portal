import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold">CONTACT US</p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            We'd Love to Hear From You
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions about jobs, hiring, or our platform?
            Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
              <Mail className="text-blue-600" size={28} />
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-600">support@techhub.com</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
              <Phone className="text-blue-600" size={28} />
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
              <MapPin className="text-blue-600" size={28} />
              <div>
                <h4 className="font-bold text-lg">Office</h4>
                <p className="text-gray-600">
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4">
              <Clock className="text-blue-600" size={28} />
              <div>
                <h4 className="font-bold text-lg">Working Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;