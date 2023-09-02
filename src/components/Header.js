import React from 'react'
import CompLogo from "../Assets/comp_icon.svg"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Header = () => {
    return (
        <nav className='  flex justify-around  py-5 items-center'>

            <div className='flex items-center'>Growth <img src={ CompLogo } alt="" /></div>
            <div className=' text-white flex  items-center'>
                <ul className='flex justify-between items-center gap-5 text-sm font-normal'>
                    <li>Outcome <KeyboardArrowUpIcon /> </li>
                    <li>Community</li>
                    <li>Resource <KeyboardArrowUpIcon /></li>
                    <li>Membership Guide</li>
                    <li>Login</li>
                </ul>

            </div>
            <div className='border border-white flex justify-center h-fit items-center  rounded p-3   text-white text-sm  nav-btn-styling'>
                Become a Member
            </div>

        </nav>
    )
}

export default Header
