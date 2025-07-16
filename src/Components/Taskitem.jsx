import React, { useEffect, useRef, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

function Taskitem({ task, DeleteTask, Updatefunction }) {
  const inputref = useRef(null);
  const [isEditing, setisEditing] = useState(false);
  const [editedText, seteditedText] = useState(task.text);
   useEffect(() => {
    if (isEditing && inputref.current) {
      inputref.current.focus();
    }
  }, [isEditing]);

  return (
    <>

      <div className="flex justify-between items-center rounded px-2 py-3 my-4 bg-green-100 hover:bg-green-200 ">
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            ref={inputref}
            onChange={(e) => seteditedText(e.target.value)}
            className="flex-1 md:px-3 lg:py-1 rounded text-lg outline-none transition-all duration-300 ease-in-out overflow-hidden "
          ></input>
        ) : (
          <p className="flex-1 md:text-2xl lg:text-2xl font-medium md:font-medium mr-4">{task.text}</p>
        )}
        <div className="flex text-xl md:gap-9 lg:gap-9 items-center gap-3">
          <FaTrashCan className={`text-red-500 hover:text-red-700 cursor-pointer md:mr-1 lg:mr-1 md:text-xl lg:text-xl ${isEditing ? "flex gap-8" : "gap-1"}`} onClick={() => DeleteTask(task.id)} />
          {isEditing ? (
            <FaSave
              className="mr-4"
              onClick={() => {
                Updatefunction(task.id, editedText)
                setisEditing(false);

              }} />
          ) : (
            <AiFillEdit
              className="cursor-pointer text-blue-500 hover:text-blue-700 md:text-2xl lg:text-2xl "
              onClick={() => {
                setisEditing(true)
                seteditedText(task.text)
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Taskitem;
