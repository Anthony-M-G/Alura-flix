/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Banner from "../components/Banner";
import Form from "../components/Form";
import MultiCardCarousel from "../components/Multicard";
import Footer from "../components/Footer";
import FormCategory from "../components/FormCategory";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Home = () => {
    const [videos, setVideo] = useState(
[
    {
        id: 1,
        title: "React Tutorial",
        url: "https://www.youtube.com/embed/4UZrsTqkcW4",
        category: "Programación",
    },
    {
        id: 2,
        title: "Angular Tutorial",
        url: "https://www.youtube.com/embed/3mK5v9l3Dec",
        category: "Programación",
    },
    {
        id: 3,
        title: "Vue Tutorial",
        url: "https://www.youtube.com/embed/Wy9q22isx3U",
        category: "Programación",
    },
    {
        id: 4,
        title: "Svelte Tutorial",
        url: "https://www.youtube.com/embed/uK2RnIzrQ0M",
        category: "Programación",
    },
    {
        id: 5,
        title: "Tech News Today",
        url: "https://www.youtube.com/embed/KnXGxAYI-oo",
        category: "Noticias",
    },
    {
        id: 6,
        title: "Daily Tech News",
        url: "https://www.youtube.com/embed/2yyxo9oz8Zk",
        category: "Noticias",
    },
    {
        id: 7,
        title: "Breaking Tech News",
        url: "https://www.youtube.com/embed/tdzXI4f4LMI",
        category: "Noticias",
    },
    {
        id: 8,
        title: "Latest Tech Updates",
        url: "https://www.youtube.com/embed/2vj37z0Z-vE",
        category: "Noticias",
    },
    {
        id: 9,
        title: "The Future of AI",
        url: "https://www.youtube.com/embed/2w8eRSDP3cI",
        category: "Tecnología",
    },
    {
        id: 10,
        title: "Quantum Computing Explained",
        url: "https://www.youtube.com/embed/6XIdaXR0-mE",
        category: "Tecnología",
    },
    {
        id: 11,
        title: "Blockchain Basics",
        url: "https://www.youtube.com/embed/hYip_Vuv8J0",
        category: "Tecnología",
    },
    {
        id: 12,
        title: "5G Technology",
        url: "https://www.youtube.com/embed/kH78eIziFOY",
        category: "Tecnología",
    }
]);
  
    const { categories,stateModal,stateModalCategory} = useContext(GlobalContext);
    
    
   
    const deleteVideo = (id) => {
        const newVideos = videos.filter(video => video.id !== id);
        setVideo(newVideos);
    };
    
    
    

    return (
        <>
            <main className="w-full bg-black   text-center">
                {stateModal && <Form videos={videos} setVideo={setVideo}/>}
                {stateModalCategory && <FormCategory/>}
                <Banner videos={videos} />
                {categories.map((category, index) => (
                    <MultiCardCarousel key={`cat-${category}-${index}`} category={category} videos={videos} deleteVideo={deleteVideo} />
                    )
                  )
                }
            </main>
            <Footer />
        </>
    );
};

export default Home;
