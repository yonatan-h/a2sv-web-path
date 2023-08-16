// import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import './styles.css'

interface Props {
  todo: string
  setTodo: (todo: string) => void
  handleAdd: () => void
}

function InputField({ todo, setTodo, handleAdd }: Props) {
  const input = useRef<HTMLInputElement>(null)

  return (
    <>
      <form
        className="input"
        onSubmit={(e) => {
          input.current?.blur()
          e.preventDefault()
        }}
      >
        <input
          ref={input}
          type="text"
          placeholder="Enter a task"
          className="input__box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="input__submit"
          type="submit"
          onClick={() => handleAdd()}
        >
          Go
        </button>
      </form>
    </>
  )
}

export default InputField
