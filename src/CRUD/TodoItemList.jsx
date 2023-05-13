

export const TodoItemList = ({todo, onDeleteTodo, onToggleTodo}) => {

  return (
    <>
        <div>TodoItem</div>
        <li>
            <span
                onClick={() => onToggleTodo( todo.id )}
            >
                {todo.nombre}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(todo.id)}
            >
                Delete
            </button>
        </li>
    
    </>
  )
}
