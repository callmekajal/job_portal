import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 lg:px-20 py-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Tech<span className="text-blue-500">Hub</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            We build modern digital solutions that help businesses grow
            with innovative technology and creative ideas.
          </p>
        </div>


        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>


        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Resources
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Blog</li>
            <li className="hover:text-blue-400 cursor-pointer">Documentation</li>
            <li className="hover:text-blue-400 cursor-pointer">Support</li>
            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <p className="text-sm text-gray-400">
            Email: info@techhub.com
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Phone: +91 98765 43210
          </p>

          <div className="flex gap-4 mt-5">
            <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer">
              F
            </div>

            <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer">
              T
            </div>

            <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer">
              I
            </div>
          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2026 TechHub. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer