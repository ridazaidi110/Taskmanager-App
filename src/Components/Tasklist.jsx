import React from "react";
import Taskitem from "./Taskitem";

function Tasklist({ tasks , DeleteTask , Updatefunction}) {
  return (
    <>
      {tasks.map((task) => {
        return <Taskitem
         key={tasks.id}
         task={task} 
         DeleteTask={DeleteTask}
         Updatefunction={Updatefunction}
         />;
      })}
    </>
  );
}

export default Tasklist;
