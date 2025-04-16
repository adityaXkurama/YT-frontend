import React, { useEffect, useState } from "react";
import "./pages.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { Link } from "react-router-dom";

const Video = () => {

  const [comment,setComment]= useState("")
  useEffect(() => {console.log(comment)}, [comment]);
  
  return (
    <div className="video-page text-white  bg-black top-12 relative md:flex mx-12 justify-start  py-3">
      <div className="videoPostSection ml-5">
        <div className="videoPlay">
          <video
            width="400"
            controls
            autoPlay
            muted
            className="video-youtube-play"
          >
            <source
              src={
                "https://res.cloudinary.com/dgnxykbdh/video/upload/v1742199258/xiygok2j11bmfaky2gol.mp4"
              }
              type="video/mp4"
            />
            <source
              src={
                "https://res.cloudinary.com/dgnxykbdh/video/upload/v1742199258/xiygok2j11bmfaky2gol.mp4"
              }
              type="video/webm"
            />
            your browser does not support the video tag.
          </video>
        </div>

        <div className="video-info">
          <div className="video-title mb-2 font-bold line-clamp-2">
            {`javascript for beginners`}
          </div>
          <div className="channel-info">
            <div className="profile">
              <Link to={`/users/12`} >
              <div className="profile-pic w-8 h-8 ">
                <img
                  src="/yt_thumbnail.png"
                  alt=""
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              </Link>
              <div className="channel-name">
                <div className="name">Cartoon Network india indiaaa </div>
                <div className="subscribers">100k subscribers</div>
              </div>
              <div className="subscribe-button">
                <button className="h-full w-full">Subscribe</button>
              </div>
            </div>
            <div className="like-dislike flex  items-center  px-2  mr-2">
              <div className="like px-2 rounded-l-[35px] bg-[#a5a5a538] py-1 hover:bg-[#a5a5a54f]">
                <ThumbUpOutlinedIcon className="text-white" /> 10
              </div>
              <div className=" w-0  h-6  bg-[#a5a5a538]"></div>
              <div className="dislike px-2 rounded-r-[35px] bg-[#a5a5a538] py-1 hover:bg-[#a5a5a54f]">
                <ThumbDownAltOutlinedIcon className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="description-box flex flex-col p-3 w-[100%] rounded-[10px] bg-[#a5a5a538] mt-2">
          {/* <div className="views"></div> */}
          <div className="date">apr 4,2025</div>
          <div className="">this is a video description box</div>
        </div>

        <div className="comments-section flex flex-col mt-5">
          <div className="noofcomments  text-2xl font-semibold mb-4">
            2 comments
          </div>
          <div className="commentarea flex gap-5 ">
            <div className="profilePic h-[30px] w-[30px]">
              <img
                src="/yt_thumbnail.png"
                className="h-full w-full object-cover rounded-full"
                alt=""
              />
            </div>
            <div className="commentinput flex flex-col  w-[calc(100%-50px)]">
              <input
                type="text"
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
                name=""
                placeholder="add a comment"
                className="bg-transparent border-b w-[100%] focus:outline-none"
                id=""
              />
              <div className="cancelsubmitbtn flex  justify-end gap-4 mt-2 mr-2">
                <div className="cancel  h-9 flex items-center px-4 rounded-3xl hover:bg-[#a5a5a545]">
                  Cancel
                </div>
                <div className="cancel  h-9 flex items-center px-4 rounded-3xl bg-[#a5a5a545]">
                  Comment
                </div>
              </div>
            </div>
          </div>

          <div className="otherscomment mb-3">
            <div className="commentarea flex gap-5 ">
              <div className=" h-[30px] w-[30px]">
                <img
                  src="/yt_thumbnail.png"
                  className="h-full w-full object-cover rounded-full"
                  alt=""
                />
              </div>

              <div className="flex flex-col">
                <div className="username flex gap-4">
                  <div className="whitespace-nowrap font-semibold">
                    Cartoon Network india
                  </div>
                  <div className="whitespace-nowrap text-[#a5a5a592]">
                    apr 4,2025
                  </div>
                </div>
                <div className="comment mt-1 font-normal">
                  this is a comment box
                </div>
              </div>
            </div>
          </div>
          <div className="otherscomment mb-3">
            <div className="commentarea flex gap-5 ">
              <div className=" h-[30px] w-[30px]">
                <img
                  src="/yt_thumbnail.png"
                  className="h-full w-full object-cover rounded-full"
                  alt=""
                />
              </div>

              <div className="flex flex-col">
                <div className="username flex gap-4">
                  <div className="whitespace-nowrap font-semibold">
                    Cartoon Network india
                  </div>
                  <div className="whitespace-nowrap text-[#a5a5a592]">
                    apr 4,2025
                  </div>
                </div>
                <div className="comment mt-1 font-normal">
                  this is a comment box
                </div>
              </div>
            </div>
          </div>
          <div className="otherscomment mb-3">
            <div className="commentarea flex gap-5 ">
              <div className=" h-[30px] w-[30px]">
                <img
                  src="/yt_thumbnail.png"
                  className="h-full w-full object-cover rounded-full"
                  alt=""
                />
              </div>

              <div className="flex flex-col">
                <div className="username flex gap-4">
                  <div className="whitespace-nowrap font-semibold">
                    Cartoon Network india
                  </div>
                  <div className="whitespace-nowrap text-[#a5a5a592]">
                    apr 4,2025
                  </div>
                </div>
                <div className="comment mt-1 font-normal">
                  this is a comment box
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="videoSuggestions max-w-[450px] px-4 py-2 flex flex-col gap-4   ml-5">
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
        <div className="videoSuggestionsBlock flex cursor-pointer gap-4 ">
          <div className="video_suggetion_thumbnail">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className=" rounded-xl"
            />
          </div>
          <div className="video_suggetions_About">
            <div className="video_suggetions_About_title line-clamp-2">
              T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india
            </div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">Cricket 320</div>
            <div className="video_suggetions_About_Profile text-[14px] text-[#f1f1f1bd]">
              136K views . 1 day ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

