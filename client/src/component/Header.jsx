import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';


export default function Header() {
    const { currentUser } = useSelector(state => state.user)
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/' className='flex items-center gap-2 '>
                    <img src={logo} alt='NestEdge Logo' className='h-[1.6rem] sm:h-[1.9rem] translate-y-[2px]' />
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Nest</span>
                        <span className='text-slate-700'>Edge</span>
                    </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex '>
                    <input type="text" placeholder='Search....' className='bg-transparent items-center focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-slate-500 ' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (
                            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
                        ) : <li className=' text-slate-700 hover:underline'>Signin</li>
                        }
                    </Link>
                </ul>
            </div>
        </header >
    );
}
