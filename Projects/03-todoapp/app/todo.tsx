"use client";

import {useRouter} from 'next/navigation'

async function update(id : string,isDone: boolean,refresh:()=>void){
  await fetch(`/api/todo/update`,{
    method:"POST",
    //mode: 'no-cors',
    body:JSON.stringify({id, isDone})
  });
  refresh();
}

async function deleteTodo(id:string,refresh:() => void){
  await fetch(`/api/todo/delete?id=${id}`,{
    method:"DELETE",
  });
  refresh();
}

export default function Todo({todo}) {
  const router = useRouter();
  return (
    <>
         <input type="checkbox" onChange={(e)=>{update(todo.id,e.target.checked,router.refresh)}} checked={todo.isDone} />
         {todo.name}
         <button onClick={()=>{deleteTodo(todo.id,router.refresh)}}>Delete</button>
    </>
  ) 
}