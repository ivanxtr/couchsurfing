import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { UserTypes } from '../../types'

const Users = ({ data }: { data: UserTypes[] }) => {
  return (
    <React.Fragment>
      {data.map((user: UserTypes) => (
        <Link
          key={user.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72 h-72 py-14 mx-2 mt-4 cursor-pointer"
          href={`/user/${user.id}`}
        >
          <div className="flex flex-col items-center pb-10">
            <Image
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user image"
              width={96}
              height={96}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user.phone}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user.company.name}
            </span>
          </div>
        </Link>
      ))}
    </React.Fragment>
  )
}

export default Users
