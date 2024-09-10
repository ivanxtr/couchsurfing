import Users from './components/Users'
import { UserTypes } from './types'

export default async function Home() {
  let data = await fetch('http://localhost:3000/api/users')
  let users: UserTypes[] = await data.json()

  return (
    <div className="flex flex-wrap overflow-scroll items-start	justify-center mb-48">
      <Users data={users} />
    </div>
  )
}
