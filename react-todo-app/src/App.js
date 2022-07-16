import React, {useState} from 'react';
import "./App.css";
import List from "./components/List"
import Form from './components/Form'

export default function App() {

  const [todoData, setTodoData] = useState([])
  const [value, setValue] = useState("")

  
  const handleSubmit = (e) => {
    e.preventDefault() // submit 시 page reload 막아줌
    
    let newTodo = {
      id : Date.now(),
      title : value,
      completed : false
    }
    setTodoData((prev) => [...prev, newTodo])
    setValue("")
}
  
 
  
  
  
  return(<div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>오늘 할 일!</h1>
        </div>

        <List todoData = {todoData} setTodoData = {setTodoData} />
        
        <Form handleSubmit = {handleSubmit} value = {value} setValue = {setValue}/>

      </div>
    </div>)
  }
