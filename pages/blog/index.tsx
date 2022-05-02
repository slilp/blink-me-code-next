import React from "react";

function Content() {
  return (
    <div>
      <p className="text-3xl font-bold">My Blogs</p>
      <br></br>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        <button className="bg-indigo-500 rounded-full p-3 hover:opacity-90 hover:transition font-bold">
          React
        </button>
        <button className="bg-indigo-500 rounded-full p-3 hover:opacity-90 hover:transition font-bold">
          React
        </button>
        <button className="bg-indigo-500 rounded-full p-3 hover:opacity-90 hover:transition font-bold">
          React
        </button>
        <button className="bg-indigo-500 rounded-full p-3 hover:opacity-90 hover:transition font-bold">
          React
        </button>
        <button className="bg-indigo-500 rounded-full p-3 hover:opacity-90 hover:transition font-bold">
          React
        </button>
        <button className="bg-indigo-500 rounded-full p-3 hover:opacity-90 hover:transition font-bold">
          React
        </button>
        <button className="bg-indigo-500 rounded-full p-3 hover:opacity-90 hover:transition font-bold">
          React
        </button>
        <button className="bg-indigo-500 rounded-full p-3 hover:opacity-90 hover:transition font-bold">
          React
        </button>
      </div>
      <br></br>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="h-72 bg-red-400 rounded-lg"></div>
        <div className="h-72 bg-red-400 rounded-lg"></div>
        <div className="h-72 bg-red-400 rounded-lg"></div>
        <div className="h-72 bg-red-400 rounded-lg"></div>
        <div className="h-72 bg-red-400 rounded-lg"></div>
        <div className="h-72 bg-red-400 rounded-lg"></div>
      </div>
    </div>
  );
}

export default Content;
