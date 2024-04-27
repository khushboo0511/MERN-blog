import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <Navbar className='border-b-2'>
    <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
      <span className='px-3 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg text-white'>Khushu's</span>
      <span>Blog</span>
    </Link>
    <form>
      <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline ' />
    </form>
    <Button className='w-12 h-10 lg:hidden pill' color='gray'>
      <AiOutlineSearch />
    </Button>
    
    <Navbar.Collapse>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to='/'>
              Home
            </Link>
          </Navbar.Link >
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to='/about'>
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to='/projects'>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
        <div className='flex gap-2' >
      <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
        <FaMoon />
      </Button>
      <Link to='/signin' >
        <Button className=' text-sm px-1 py-1' gradientDuoTone='purpleToPink'>
          Sign In
        </Button>
        </Link>
        <Navbar.Toggle />
    </div>
    </Navbar>
  )
}

export default Header