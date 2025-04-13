import React from 'react'
import './component.css';
import { Link } from 'react-router-dom';


const HomePage = ({sideNavbar}) => {
  const sidebar = false
  const options=["All","Gaming","Music","Esports","Live","Battlegrounds Mobile India","Mixes","Web Development","Reaction Videos","Computer Programming","Action Thrillers","Superhero Movies","PUBG Mobile"]
  return (
    <div className={`${sideNavbar? 'homepage ':'homepage-full '}`}>
      <div className={`${sideNavbar? 'homePage-option ':'homePage-full-option '}`}>
        {options.map((item,index)=>(
          <div key={index} className='py-1  my-2 rounded-md px-3 bg-zinc-800 whitespace-nowrap'>{item}</div>
        ))}
      </div>
      <div className={`${sideNavbar? 'homepage-videoPage':'homepage-full-videoPage'}`}>
        <Link to={`/watch/12`} className="videos">
          <div className="yt-thumbnail w-full  relative mb-2">
            <img src="yt_thumbnail.png" className='w-full rounded-md'  alt="" />
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
          <div className="yt-thumbnail w-full  relative mb-2">
            <img src="yt_thumbnail.png" className='w-full rounded-md'  alt="" />
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
          <div className="yt-thumbnail w-full  relative mb-2">
            <img src="yt_thumbnail.png" className='w-full rounded-md'  alt="" />
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
          <div className="yt-thumbnail w-full  relative mb-2">
            <img src="yt_thumbnail.png" className='w-full rounded-md'  alt="" />
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
          <div className="yt-thumbnail w-full  relative mb-2">
            <img src="yt_thumbnail.png" className='w-full rounded-md'  alt="" />
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
  )
}

export default HomePage
  