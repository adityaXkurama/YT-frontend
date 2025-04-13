import React from 'react'
import SideNavbar from '../components/SideNavbar'
import "./pages.css";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

const Profile = ({sideNavbar}) => {
  return (
    <div className='profile-mainpage relative top-12 text-white flex flex-col bg-black w-full '>
      <SideNavbar sideNavbar={sideNavbar}/>
      <div className={`${sideNavbar? "profile-section w-[calc(100%-275px)] ml-[275px] min-h-[100vh] bg-black flex flex-col border pt-5":"profile-section w-[100%]  min-h-[100vh] bg-black flex border flex-col"}`}>
       <div className="top-section flex mb-8 ml-5 mt-5 w-full ">
       <div className="topsection h-[150px] w-[150px]  ">
            <img src="/yt_thumbnail.png" className='h-full w-full object-cover rounded-full' alt="" />
        </div>
        <div className="username flex flex-col gap-3 pl-4">
            <h1 className='text-3xl font-bold'>Cartoon Network India</h1>
            <div className="@name flex gap-3">
                <div>@cnindia</div>
                <div className='text-[#a5a5a58a]'>.</div>
                <div className='text-[#a5a5a58a]'>followers</div>
                <div className='text-[#a5a5a58a]'>.</div>
                <div className='text-[#a5a5a58a]'>no of videos</div>
            </div>
            <div className="abt-section text-[#a5a5a58a] line-clamp-2 w-[500px]">
                about section of the channel aaaaaaaaaaaaaa aaaaaaaaaa a aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa zzzzz zz
            </div>
        </div>
       </div>
       <div className="video-section ml-5 mt-5 w-full">
        <h1 className="text-2xl mb-2">
            Videos &nbsp; <ArrowRightIcon className='text-[#aaaaaa]'/>
        </h1>
        <div className="w-full h-0 border"></div>
        <div className="video-section grid grid-cols-4">
        <Link to={`/watch/12`} className="videos">
          <div className="yt-thumbnail w-  relative mb-2">
            <img src="/yt_thumbnail.png" className='w-full rounded-md'  alt="" />
            <div className='bg-slate-800 absolute px-1 rounded-md right-1 bottom-1'>2:38</div>
          </div>
          <div className="video-title flex gap-5">
            <div className="channel-image w-[30px] h-[30px] ">
              <img className='w-full h-full object-cover  rounded-full' src="yt_thumbnail.png" alt="" />
            </div>
            <div className="title">
              <div className="font-semibold text-xl text-[#f1f1f1]">
                video title
              </div>
              <div className="text-[#aaaaaa]">
                channel name
              </div>
              <div className="text-[#aaaaaa]">
                views
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/watch/12`} className="videos">
          <div className="yt-thumbnail w-  relative mb-2">
            <img src="/yt_thumbnail.png" className='w-full rounded-md'  alt="" />
            <div className='bg-slate-800 absolute px-1 rounded-md right-1 bottom-1'>2:38</div>
          </div>
          <div className="video-title flex gap-5">
            <div className="channel-image w-[30px] h-[30px] ">
              <img className='w-full h-full object-cover  rounded-full' src="yt_thumbnail.png" alt="" />
            </div>
            <div className="title">
              <div className="font-semibold text-xl text-[#f1f1f1]">
                video title
              </div>
              <div className="text-[#aaaaaa]">
                channel name
              </div>
              <div className="text-[#aaaaaa]">
                views
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/watch/12`} className="videos">
          <div className="yt-thumbnail w-  relative mb-2">
            <img src="/yt_thumbnail.png" className='w-full rounded-md'  alt="" />
            <div className='bg-slate-800 absolute px-1 rounded-md right-1 bottom-1'>2:38</div>
          </div>
          <div className="video-title flex gap-5">
            <div className="channel-image w-[30px] h-[30px] ">
              <img className='w-full h-full object-cover  rounded-full' src="yt_thumbnail.png" alt="" />
            </div>
            <div className="title">
              <div className="font-semibold text-xl text-[#f1f1f1]">
                video title
              </div>
              <div className="text-[#aaaaaa]">
                channel name
              </div>
              <div className="text-[#aaaaaa]">
                views
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/watch/12`} className="videos">
          <div className="yt-thumbnail w-  relative mb-2">
            <img src="/yt_thumbnail.png" className='w-full rounded-md'  alt="" />
            <div className='bg-slate-800 absolute px-1 rounded-md right-1 bottom-1'>2:38</div>
          </div>
          <div className="video-title flex gap-5">
            <div className="channel-image w-[30px] h-[30px] ">
              <img className='w-full h-full object-cover  rounded-full' src="yt_thumbnail.png" alt="" />
            </div>
            <div className="title">
              <div className="font-semibold text-xl text-[#f1f1f1]">
                video title
              </div>
              <div className="text-[#aaaaaa]">
                channel name
              </div>
              <div className="text-[#aaaaaa]">
                views
              </div>
            </div>
          </div>
        </Link>
        </div>
       </div>
      </div>
    
    </div>
  )
}

export default Profile
