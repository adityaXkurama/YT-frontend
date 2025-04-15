import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full bg-black/80 pt-10 text-white'>
        <div className="signup border w-[40%] py-4 mb-12 flex flex-col items-center justify-center gap-8 bg-black rounded-lg">
            <div className="yt-icon  text-white border-white/20   flex items-center justify-center ">
                <YouTubeIcon sx={{fontSize:"50px",color:"red"}}/>
                <h1 className='text-white text-3xl font-bold'>SignUp</h1>
            </div>
            <div className="input-section w-full flex flex-col items-center gap-5">
                <input type="text" placeholder='FullName' className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
                <input type="text" placeholder='Username' className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
                <input type="email" placeholder='Email' className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
                <input type="password" placeholder='Password' className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
                <div className="">Avatar <input type="file" name='avatar' placeholder='Avatar'/></div>
                <div className="pl-3">Cover Image <input type="file" name='coverImage' placeholder='CoverImage'/></div>
            </div>

            <div className="file-section text-white flex gap-[90px] items-center ">
                <div className='py-1 px-2 border rounded-lg hover:bg-white hover:text-black cursor-pointer transition-all'>Sign Up</div>
                <Link to={`/`} className='py-1 px-2  border rounded-lg hover:bg-white hover:text-black cursor-pointer shadow-2xl transition-all'>Home</Link>
            </div>
            
        </div>
    </div>
  )
}

export default SignUp
