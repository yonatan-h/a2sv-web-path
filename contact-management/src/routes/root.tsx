import { Link, Outlet, useLoaderData } from 'react-router-dom'
import Add from './add'
import { Contact, getContacts } from '../contacts'
import Delete from './delete'

export async function loader() {
  const contacts = await getContacts()
  return { contacts }
}

function Root() {
  const { contacts } = useLoaderData() as { contacts: Contact[] }

  return (
    <div className="flex gap">
      <div>
        <Link to="/">Home</Link>
        <h1>Contacts</h1>
        <div className="flex">
          <Add /> <Delete />
        </div>
        <ul>
          {contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default Root

function ContactItem({ contact }: { contact: Contact }) {
  return (
    <Link to={`/contacts/${contact.id}`} key={contact.id}>
      <p>{contact.id}</p>
      <p>{contact.name}</p>
      <p>{contact.age} years old</p>
      <br />
    </Link>
  )
}
