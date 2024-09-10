import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { UserTypes } from '../../types'

const User = ({ user }: { user: UserTypes }) => (
  <div className="h-[80vh] bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
    <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
      <div className=" h-32 overflow-hidden">
        <Image
          className="w-full"
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt=""
          width={485}
          height={128}
        />
      </div>
      <div className="flex justify-center px-5  -mt-12">
        <Image
          className="h-32 w-32 bg-white p-2 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
          width={128}
          height={128}
        />
      </div>
      <div className=" ">
        <div className="text-center px-14">
          <h2 className="text-gray-800 text-3xl font-bold">{user?.name}</h2>
          <p className="mt-2 text-gray-500 text-sm">@{user.username}</p>
          <p className="text-gray-400 mt-2 hover:text-blue-500">
            {user?.email}
          </p>
          <p className="mt-2 text-gray-500 text-sm">{user.phone}</p>
          <p className="mt-2 text-gray-500 text-sm">{user.website}</p>
          <p className="mt-2 text-gray-500 text-sm">{user.company.name}</p>
        </div>
        <hr className="mt-6" />
        <h3 className="font-medium dark:text-black py-1 px-4">Connections</h3>
        {user.friendship &&
          user.friendship.map((friend, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 py-1 px-4">
                <Image
                  className="w-10 h-10 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <Link href={`/user/${friend.id}`}>
                  <div className="font-medium dark:text-black">
                    <div>{friend.name}</div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
)

export default User
