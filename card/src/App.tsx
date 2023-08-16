import './App.css'
import { User } from './models'
import Card from './components/Card'

function App() {
  const user1: User = {
    name: 'Abebe Kebede',
    website: 'https://abebe.com',
    imagePath: '/src/assets/abebe.jpg',
    bio: `Simplicity is the key to happiness
    If I was a writer, I’d have a better Instagram bio quote
    Life is what happens to you while you scroll through Instagram
    A day in the life of me: Eat avocado toast, post Instagram videos, read Instagram comments`,
  }

  return (
    <div className="container">
      <Card user={user1} />
    </div>
  )
}

export default App
