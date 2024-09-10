import React from 'react'
import { UserTypes } from '../../types'

import UserComponent from '../../components/User'

const User = async ({ params }: { params: { id: number } }) => {
  let data = await fetch(`http://localhost:3000/api/user/${params.id}`)
  let user: UserTypes = await data.json()

  return <UserComponent user={user} />
}

export default User
