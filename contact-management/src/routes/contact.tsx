import { Contact, deleteContact, getContact } from '../contacts'
import {
  Form,
  Link,
  ActionFunctionArgs,
  redirect,
  LoaderFunctionArgs,
  useLoaderData,
} from 'react-router-dom'

export async function loader({ params }: LoaderFunctionArgs) {
  const contact = await getContact(+params.id!)
  return { contact }
}

export async function action({ params }: ActionFunctionArgs) {
  await deleteContact(+params.id!)
  return redirect(`/`)
}

function ContactView() {
  const { contact } = useLoaderData() as { contact: Contact }

  return (
    <div>
      <h2>View Contact!</h2>
      <span>
        m'name is <b> {contact.name}</b>
      </span>
      <p>{contact.age} years old</p>
      <div className="flex">
        <button>
          <Link to={`/edit/${contact.id}`}>Edit</Link>
        </button>
        <Form method="delete">
          <button>Delete</button>
        </Form>
      </div>
    </div>
  )
}

export default ContactView
