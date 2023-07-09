import Link from 'next/link'
import React from 'react'
import { prisma } from './db';
import TodoItem from './components/TodoItem';
function getTodo(){
  return prisma.todo.findMany()
}
async function toggleTodo(id:string,complete:boolean){
  "use server"
  await prisma.todo.update({where:{id},data:{complete}})
}
// function deleteTodo(){
//   return prisma.todo.deleteMany({
//     where:{
//       title:"test"
//     }
//   })
// }
const Home = async() => {
  const todos=await getTodo()
  // await prisma.todo.create({data:{title:"test",complete:false}})
  
  
  
  return (<>
    <header className='flex justify-between items-center mb-4'>
      <h1 className='text-2xl'>TO-Do</h1>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">NEW</Link>
    </header>
    <ul className='pl-4'>
    {todos.map(todo=>(
      <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
      // <li key={todo.id}>{todo.title}</li>
    ))}
    </ul></>
  )
}

export default Home