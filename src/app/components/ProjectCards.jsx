import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCards = ({ imageURL, title, description}) => {
  return (
    <div>
      <div className='h-52 md:h-72 rounded-t-xl relative group' style={{ background: `url(${imageURL})`, backgroundSize: 'cover' }}>
         <div className="absolute inset-0 flex items-center justify-center bg-[#181818]/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className='flex space-x-4'>
                <Link href='/' className='text-white hover:text-blue-500 transition-colors duration-300'>
                <CodeBracketIcon className='h-6 w-6' />
                </Link>
                <Link href='/' className='text-white hover:text-blue-500 transition-colors duration-300'>
                <EyeIcon className='h-6 w-6' />
                </Link>
            </div>
         </div>
      </div>
      <div className='text-white rounded-b-xl mt-3 bg-[#121212] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCards
