export type Contact = {
  id: number
  name: string
  age: number
}
async function wait() {
  return new Promise((s) => setTimeout(s, 0))
}

async function getList(): Promise<Contact[]> {
  await wait()
  const stored = localStorage.getItem('contacts')
  if (!stored) return []

  return JSON.parse(stored) as Contact[]
}

async function storeList(contacts: Contact[]) {
  await wait()
  const list = JSON.stringify(contacts)
  localStorage.setItem('contacts', list)
}

export async function deleteAllContacts() {
  await wait()
  await storeList([])
}

export async function createContact(contact: Contact) {
  const list = await getList()
  list.push(contact)
  await storeList(list)
}

export async function deleteContact(id: number) {
  const list = await getList()
  await storeList(list.filter((contact) => contact.id !== id))
}

export async function editContact(contact: Contact) {
  await deleteContact(contact.id)
  await createContact(contact)
}

export async function getContacts(): Promise<Contact[]> {
  return await getList()
}

export async function getContact(id: number): Promise<Contact> {
  const contacts = await getContacts()
  const contact = contacts.find((contact) => contact.id === id)
  if (contact === undefined) throw new Error(`contact with id ${id} not found`)
  return contact
}
