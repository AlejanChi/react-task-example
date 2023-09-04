import { TaskCard } from "./TaskCard"
export function TaskList({tasks, deleteTask}){
    

if(tasks.length == 0){
    return <div>
        <h1 className="text-white text-xl font-bold text-center">No hay Tareas aun</h1>
    </div>
}else{

    return <div className="grid grid-cols-4 gap-2">{
        tasks.map(task => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
            
        ))
    }</div>
}
    
}
