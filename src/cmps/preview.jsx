import { useEffect } from "react"

export const Preview = ({ todo, onRemove }) => {

    // if (!todos) return <h1>LOADING...</h1>
    return (
        <section className="">

            <div className="todo-preview">
                <h3> {todo?.task} {todo.isDone ? '✅' : '📍'}</h3>
                {/* <h3>{todo?.desc} </h3> */}
                <button onClick={() => onRemove(todo?._id)}>x</button>
            </div>

        </section>

    )
}
