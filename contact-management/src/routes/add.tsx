import { Form, redirect } from 'react-router-dom'
import { createContact } from '../contacts'
import { generate } from 'random-words'

export async function action() {
  const id = Math.round(Math.random() * 1000)
  await createContact({
    id,
    name: generate() as unknown as string,
    age: Math.round(Math.random() * 100),
  })
  return redirect(`/edit/${id}`)
}

export default function Add() {
  return (
    <Form method="POST" action="/add">
      <button>Add</button>
    </Form>
  )
}
