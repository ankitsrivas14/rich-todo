import { useRef, useState } from "react";
import DropButton from "../DropButton";
import Task from "../Task";

const TasksList = ({ tasks,status}) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const dropButtonRef = useRef(null);
  const [mouseDownY, setMouseDownY] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setSelectedNode(e.currentTarget);
    setMouseDownY(e.pageY || (e.changedTouches[0] && e.changedTouches[0].pageY));
    e.currentTarget.style.zIndex = 1000;
    document.body.style.overflow = 'hidden';
  }
  const onMouseMove = (e) => {
    const top = (e.pageY || e.changedTouches[0] && e.changedTouches[0].pageY) - mouseDownY;
    if (isDragging & top >= 0) {
      selectedNode.style.transform = `translate3d(0,${top}px,0)`;
      const dist = dropButtonRef.current.offsetTop - selectedNode.offsetTop - top - selectedNode.offsetHeight;
      if (dist < 300) {
        const delta = (1 - (Math.max(300 - dist, 0) / 300 * 0.9));
        const scale = Math.max(delta, 0.3);
        selectedNode.style.transform += `scale3d(${scale},${scale},${scale})`;
      }
    }
  }
  const onMouseUp = (e) => {
    setIsDragging(false);
    e.currentTarget.style.zIndex = 0;
    selectedNode.style.transform = `translate3d(0,0,0)`;
    document.body.style.overflow = 'auto';
  }

  return (
    <div
      ref={containerRef}
      className="task-list-container"
      onMouseMove={onMouseMove}
      onTouchMove={onMouseMove}
    >
      <div className={`tasks-list ${isDragging ? 'disabled' : ''}`}>
        {tasks.map((task, i) => (
          <Task
            key={i}
            task={task}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          />
        ))}
      </div>
      <DropButton status={status} ref={dropButtonRef} className={`${isDragging ? 'active' : ''}`} />
    </div>
  )
}

export default TasksList;
