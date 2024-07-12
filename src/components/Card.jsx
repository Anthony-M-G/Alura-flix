/* eslint-disable react/prop-types */

const VideoCard=({title,description,url,deleteVideo,id})=>{
    return(
      <article className="flex-none w-1/3 p-0 h-[200px] bg-white rounded-lg shadow-md" >
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
        <header className="bg-blue-500 text-gray-900 text-sm font-bold py-2 text-center ">
          <h2>{title}</h2>
        </header>
        <div className="p-1 pt-1 text-center">
          <p className="text-white">{description}</p>
        </div>
        <div className="justify-evenly flex">
          {/*<img src="/public/edit.png" alt="" className="w-[30px] h-[30px]" />*/}
           <img src="/public/imgs/delete.png" alt="" className="w-[30px] h-[30px]" onClick={()=>deleteVideo(id)}/>
        </div>
       </div>
    </article>
    )
}

export default VideoCard