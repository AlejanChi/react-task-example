import { useState } from "react"

export function TaskForm({createTask}){

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newTask = {
            title: title,
            description: description
        } 
        createTask(newTask);
    }
    return <div className="max-w-md mx-auto">
        <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
            <input className="bg-slate-300 p-3 w-full mb-2" type="text" placeholder="Ingrese una tarea" onChange={(e)=>setTitle(e.target.value)}/>
            <input className="bg-slate-300 p-3 w-full mb-2" type="text" placeholder="Descripcion" onChange={(e)=>setDescription(e.target.value)}/>
                <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400" type="submit">Cargar tarea</button>
        </form>
    </div>
}