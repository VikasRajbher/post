import React, { useState } from "react";

const Form = () => {
  const [caption, setCaption] = useState("");

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 p-2">
      <div className="w-96 rounded-xl shadow-lg bg-white p-6">
        <img
          src="/logo.png"
          alt="logo"
          className="rounded-lg shadow-md w-32 h-20 mb-2 mx-auto"
        />

        <form className="space-y-4">
          {/* Image input */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:bg-black file:text-white
                         hover:file:bg-gray-800"
            />
          </div>

          {/* Caption */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Caption{" "}
              <span className="text-xs text-gray-500">(max 25 chars)</span>
            </label>
            <textarea
              placeholder="Enter caption"
              maxLength={25}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full h-24 border rounded-md p-2 resize-none
                         focus:outline-none focus:ring-2 focus:ring-black"
            />
            <p className="text-right text-xs text-gray-500">
              {caption.length}/25
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md
                       hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
