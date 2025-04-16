import React, { useEffect, useState } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import axios from 'axios'


const SignUp = () => {

    const [signupField,setSignupField] = useState({fullname:"",username:"",email:"",password:""})

    const [avatar,setAvatar]= useState(null)
    const [coverImage,setCoverImage]= useState(null)

    const handleInputChange = (e,name)=>{
        setSignupField((prev)=>({...prev,[name]:e.target.value}))
    }

    useEffect(()=>{
        console.log(signupField); // ✅ This will log updated state
        
    },[signupField])

    const handleFileChange = (e) => {
        if (e.target.name === 'avatar') {
            setAvatar(e.target.files[0]);
        } else if (e.target.name === 'coverImage') {
            setCoverImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Subbmiting form...");
        

        const data = new FormData();
        Object.entries(signupField).forEach(([key, value]) => {
            data.append(key, value);
        });
        if (avatar) data.append('avatar', avatar);
        if (coverImage) data.append('coverImage', coverImage);

        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/register`, data);
            console.log(res.data);
        } catch (err) {
            console.error('Error uploading:', err);
        }
    };


  return (
    <div className='flex justify-center items-center h-screen w-full bg-black/80 pt-10 text-white'>
        <div className="signup border w-[40%] py-4 mb-12 flex flex-col items-center justify-center gap-8 bg-black rounded-lg">
            <div className="yt-icon  text-white border-white/20   flex items-center justify-center ">
                <YouTubeIcon sx={{fontSize:"50px",color:"red"}}/>
                <h1 className='text-white text-3xl font-bold'>SignUp</h1>
            </div>
            <div className="input-section w-full flex flex-col items-center gap-5">
                <form action="" onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>
                <input type="text" placeholder='FullName' value={signupField.fullname} className='w-[70%] h-10 bg-[#222222] border-none px-5' onChange={(e)=>handleInputChange(e,"fullname")}/>
                <input type="text" placeholder='Username' value={signupField.username} className='w-[70%] h-10 bg-[#222222] border-none px-5' onChange={(e)=>handleInputChange(e,"username")}/>
                <input type="email" placeholder='Email' value={signupField.email} className='w-[70%] h-10 bg-[#222222] border-none px-5' onChange={(e)=>handleInputChange(e,"email")}/>
                <input type="password" placeholder='Password' value={signupField.password} className='w-[70%] h-10 bg-[#222222] border-none px-5' onChange={(e)=>handleInputChange(e,"password")}/>
                <div className="">Avatar <input type="file" name='avatar' placeholder='Avatar' onChange={handleFileChange}/></div>
                <div className="pl-3">Cover Image <input type="file" name='coverImage' placeholder='CoverImage' onChange={handleFileChange}/></div>
                </form>
            </div>

            <div className="file-section text-white flex gap-[90px] items-center ">
                <div className='py-1 px-2 border rounded-lg hover:bg-white hover:text-black cursor-pointer transition-all' onClick={handleSubmit}>Sign Up</div>
                <Link to={`/`} className='py-1 px-2  border rounded-lg hover:bg-white hover:text-black cursor-pointer shadow-2xl transition-all'>Home</Link>
            </div>
            
        </div>
    </div>
  )
}

export default SignUp
