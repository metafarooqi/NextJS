import Todo from './todo';

const getTodos = async () => {
    let todos = await fetch("https://json-api-snowy.vercel.app/api/todo/list");
    return todos.json();    
}

export default async function ToDoList() {
    const {todos} = await getTodos(); 
    console.log(todos);
  return (
    <div>
    <ul style={{ listStyleType:"none" }}>
    {todos.map((t) => {
        return (
            <li key={t.id}>
               <Todo todo={t} />
            </li>
        );
    })
    }
     
      
    </ul>
  </div>
  )
}

