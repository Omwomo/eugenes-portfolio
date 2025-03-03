import React from 'react';
import { TfiMouse } from 'react-icons/tfi';

const Contact = () => (
  <section className="bg-gray-900 text-white py-20">
    <div className="max-w-6xl mx-auto px-4 text-center">

      <div className="justify-center flex-col mb-8">
        <TfiMouse className="justify-center items-center w-full mb-2 text-3xl text-teal-400" />
        <div className="flex justify-center items-center h-full">
          <div className="border-l-2 border-dashed border-teal-50 h-16" />
        </div>
        <div className="flex pt-2 w-full justify-center items-center">
          <div className="w-2 h-2 bg-teal-50 transform rotate-45" />
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold">Contact</h2>
        <div className="flex justify-center items-center">
          <div className="w-2 h-2 bg-teal-400 rounded-full" />
          <hr className="w-20 bg-teal-400" />
          <div className="w-2 h-2 bg-teal-400 rounded-full" />
        </div>
      </div>
      <p className="text-xl mb-12">I’m currently available for freelance work</p>
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <textarea
          name="message"
          placeholder="Enter your needs"
          required
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-40"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
