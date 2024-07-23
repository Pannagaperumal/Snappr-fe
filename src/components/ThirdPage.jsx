import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

const ThirdPage = () => {
  return (
    <div>
      <div id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            {/* Add any content or image you want on the left side */}
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="contact-info bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <h3 className="text-xl mb-4"><FaMapMarkerAlt className="inline-block mr-2" />Our Address</h3>
              <h3 className="text-xl mb-4"><FaEnvelope className="inline-block mr-2" />pannagaperumal404@gmail.com</h3>
              <h3 className="text-xl mb-4"><FaPhone className="inline-block mr-2" />+91 7975519844</h3>
              <div className="social mt-6">
                <a href="https://www.instagram.com" className="text-gray-500 hover:text-gray-900"><FaInstagram className="w-8 h-8" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer" className="py-4 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <p>&copy; Copyright <a className="text-red-500 hover:underline">Snappr</a>. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ThirdPage
