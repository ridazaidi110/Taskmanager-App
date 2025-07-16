import React, { useState } from "react";

function Taskinput({ addtask }) {
  const [inputText, setinputText] = useState("");
  const handleSubmit = (e) => {
    if (inputText.trim() === "")
      return;
    e.preventDefault();
    addtask(inputText);
    setinputText("");
  }

  return (
    <>
      <div className="bg-[#FCFCFC] w-full rounded text-center p-4 px-4 ">
        <h1 className="text-3xl md:text-4xl lg:text-4xl text-center font-bold mb-4">Task Manager App</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center mt-8 ">
            <input
              onChange={(e) => setinputText(e.target.value)}
              type="text"
              value={inputText}
              placeholder="Enter a Task ..."
              className="flex-grow w-full text-xl px-3 py-2 rounded outline-none transition-all duration-300 ease-in-out
"
            ></input>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 md:px-5 px-4 py-2 text-xl md:text-3xl lg:text-2xl text-white cursor-pointer font-semibold transition-all duration-300 ease-in-out"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Taskinput;
