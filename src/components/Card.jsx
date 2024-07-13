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
           <img src="/public/delete.png" alt="" className="w-[20px] h-[20px]" onClick={()=>deleteVideo(id)}/>
        </div>
       </div>
    </article>
    )
}

export default VideoCard