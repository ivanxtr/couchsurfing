import { NextResponse } from 'next/server'
import users from '../../mocks/users.json'

export function GET(req: Request, { params }: { params: { id: string } }) {
  if (params.id) {
    const user = users.find((user) => user.id === parseInt(params.id))
    if (user) {
      const friends: { id: number; name: string }[] = []
      user.friendship.map((id: number) => {
        friends.push({
          id,
          name: users[id - 1].name,
        })
      })
      return NextResponse.json({ ...user, friendship: friends })
    }
  }
  return NextResponse.json({ error: 'No User Found' }, { status: 400 })
}
