import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router-dom'
import { getContact, Contact, editContact } from '../contacts'

export async function loader({ params }: LoaderFunctionArgs) {
  const id = +(params.id as string)
  return { contact: await getContact(id) }
}

export async function action({ params, request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as unknown as Contact
  const contact: Contact = { id: +params.id!, name: data.name, age: +data.age }
  await editContact(contact)
  return redirect(`/contacts/${contact.id}`)
}

function Edit() {
  const navigate = useNavigate()
  const { contact } = useLoaderData() as { contact: Contact }
  const { id, name, age } = contact

  return (
    <Form method="POST">
      <h2>Edit</h2>
      <input type="text" name="name" placeholder="name" defaultValue={name} />
      <br />
      <input type="number" name="age" placeholder="age" defaultValue={age} />
      <br />
      <button type="button" onClick={() => navigate(`/contacts/${id}`)}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </Form>
  )
}

export default Edit
