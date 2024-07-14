/* eslint-disable react/prop-types */
import { useState } from 'react';
import VideoCard from './Card';
import EmptyVideos from './EmptyVideos';
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
        <section className="max-w-3xl max-h-2xl mx-auto bg-opacity-50 bg-darkGray p-4  rounded-xl relative flex text-center ">
            <div className="w-full">
            <div className="flex space-x-4 ">
            {
            filteredVideos.length==0 ? <EmptyVideos/>
            :
            filteredVideos.slice(currentIndex, currentIndex + 3).map((video) => (
                <VideoCard key={video.id} title={video.title} description={video.description} url={video.url} deleteVideo={deleteVideo} id={video.id}/>
                )
              )
              
            }
          </div>
          <div className="mt-2">
            <button className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-600 to-gray-50  relative right-4" onClick={handlePrev}>&lt;</button>
            <button className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-600 to-gray-50 relative left-10" onClick={handleNext}>&gt;</button>
          </div>
       
     
    </div>
    </section>
      </>
  )
   
}
  
        
    
   



export default MultiCardCarousel;