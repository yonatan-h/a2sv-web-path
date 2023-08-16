import { useEffect, useRef, useState } from 'react'
import './App.css'

// function App() {
//   const [state, setState] = useState<number>(0)
//   const ref = useRef<HTMLButtonElement>(null)
//   const button: HTMLButtonElement|null = ref.current;

//   if(button){
//     button.className = 'red';
//   }

//   return (
//     <>
//       <button ref={ref}>magix</button>
//       <p>{state}</p>
//       <button onClick={() => setState(Math.random())}>rerender</button>
//     </>
//   )
// }

// export default App

function App() {
  const [count, setCount] = useState<number>(0)
  const addButtonRef = useRef<HTMLButtonElement>(null)
  const minusButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const addButton = addButtonRef.current
    const minusButton = minusButtonRef.current
    if (!addButton || !minusButton) {
      throw new Error('one of the buttons does not exist')
    }

    const add = () => setCount(count + 1)
    const minus = () => setCount(count - 1)

    addButton.addEventListener('click', add)
    minusButton.addEventListener('click', minus)

    return () => {
      addButton.removeEventListener('click', add)
      minusButton.removeEventListener('click', minus)
    }
  }, [count])

  useEffect(() => {
    document.title = `count is ${count}`
  }, [count])

  return (
    <>
      <div>
        <p>
          count: <span>{count}</span>
        </p>
        <div>
          <button ref={addButtonRef}>+</button>
          <button ref={minusButtonRef}>-</button>
        </div>
      </div>
    </>
  )
}

export default App
