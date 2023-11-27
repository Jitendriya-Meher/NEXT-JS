import React from 'react'
import dbConnect from '../dbConnect'
import Task from "../model/Task"
import Link from 'next/link';
import { redirect } from 'next/navigation';

const page = async() => {

    await dbConnect();
    const tasks = await Task.find();

    async function deletetask(data){
        "use server";

        let id = JSON.parse(data.get("id")?.valueOf());
        await Task.deleteOne({_id:id});
        redirect("/showdata");
    }

  return (
    <div className=' m-10 '>

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

        <div className=" mt-3 p-3">
            <ul className=' flex font-semibold text-xl px-2 mt-1'>
                <li className=' flex-1'>Title</li>
                <li className=' flex-1'>Task</li>
                <li className=' flex-1'>Operation</li>
            </ul>
            <hr />
            {
                tasks.map( (task) => (
                    <ul className=' flex bg-gray-300 px-2 mt-1 items-center' key={task._id}>
                        <li className=' flex-1'>{task.title}</li>
                        <li className=' flex-1'>{task.task}</li>
                        <li className=' flex-1 flex'>
                            
                                <form action={deletetask}>
                                        <input type='hidden' id='id' name='id' value={JSON.stringify(task._id)}/>
                                    <button type='submit' className='p-2 m-2 bg-red-600 text-white hover:cursor-pointer'>Delete</button>
                                </form>
                            
                            <Link href={`/edit/${task._id}`}>
                            <button className=' p-2 m-2 bg-blue-600 text-white hover:cursor-pointer'>
                                Edit
                            </button>
                            </Link>
                            
                        </li>
                    </ul>
                ))
            }
        </div>

      
    </div>
  )
}

export default page
