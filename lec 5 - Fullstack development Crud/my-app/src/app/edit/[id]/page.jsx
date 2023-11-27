import React from 'react'
import dbConnect from '@/app/dbConnect'
import Task from "../../model/Task"
import { redirect } from 'next/navigation';
import Link from 'next/link';


const page = async ({params}) => {

    dbConnect();

    const task = await Task.findOne({_id:params.id})

    async function updateTask(data){
        "use server";
        let title = data.get("title")?.valueOf();
        let task = data.get("task")?.valueOf();
        try {
          dbConnect();
          
          let updatedTask = await Task.findByIdAndUpdate({_id:params.id},{title,task});
          
        //   console.log(updatedTask);
        } catch (error) {
          console.log(error);
        }
        redirect("/showdata");
      }

  return (
    <>
  <main className='m-10 aspect-y-5'>
  <div className=" flex justify-between mx-2">
            <Link href={"/showdata"}>
            <h1 className=' text-3xl font-bold'>
                All Task
            </h1>
            </Link>
            <Link href={'/'}>
            <h1 className=' text-3xl font-bold'>
                Add Task
            </h1>
            </Link>
        </div>
    <h1 className='text-xl font-bold mt-10'>Edit task</h1>
    <form action={updateTask}>
      <div>
        <label htmlFor='title' className='text-lg'>
          title
        </label>
        <br/>
      <input type='text' name='title' id='title' 
       className='w-[100%] bg-slate-200 h-10 p-3'
        defaultValue={task.title}
       />
      </div>
      <div>
        <label htmlFor='task' className='text-lg'>
          task
        </label>
        <br/>
      <input type='text' name='task' id='task' className='w-[100%] bg-slate-200 h-10 p-3'
        defaultValue={task.task}
      />
      </div>
      <button type='submit' 
       className='p-3 bg-yellow-500 hover:bg-orange-500 hover:text-white font-bold mt-3'>Submit</button>
    </form>
  </main>
  </>
  )
}

export default page
