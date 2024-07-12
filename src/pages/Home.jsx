/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Banner from "../components/Banner";
import Form from "../components/Form";
import MultiCardCarousel from "../components/Multicard";
import Footer from "../components/Footer";

const Home = (props) => {
    const [videos, setVideo] = useState([
    {
        "id": 1,
        "title": "React Hooks",
        "description": "Aprende a usar los hooks de React",
        "url": "https://www.youtube.com/embed/dGcsHMXbSOA",
        "category": "Programación"
    },
    {
        "id": 2,
        "title": "Noticias de tecnología",
        "description": "Las últimas noticias de tecnología",
        "url": "https://www.youtube.com/embed/3KaffTIZ5II",
        "category": "Noticias tech"
    },
    {
        "id": 3,
        "title": "Python",
        "description": "Aprende Python desde cero",
        "url": "https://www.youtube.com/embed/woVJ4N9g3E8",
        "category": "Lenguajes de programación"
    },
    {
        "id": 4,
        "title": "Ciencia",
        "description": "Descubre los últimos avances científicos",
        "url": "https://www.youtube.com/embed/1nCp2w2b7WQ",
        "category": "Ciencia"
    },
    {
        "id": 5,
        "title": "React",
        "description": "Aprende React desde cero",
        "url": "https://www.youtube.com/embed/Ke90Tje7VS0",
        "category": "Programación"
    },
    {
        "id": 6,
        "title": "Noticias de tecnología",
        "description": "Las últimas noticias de tecnología",
        "url": "https://www.youtube.com/embed/3KaffTIZ5II",
        "category": "Noticias tech"
    },
    {
        "id": 7,
        "title": "Python",
        "description": "Aprende Python desde cero",
        "url": "https://www.youtube.com/embed/woVJ4N9g3E8",
        "category": "Lenguajes de programación"
    },
    {
        "id": 8,
        "title": "Ciencia",
        "description": "Descubre los últimos avances científicos",
        "url": "https://www.youtube.com/embed/1nCp2w2b7WQ",
        "category": "Ciencia"
    },
    {
        "id": 9,
        "title": "React",
        "description": "Aprende React desde cero",
        "url": "https://www.youtube.com/embed/Ke90Tje7VS0",
        "category": "Programación"
    },
    {
        "id": 10,
        "title": "Noticias de tecnología",
        "description": "Las últimas noticias de tecnología",
        "url": "https://www.youtube.com/embed/3KaffTIZ5II",
        "category": "Noticias tech"
    },
    {
        "id": 11,
        "title": "Python",
        "description": "Aprende Python desde cero",
        "url": "https://www.youtube.com/embed/woVJ4N9g3E8",
        "category": "Lenguajes de programación"
    },
    {
        "id": 12,
        "title": "Ciencia",
        "description": "Descubre los últimos avances científicos",
        "url": "https://www.youtube.com/embed/1nCp2w2b7WQ",
        "category": "Ciencia"
    },
    {
        "id": 13,
        "title": "JavaScript",
        "description": "Fundamentos de JavaScript",
        "url": "https://www.youtube.com/embed/fnBjhHhqb6s",
        "category": "Lenguajes de programación"
    },
    {
        "id": 14,
        "title": "Machine Learning",
        "description": "Introducción al Machine Learning",
        "url": "https://www.youtube.com/embed/AyXTVOVDmaA",
        "category": "Ciencia"
    },
    {
        "id": 15,
        "title": "Vue.js",
        "description": "Tutorial de Vue.js",
        "url": "https://www.youtube.com/embed/WjfpQlVem-8",
        "category": "Programación"
    },
    {
        "id": 16,
        "title": "Noticias de tecnología",
        "description": "Últimos avances en tecnología móvil",
        "url": "https://www.youtube.com/embed/c90R6NF-0vI",
        "category": "Noticias tech"
    },
    {
        "id": 17,
        "title": "Java",
        "description": "Curso completo de Java para principiantes",
        "url": "https://www.youtube.com/embed/eIrMbAQSU34",
        "category": "Lenguajes de programación"
    },
    {
        "id": 18,
        "title": "Astrofísica",
        "description": "Descubre los misterios del universo",
        "url": "https://www.youtube.com/embed/1zzY5bSi2A0",
        "category": "Ciencia"
    },
    {
        "id": 19,
        "title": "Angular",
        "description": "Fundamentos de Angular",
        "url": "https://www.youtube.com/embed/2OHbjep_WjQ",
        "category": "Programación"
    },
    {
        "id": 20,
        "title": "Tecnología cuántica",
        "description": "Avances en tecnología cuántica",
        "url": "https://www.youtube.com/embed/1ngih1dAm4s",
        "category": "Ciencia"
    }
]
);
    
    const categories = ["Programación", "Noticias tech", "Lenguajes de programación", "Ciencia"];
    const { stateModal, handleOpen } = props;

    const deleteVideo = (id) => {
        const newVideos = videos.filter(video => video.id !== id);
        setVideo(newVideos);
    };
    const number=Math.floor(Math.random() * (videos.length - 1)) + 1;

    return (
        <>
            <main className="w-full bg-codingImg  text-center">
                {stateModal && <Form isOpen={stateModal} handleOpen={handleOpen} categories={categories} setVideo={setVideo} videos={videos} />}
                <Banner video={videos[number]} />
                {categories.map((category, index) => (
                    <MultiCardCarousel key={`cat-${category}-${index}`} category={category} videos={videos} deleteVideo={deleteVideo} />
                ))}
            </main>
            <Footer />
        </>
    );
};

export default Home;
