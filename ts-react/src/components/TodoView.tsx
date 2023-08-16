import { Todo } from '../models'
import { AiOutlineCheck, AiOutlineEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

interface Props {
  todo: Todo
  setTodos: (todos: Todo[]) => void
  todos: Todo[]
  handleTransfer: () => void
  isActive: boolean
}
function TodoView({ todo, todos, setTodos, handleTransfer, isActive }: Props) {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [editText, setEditText] = useState<string>(todo.todo)
  const currentId = todo.id
  const index = todos.indexOf(todo)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editMode) {
      input.current?.focus()
    }
  }, [editMode])

  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== currentId))
  }

  const handleSave = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === currentId) todo.todo = editText
        return todo
      })
    )
  }

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(props, snapshot) => (
        <form
          ref={props.innerRef}
          {...props.draggableProps}
          {...props.dragHandleProps}
          className={`todo-view yellow rad ${
            snapshot.isDragging ? 'shadow' : ''
          }`}
          onSubmit={(e) => {
            e.preventDefault()
            handleSave()
          }}
        >
          <div className="todo-view__div">
            {editMode ? (
              <input
                ref={input}
                type="text"
                onChange={(e) => setEditText(e.target.value)}
                value={editText}
              />
            ) : (
              <span className={`${isActive ? '' : 'strike'}`}>{todo.todo}</span>
            )}
            <div className="todo-view__icons">
              <button onClick={() => setEditMode(!editMode)}>
                <AiOutlineEdit />
              </button>

              <button onClick={() => handleTransfer()}>
                <AiOutlineCheck />
              </button>

              <button onClick={handleDelete}>
                <BsTrash />
              </button>
            </div>
          </div>
        </form>
      )}
    </Draggable>
  )
}

export default TodoView
