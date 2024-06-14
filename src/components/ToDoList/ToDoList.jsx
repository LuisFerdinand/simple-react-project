import {useState} from 'react'
import styles from './ToDoList.module.css'

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Clean house"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
        }
    }

    return(<>
        <div className={styles['to-do-list']}>
            <h2 className={['']}>To-Do-List</h2>

            <div className={styles['add-button-container']}>
                <input type='text' placeholder='Enter a Task...' value={newTask} onChange={handleInputChange} 
                // adding Enter key press function
                onKeyDown = {(event) => {
                    if (event.key === 'Enter'){
                        addTask();}
                }}
                />
                <button className={styles['add-button']} onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className={styles['text']}>{task}</span>
                    <button className={styles['delete-button']} onClick={() => deleteTask(index)}>Delete</button>
                    <button className={styles['move-button']} onClick={() => moveTaskUp(index)}>🔺</button>
                    <button className={styles['move-button']} onClick={() => moveTaskDown(index)}>🔻</button>
                </li>)}
            </ol>
        </div>
    </>)
}
export default ToDoList
