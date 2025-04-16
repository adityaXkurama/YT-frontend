import React, { useEffect, useState } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = ({setLoginModal}) => {
    const navigate = useNavigate()

    const [loginField,setLoginField] = useState({email:"",username:"",password:""})
    const handleInputChange = (e,name)=>{
        setLoginField((prev)=>({...prev,[name]:e.target.value}))
        // console.log(loginField)
    }

    useEffect(() => {
        console.log(loginField); // ✅ This will log updated state
    }, [loginField]);

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("Subbmiting form...")

        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/login`,loginField)
        console.log(res.data)
        navigate("/")
        setLoginModal()
    }

  return (
    <div className='flex justify-center items-center h-screen w-full bg-black/80 text-white absolute inset-0 '>
        <div className="login_card border w-[40%] h-[60%] mb-12 flex flex-col items-center justify-center gap-8 bg-black rounded-lg">
            <div className="yt-icon  text-white border-white/20   flex items-center justify-center ">
                <YouTubeIcon sx={{fontSize:"50px",color:"red"}}/>
                <h1 className='text-white text-3xl font-bold'>YouTube</h1>
            </div>
            <div className="input-section w-full flex flex-col items-center gap-5">
                <input type="text" placeholder='Email' value={loginField.email} onChange={(e)=>handleInputChange(e,"email")} className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
                <input type="text" placeholder='Username' value={loginField.username} onChange={(e)=>handleInputChange(e,"username")} className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
                <input type="password" value={loginField.password} onChange={(e)=>handleInputChange(e,"password")} placeholder='Password' className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
            </div>

            <div className="file-section text-white flex gap-[90px] items-center ">
                <div  className='py-1 px-2 border rounded-lg hover:bg-white hover:text-black cursor-pointer transition-all' onClick={(e)=>handleSubmit(e)}>Login</div>
                <Link to={`/signup`} onClick={()=>setLoginModal()}  className='py-1 px-2 border rounded-lg hover:bg-white hover:text-black cursor-pointer transition-all'>Sign Up</Link>
                <div onClick={()=>setLoginModal()} className='py-1 px-2 border rounded-lg hover:bg-white hover:text-black cursor-pointer shadow-2xl transition-all'>Cancel</div>
            </div>
            
        </div>
    </div>
  )
}

export default Login



