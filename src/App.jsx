import { useEffect, useState } from 'react'
import { Users } from './components/FetchUsers'
import { UserCard } from './components/UserCard'
import './App.css'

function App() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])

  useEffect(() => {
    if (users.length === 0) {
      Users()
        .then(users => {
          setUsers(users)
        })
    }
  }, [])

  console.log("users", users
  )

  return (
    <>
      <h1>Gallery</h1>
      <div className="card">
        <UserCard users={users} />
      </div>
    </>
  )
}

export default App
