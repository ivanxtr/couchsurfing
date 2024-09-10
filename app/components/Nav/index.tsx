import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://ht-assets.couchsurfing.com/assets/logo-orange-0f7d0aed6c4bf4174f2c0f70bd7ebbb9e75b8feea0d21b03e18d8350c249048e.png"
            className="h-8"
            alt="Logo"
            width={95}
            height={32}
          />
        </a>
      </div>
    </nav>
  )
}

export default Nav
