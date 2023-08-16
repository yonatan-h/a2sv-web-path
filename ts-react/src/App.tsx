import './App.css'
import InputField from './components/InputField'
import { useState } from 'react'
import { Todo } from './models'
import TodoList from './components/TodoList'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  const [todo, setTodo] = useState<string>('')
  const [activeTodos, setActiveTodos] = useState<Todo[]>([
    { id: 5, todo: 'abc' },
    { id: 6, todo: 'xyz' },
  ])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = () => {
    if (!todo) return
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000),
      todo: todo,
    }
    setActiveTodos([...activeTodos, newTodo])
    setTodo('')
  }

  const transfer = (todo: Todo, toCompleted: boolean) => {
    const minused = toCompleted ? activeTodos : completedTodos
    const plused = toCompleted ? completedTodos : activeTodos

    minused.splice(minused.indexOf(todo), 1)
    plused.push(todo)

    setActiveTodos([...activeTodos])
    setCompletedTodos([...completedTodos])
  }

  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) return

        console.log(activeTodos, ' , ', completedTodos)

        const fromCompleted = result.source.droppableId === 'b'
        const toCompleted = result.destination.droppableId === 'b'

        const minused = fromCompleted ? completedTodos : activeTodos
        const plused = toCompleted ? completedTodos : activeTodos

        const todo = minused.splice(result.source.index, 1)[0]

        plused.splice(result.destination.index, 0, todo)

        setCompletedTodos([...completedTodos])
        setActiveTodos([...activeTodos])
        return
      }}
    >
      <div className="App">
        <div className="heading">TASKIFY</div>

        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <div className="container">
          <TodoList
            todos={activeTodos}
            setTodos={setActiveTodos}
            areActive={true}
            transfer={transfer}
          />
          <TodoList
            todos={completedTodos}
            setTodos={setCompletedTodos}
            areActive={false}
            transfer={transfer}
          />
        </div>
      </div>
    </DragDropContext>
  )
}

export default App
