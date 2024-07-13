/* eslint-disable react/prop-types */

const VideoCard=({title,url,deleteVideo,id})=>{
    return(
      <article className="flex-none w-1/3 max-h-min p-0  bg-transparent rounded-lg shadow-md" >
       <div className="relative">
            <iframe  
               src={url}
               title="YouTube video player"  
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerPolicy="strict-origin-when-cross-origin" 
               allowFullScreen
               className="w-full h-full rounded-t-md"
               ></iframe>
        </div>
      <div className="bg-darkGray  overflow-hidden relative rounded-b-md">
        <div className="bg-gradient-to-r from-cyan-700 to-blue-950 text-gray-300 text-sm font-bold text-center ">
          <h2>{title}</h2>
        </div>
       
        <div className="justify-evenly flex">
          {/*<img src="/public/edit.png" alt="" className="w-[30px] h-[30px]" />*/}
         <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z" clipRule="evenodd" onClick={()=>deleteVideo(id)}/>
</svg>

        </div>
       </div>
    </article>
    )
}

export default VideoCard