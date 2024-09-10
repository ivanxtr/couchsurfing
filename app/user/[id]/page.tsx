import React from 'react'
import { UserTypes } from '../../types'

import UserComponent from '../../components/User'

const User = async ({ params }: { params: { id: number } }) => {
  const data = await fetch(`http://localhost:3000/api/user/${params.id}`)
  const user: UserTypes = await data.json()

  return <UserComponent user={user} />
}

export default User
