/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import EmptyVideos from "./EmptyVideos";

const Banner= ({videos})=>{
    const [currentVideo,setVideo]=useState({});
    
    
    useEffect(()=>{
        const randomVideo= ()=>{
        return videos[Math.floor(Math.random() * (videos.length - 1)) + 1];
    };
    
    if(videos.length!=0){
        setVideo(randomVideo())
    }
    },[])
    

    return(
        videos.length != 0 ?
        
        
        <section className="max-w-4xl mx-auto mb-5 pt-10" >
            <div className="flex items-center bg-transparent shadow-md rounded-lg overflow-hidden justify-between">
                <div className="w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-2 text-gray-300">{currentVideo.title}</h1>
                    <p className="text-gray-300">{currentVideo.description}</p>
                </div>
            <div className="w-1/2">
               <iframe key={`video-${currentVideo.id}`} width="100%" height="100%" 
               src={currentVideo.url} 
               title="YouTube video player"  
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerPolicy="strict-origin-when-cross-origin" 
               allowFullScreen
               className="rounded-lg"
               >

               </iframe>
            </div>
            </div>
   
    </section>
    :
    <EmptyVideos/>

    
        
    )
}

export default Banner;