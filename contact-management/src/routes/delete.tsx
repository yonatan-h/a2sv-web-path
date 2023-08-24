import { Form, redirect } from 'react-router-dom'
import { deleteAllContacts } from '../contacts'

export async function action() {
  await deleteAllContacts()
  console.log('abebe')
  return redirect(`/`)
}

export default function Delete() {
  return (
    <Form method="DELETE" action="/delete">
      <button type='submit'>Delete All</button>
    </Form>
  )
}
