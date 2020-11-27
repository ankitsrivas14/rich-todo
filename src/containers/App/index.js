import React, { Fragment, useEffect, useState, } from "react";
import {Container} from "reactstrap"
import { useParams,useHistory } from 'react-router-dom'
import {ImCross,ImAttachment,ImCalendar} from "react-icons/im"
import "bootstrap/dist/css/bootstrap.min.css"
import TasksList from "../../components/TasksList";
import UserProfile from "../../components/UserProfile";
import tasksData from "../../data/tasks";

// const DragImage = React.forwardRef((props, ref) => <TaskDragImage innerRef={ref} {...props} />);



function App(props) {
  const [tasks, setTasks] = useState(tasksData);
  const [newtask,setNewtask] = useState("");
  const [status,setStatus] = useState("/");
  const { param } = useParams("param")
  const history = useHistory()
  
useEffect(()=>{
  setStatus("/")
},[])

const handleStatus = () =>{
  setStatus("add")
}

const handleBack = () =>{
  setStatus("/")
}

  const addNewTask = (e) => {
    setNewtask(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(newtask !== "")
    setTasks([...tasks,{title:newtask,due:1597017600}]);
    setNewtask("")
    setStatus("/")
    history.push("/")
  }
  

  return (
      <Fragment>
      
      { 
        status === "add" ? (
          <div className="search">
            <span onClick={handleBack} id="closeIcon"><ImCross /></span>
          
            <form onSubmit={submitHandler}>
            <Container fluid>
              <input className="inputBox" type="text" placeholder="What would you like to add ?" onChange={(e) => addNewTask(e)} value={newtask} />
              </Container>
              <Container fluid>
              <div className="attachments float-right">
                <span className="attachIcons"><ImAttachment /></span><span><ImCalendar/></span>
              </div></Container>
              <button className="addTaskBtn">+</button>
            </form>
        
        </div>
        ) : (
          <div className="App">
            <UserProfile taskCount={tasks.length} profile={{ name: 'Floyd Mullins' }} />
            <TasksList status={handleStatus} tasks={tasks} />
          </div>
        )
        
      }
        
  </Fragment>
    
  );
}

export default App;
