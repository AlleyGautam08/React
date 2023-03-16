import { useState } from "react";
export default function Todo(){
     const [todo,setTodo] =useState("");
     const [todolist, setTodolist] = useState([]);
     const handlechange = (event) =>{
         setTodo(event.target.value);
     }
     const handleSubmit = (event) =>{
          event.preventDefault();
          let templist = todolist;
          templist.push(todo);
          setTodolist(templist);
          console.log(todolist);
     }
     return( <div>
          <form onSubmit={handleSubmit}>
               <input value={todo} onChange={handlechange} type="text"></input>
               <button type="submit">Add</button>
          </form>
     </div>)
}