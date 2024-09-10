import { NextResponse } from 'next/server'
import users from '../mocks/users.json'

export function GET() {
  return NextResponse.json(users)
}
