export function TaskCard({task, deleteTask}){

    return <div className="bg-gray-800 text-white p-4 rounded-md">
        <h1 className="text-x1 font-bold capitalize">{task.title}</h1>
        <p className="text-sm">{task.description}</p>
        <button className="bg-red-500 p-2 rounded-md hover:bg-red-400" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>

}