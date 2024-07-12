/* eslint-disable react/prop-types */

const Banner= (props)=>{
    const{id,url,title,description}=props.video;
   
    return(
        <section className="max-w-4xl mx-auto mb-12 py-4" >
            <div className="flex items-center bg-transparent shadow-md rounded-lg overflow-hidden justify-between">
                <div className="w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-2 text-gray-300">{title}</h1>
                    <p className="text-gray-300">{description}</p>
                </div>
            <div className="w-1/2">
               <iframe key={`video-${id}`} width="100%" height="100%" 
               src={url} 
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
    )
}

export default Banner;