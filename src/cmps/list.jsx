import { useEffect } from "react"
import { Preview } from "./preview"
export const List = ({ onRemove, todos }) => {

    // if (!todos) return <h1>LOADING...</h1>
    return (
        <section className="todo-list">
            {/* <h1>list</h1> */}
            {todos && todos?.map(todo => <Preview key={todo._id} onRemove={onRemove} todo={todo} />)}

        </section>

    )
}

