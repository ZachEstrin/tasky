import { useState } from 'react';

export default function ToDoList(){

    const [tasks, setTasks] = useState(["Task1","Task2","Task3"]);
    const [newTask,setNewTask] = useState("")


    function handleInputChange(event){
        setNewTask(event.target.value)
    };

    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t => [...t,newTask]);
        }
    }

    /*function deleteTask(index){};

    function moveUp(index){};

    function moveDown(index){};*/


    return(
    <div className="toDoList">
        <h1>Tasky</h1>
        <div>
            <input id='enterBox' type="text" placeholder="Enter Task" value={newTask} onChange={handleInputChange}/>
            <button className='addButton' onClick={addTask}>Add Task</button>
        </div>

        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    
                    <div className='buttons'>
                        <button className='deleteButton' /*onClick={deleteTask(index)}*/>
                            🗑️
                        </button>
                        <button className='moveButton' /*onClick={moveTaskUp(index)}*/>
                            🔼
                        </button>
                        <button className='moveButton' /*onClick={moveTaskDown(index)}*/>
                        🔽
                        </button>

                    </div>
                </li>
            )}
        </ol>
    </div>
    );
}
