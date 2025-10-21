import { useState } from "react"

const NewTask = ({ addTask }) => {
    const [title, setTitle] =  useState("");

    const submitForm = (e) => {
        e.preventDefault(); //ป้องกันไม่ให้ฟอร์มรีเฟรชหน้า


        //สร้าง object task ที่เก็บ 2 ค่า:
        const task ={
            title,
            date: new Date().toLocaleString()
        }

        addTask(task)
    };


  return (
    <form onSubmit={submitForm}>
        <label htmlFor="title" className="text-lg text-gray-400" >
            Add NewTask Kub !
        </label>
        <div className="flex gap-x-2 bg-white rounded-md shadow-sm p-2 pl-3 mt-2">
            <input id="title" 
            type="text" 
            className="focus:outline-none w-full" 
            maxLength="30" 
            placeholder="Type something here..." 
            autoFocus 
            required  //ต้องกรอกถึงจะกด submit ได้
            value={title} //เชื่อมกับ state
            onChange={(e)=> setTitle(e.target.value)} //เมื่อพิมพ์ จะอัปเดตค่า title ใน state
            />
        <button type="submit" className="w-40 px-3 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-green-600">
        + New Task</button>
        </div>
    </form>
    
  )
}
export default NewTask