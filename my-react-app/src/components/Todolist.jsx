import { useState } from "react";

export default function Todolist() {

    const[tasks, setTasks] = useState([])
    const [newtask, setNewtask] = useState("")

    const list = tasks.map((element, index) => (
        <li key={index}>{element}</li>
    ))

    const saveNewTask = (event) => {
        setNewtask(event.target.value)
    }

    const addTask = () => {
        setTasks([...tasks, newtask])
        setNewtask("")
    }

    return (
        <div>
             <input type="text" value={newtask} placeholder="Was möchtest du erledigen?" onChange={saveNewTask}/>
             <button onClick={addTask}>+</button>
             <br />
            <ul>
                <p>{list}</p>
            </ul>
        </div>
    );
}