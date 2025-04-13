import React, { useState,useEffect } from 'react'
import './component.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Link,useNavigate } from 'react-router-dom';
// import Login from '../Login/login';
// import axios from 'axios';
const Navbar = ({setSideNavbarFunc,sideNavbar}) => {
  const [userPic, setUserPic] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain")
  const [navbarModal,setNavbarModal] = useState(false);
  // const [login,setLogin] = useState(false);
  // const [isLogedIn,setIsLogedIn] = useState(false)
  // const navigate = useNavigate();

  const handleClickModal =()=>{
    setNavbarModal(prev=>!prev);
  }
  const sideNavbarFunc=()=>{
    setSideNavbarFunc(prev=>!prev)
  }
  // const handleprofile =()=>{
  //   let userId = localStorage.getItem("userId")
  //   navigate(`/user/${userId}`);
  //   setNavbarModal(false);
  // }

  const setLoginModal=()=>{
    setLogin(false);
  }

  const onclickOfPopUpOption =(button)=>{
    setNavbarModal(false);

    if(button==="login"){
      setLogin(true);
    }else{
      localStorage.clear();
      getLogoutFun();
      setTimeout(() => {
        navigate('/')
        window.location.reload();
    }, 2000);
    }
  }

  const getLogoutFun = async()=>{
    axios.post("http://localhost:4000/auth/logout",{},{ withCredentials: true}).then((res)=>{
      console.log("Logout ")
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    let userProfilePic = localStorage.getItem("userProfilePic");
    // setIsLogedIn(localStorage.getItem("userId")!==null?true:false);
    if(userProfilePic!==null){
      setUserPic(userProfilePic)
    }

  },[])


  return (
    <div className=' flex items-center justify-between bg-black w-[100%] h-12  fixed z-20'>

      <div className="navbar-left flex items-center gap-5 pl-5 ">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color: "white" }} />
        </div>

        <Link to={'/'} className="navbar_youtubeImg flex items-center ">
          <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage text-red-600 z-10' />
          <div className='navbar_utubeTitle text-white text-[20px] font-normal'>YouTube</div>
          <div className='w-3 h-2  bg-white absolute ml-3 z-0'></div>
        </Link>

      </div>

      <div className="navbar-middle flex items-center justify-center w-[50%] ">
        {/* Please watch the video for the code} */}
        <input type="text" className='w-[80%] rounded-l-[20px] h-10 bg-[#121212] pl-[30px] text-lg border border-zinc-700' placeholder='search' />
        <div className='bg-white/20 h-10 w-10 grid place-items-center rounded-r-[20px]'>
        <SearchIcon sx={{color:"white",fontSize: "30px"}} />
        </div>

        <div className="pl-2 navbar_mike">
          <KeyboardVoiceIcon sx={{ color: "white" ,fontSize: "30px"}} />
        </div>
      </div>

      <div className="navbar-right flex items-center justify-center gap-5 pr-5">

        <Link to={'/763/upload'}>
          <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        </Link>
        
        <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <img onClick={handleClickModal} src={userPic} className='navbar-right-logo size-[30px] rounded-full cursor-pointer' alt='Logo' />

        { navbarModal &&
          <div className='navbar-modal absolute top-[35px] bg-[#555555] text-white w-[80px] '>
            {/* Please watch the video for the code} */}
            <div className="navbarModal-item ">profile</div>
            <div className="navbarModal-item ">log out</div>
            <div className="navbarModal-item ">profile</div>

          </div>
        }

      </div>

      {/* {
        login && <Login setLoginModal={setLoginModal} />
      } */}
    </div>
  )
}

export default Navbar