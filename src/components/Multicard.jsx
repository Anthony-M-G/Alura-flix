/* eslint-disable react/prop-types */
import { useState } from 'react';
import VideoCard from './Card';
const MultiCardCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const category=props.category
    const listVideos = props.videos;
    const deleteVideo=props.deleteVideo;
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listVideos.length);
    

  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listVideos.length) % listVideos.length);
   
  };
if(currentIndex>listVideos.length-3) {
  
  setCurrentIndex(0)
 
}
const filteredVideos=listVideos.filter((video)=>video.category===category)
  
    return(
       
        
    <>
    <h1 className="px-2 py-1  inline-block rounded-md text-xl font-bold  text-gray-200 " >{category}</h1>
        <section className="max-w-4xl mx-auto bg-transparent p-10 my-0 rounded-xl relative flex justify-between text-center ">
            <div className="w-full">
            <div className="flex space-x-4 ">
            {filteredVideos.slice(currentIndex, currentIndex + 3).map((video) => (
               
                    <VideoCard key={video.id} title={video.title} description={video.description} url={video.url} deleteVideo={deleteVideo} id={video}/>
               
               
               
            ))}
          </div>
          <div className="flex items-center justify-between mt-4  bottom-44">
            <button className="w-6 h-6 rounded-full bg-gray-300  relative right-4" onClick={handlePrev}>&lt;</button>
            <button className="w-6 h-6 rounded-full bg-gray-300 relative left-10" onClick={handleNext}>&gt;</button>
          </div>
       
     
    </div>
    </section>
      </>
  )
   
}
  
        
    
   



export default MultiCardCarousel;