import React, { useEffect, useState } from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Video_upload = () => {

  const [videoField,setVideoField] = useState({title:"",description:"",category:""})

  const handleInputChange = (e,name)=>{
    setVideoField((prev)=>({...prev,[name]:e.target.value}))
  }

  useEffect(()=>{
    console.log(videoField); // ✅ This will log updated state
    
  },[videoField])


  return (
    <div className='flex flex-col items-center justify-center  h-[89vh] bg-black text-white'>
        <h1 className='text-white  text-3xl font-bold mb-5'>Upload your video</h1>
        <div className="upload-form border-2 w-[45%] flex flex-col items-center gap-5 py-2">
        <div className="yt-icon  text-white border-white/20   flex items-center justify-center ">
            <YouTubeIcon sx={{fontSize:"50px",color:"red"}}/>
            <h1 className='text-white text-3xl font-bold'>YouTube</h1>
        </div>

        <div className="input-section w-full flex flex-col items-center gap-5">
            <input type="text" placeholder='Title of the video' value={videoField.title} className='w-[70%] h-10 bg-[#222222] border-none px-5' onChange={(e)=>handleInputChange(e,"title")}/>
            <input type="text" placeholder='Description' value={videoField.description} className='w-[70%] h-10 bg-[#222222] border-none px-5' onChange={(e)=>handleInputChange(e,"description")}/>
            <input type="text" placeholder='Category' value={videoField.category} className='w-[70%] h-10 bg-[#222222] border-none px-5' onChange={(e)=>handleInputChange(e,"category")}/>
            <div>Thumbnail <input type="file" accept='image/*' name="" id="" />
            </div>
            <div>Video <input type="file" name="" id="" /></div>
        </div>

        <div className="file-section text-white flex gap-[100px] items-center">
            <div className='py-1 px-2 border rounded-lg hover:bg-white hover:text-black'>Upload</div>
            <Link to={'/'} className='py-1 px-2 border rounded-lg hover:bg-white hover:text-black'>Home</Link>
        </div>
        </div>
    </div>
  )
}

export default Video_upload
