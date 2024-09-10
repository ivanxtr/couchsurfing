import { NextResponse } from 'next/server'
import users from '../mocks/users.json'

export function GET(request: Request) {
  return NextResponse.json(users)
}
