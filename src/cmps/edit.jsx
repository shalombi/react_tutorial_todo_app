import { useEffect, useState } from "react"

export const Edit = ({ onAddTodo }) => {
    const [todo, setTodo] = useState({ task: '', isDone: '' })

    useEffect(() => {
        console.log('todo:', todo)
    }, [todo])

    const handleChange = (ev) => {
        let value = typeof ev.target.value === 'number' ? +ev.target.value : ev.target.value

        if (ev.target.value === 'true') value = true
        else if (ev.target.value === 'false') value = false
        const field = ev.target.name

        setTodo({ ...todo, [field]: value })
    }



    return (
        <section className="edit">
            <form onSubmit={()=>onAddTodo(todo)}>

                <input
                    type="text"
                    value={todo.task}
                    name="task"
                    onChange={handleChange}
                />

                <select name="isDone" value={todo.isDone} onChange={handleChange}>
                    <option value={true}>A</option>
                    <option value={false}>B</option>
                </select>

                <button>save</button>
            </form>
        </section>

    )
}

