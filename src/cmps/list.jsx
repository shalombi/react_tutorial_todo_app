import { Preview } from "./preview"
export const List = ({ onRemove, todos }) => {

    return (
        <section className="todo-list">
            {todos && todos?.map(todo => <Preview key={todo._id} onRemove={onRemove} todo={todo} />)}

        </section>

    )
}

