import Item from './components/item';
import { useEffect, useState } from 'react'
import SideBar from './components/sideBar/sideBar';
import Logo  from "../src/assets/logo.jpg"
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/get-todo") // Ensure /api prefix
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => console.error(err));
  }, []);

  const addTask = () => {
    fetch("http://localhost:5000/api/save-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    })
      .then(res => res.json())
      .then(newTodo => setTodo([...todo, newTodo]))
      .catch(err => console.error(err));
    setText(""); // Clear the input field after adding
  };
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/api/delete-todo/${id}`, { // Use template literals for URL
      method: "DELETE"
    })
      .then(() => {
        setTodo(todo.filter(task => task._id !== id)); // Remove deleted task from state
      })
      .catch(err => console.error(err));
  };

  const updateTask = (id, newText) => {
    fetch(`http://localhost:5000/api/update-todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: newText })
    })
      .then(res => res.json())
      .then(updatedTodo => {
        setTodo(todo.map(task => (task._id === id ? updatedTodo : task)));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <div className="sideContainer">
        <SideBar/>
      </div>
      <div className="container">
        <div className="header">
        <div><img src={Logo} className='image'/></div>
        <div><h1>TO-DO Application</h1></div>
        </div>
        <div className="top">
          <div className='headline'>Whats new today?</div>
          <input 
            type='text' 
            className='inputField'
            placeholder='Type your tasks..' 
            value={text} 
            onChange={(e)=> setText(e.target.value)}
          />
          <div className="add" onClick={addTask}>Add</div>
        </div>
        <div className="list">
          {todo.map((item, index) => (
            <Item 
              key={item._id} 
              text={item.text} 
              id={item._id} 
              onDelete={deleteTask} 
              onUpdate={updateTask} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
