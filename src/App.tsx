import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';


export type filterType = `All` | `Active` | `Completed`

function App() {

    let [tasks1, setTasks1] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'HTML&CSS', isDone: true},
        {id: 5, title: 'REDUX', isDone: false},
        {id: 6, title: 'ReactJS', isDone: false},
    ])

    let [filter, setFilter] = useState<filterType>(`All`)

    const setFilterFoo = (valueF: filterType) => {
        setFilter(valueF)
        console.log(filter)
    }

    let durShlak = tasks1
    if(filter === "Active"){
        durShlak = tasks1.filter(td => !td.isDone)
    }
    if(filter === "Completed"){
        durShlak = tasks1.filter(td => td.isDone)
    }




    const removeTask = (id: number) => {
        tasks1 = tasks1.filter(task => task.id !== id)
        setTasks1(tasks1)
        console.log(tasks1)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={durShlak}
                      removeTask={removeTask}
                      setFilterFoo={setFilterFoo}/>
        </div>
    );
}

export default App;
