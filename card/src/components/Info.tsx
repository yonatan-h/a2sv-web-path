interface Props {
  name: string
  website?: string
}
function Info({ name, website }: Props) {
  return (
    <div>
      <p className="title">{name}</p>
      <a href={website} className="red">{website}</a>
    </div>
  )
}

export default Info
