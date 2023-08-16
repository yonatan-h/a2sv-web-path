import Avatar from './Avatar'
import { User } from '../models'
import Info from './Info'
import './style.css'

interface Props {
  user: User
}
function Card({ user }: Props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card__avatar-and-info">
          <Avatar imagePath={user.imagePath} />
          <Info name={user.name} website={user.website} />
        </div>
        <div className="card__bio">
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
