import React from 'react';
import { formatDueDate } from "../../utils";

const Task = ({ task, onMouseDown, onMouseUp }) => {
  return (
    task ?
      (
        <div className={`task-item ${task.status ? task.status : ''}`}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchStartCapture={onMouseDown}
          onTouchEnd={onMouseUp}
          draggable
        >
          <h3>{task.title}</h3>
          <p>Due {formatDueDate(task.due * 1000)}</p>
        </div>
      )
      : null
  )
}

export default Task;