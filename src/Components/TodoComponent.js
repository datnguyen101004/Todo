import React,{useState} from 'react'

const TodoComponent = () => {
    const [newTodo, setNewTodo] = useState("")
    const handleChangeInput = (data) => {
        setNewTodo(data.target.value)
    }

    const [listTodo, setListTodo] = useState([])
    const handleAddTodo = ()=>{
        setListTodo([...listTodo,{
            id: Math.floor(Math.random()*100+1),
            value: newTodo
        }])
        setNewTodo("")
    }

    const handleDeleteTodo=(todoId)=>{
        let newListTodo = listTodo.filter(item => item.id !== todoId)
        setListTodo(newListTodo)
    }

    return (
        <div>
            <input value={newTodo} onChange={(data) => handleChangeInput(data)}/>
            <button onClick={()=>handleAddTodo()}>Add</button>
            {
                listTodo.map((todo, index)=>{
                    return (
                        <div>
                            {index+1}.{todo.value}
                            <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoComponent;