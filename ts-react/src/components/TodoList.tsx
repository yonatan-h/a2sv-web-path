import { Droppable } from 'react-beautiful-dnd'
import { Todo } from '../models'
import TodoView from './TodoView'

interface Props {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  areActive: boolean
  transfer: (todo: Todo, toCompleted:boolean) => void
}
function TodoList({ todos, setTodos, areActive, transfer }: Props) {
  const droppableId: string = areActive ? 'a' : 'b'
  const bgClass = areActive ? 'blue' : 'red'
  const title = areActive ? 'Active Tasks' : 'Completed Tasks'

  return (
    <Droppable droppableId={droppableId}>
      {(props) => (
        <div className={bgClass + ' pad rad'} id={droppableId}>
          <div className="heading">{title}</div>
          <div
            ref={props.innerRef}
            {...props.droppableProps}
            className="todo-list"
          >
            {todos.map((todo) => (
              <TodoView
                todo={todo}
                isActive={areActive}
                setTodos={setTodos}
                todos={todos}
                handleTransfer={()=>transfer(todo, areActive)}

                key={todo.id}
              />
            ))}
            {props.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default TodoList
