import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Your message"
            className="w-full border rounded px-3 py-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
