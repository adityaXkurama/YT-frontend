import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';

const Video_upload = () => {
  return (
    <div className='flex flex-col items-center justify-center  h-[89vh] bg-black text-white'>
        <div className="upload-form border-2 w-[45%] flex flex-col items-center ">
        <h1 className='text-white  text-3xl font-bold'>Upload your video</h1>
        <div className="yt-icon  text-white border-white/20   flex items-center justify-center mt-10">
            <YouTubeIcon sx={{fontSize:"50px",color:"red"}}/>
            <h1 className='text-white text-3xl font-bold'>YouTube</h1>
        </div>

        <div className="input-section w-full flex flex-col items-center gap-5">
            <input type="text" placeholder='Title of the video' className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
            <input type="text" placeholder='Description' className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
            <input type="text" placeholder='Category' className='w-[70%] h-10 bg-[#222222] border-none px-5'/>
            <div>Thumbnail <input type="file" accept='image/*' name="" id="" />
            </div>
            <div>Video <input type="file" name="" id="" /></div>
        </div>

        <div className="file-section text-white flex flex-col items-center">
            
        </div>
        </div>
    </div>
  )
}

export default Video_upload
