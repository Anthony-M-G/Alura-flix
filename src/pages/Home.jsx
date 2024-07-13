/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Banner from "../components/Banner";
import Form from "../components/Form";
import MultiCardCarousel from "../components/Multicard";
import Footer from "../components/Footer";
import FormCategory from "../components/FormCategory";

const Home = (props) => {
    const [videos, setVideo] = useState([{
    id: 1,
    title: "Tutorial de JavaScript",
    description: "Un tutorial completo de JavaScript para principiantes.",
    url: "https://www.youtube.com/embed/hdI2bqOjy3c",
    category: "Programación"
  },
  {
    id: 2,
    title: "Introducción a React",
    description: "Aprende los conceptos básicos de React y cómo crear tu primera aplicación.",
    url: "https://www.youtube.com/embed/dGcsHMXbSOA",
    category: "Desarrollo Web"
  },
  {
    id: 3,
    title: "CSS Grid Layout",
    description: "Guía completa para entender y utilizar CSS Grid Layout en tus proyectos web.",
    url: "https://www.youtube.com/embed/jV8B24rSN5o",
    category: "Diseño Web"
  },
  {
    id: 4,
    title: "Node.js y Express",
    description: "Crea una aplicación web con Node.js y Express desde cero.",
    url: "https://www.youtube.com/embed/TlB_eWDSMt4",
    category: "Backend"
  },
  {
    id: 5,
    title: "Desarrollo con Vue.js",
    description: "Aprende a desarrollar aplicaciones dinámicas con Vue.js.",
    url: "https://www.youtube.com/embed/4deVCNJq3qc",
    category: "Frameworks JavaScript"
  },
  {
    id: 6,
    title: "Python para Principiantes",
    description: "Un curso completo de Python para aquellos que recién comienzan.",
    url: "https://www.youtube.com/embed/rfscVS0vtbw",
    category: "Programación"
  },
  {
    id: 7,
    title: "Introducción a la Inteligencia Artificial",
    description: "Una introducción a los conceptos básicos de la inteligencia artificial.",
    url: "https://www.youtube.com/embed/2ePf9rue1Ao",
    category: "IA"
  },
  {
    id: 8,
    title: "SQL para Principiantes",
    description: "Aprende los fundamentos de SQL y cómo interactuar con bases de datos.",
    url: "https://www.youtube.com/embed/7S_tz1z_5bA",
    category: "Bases de Datos"
  },
  {
    id: 9,
    title: "Aprende Docker en 1 Hora",
    description: "Curso rápido de Docker para desarrolladores.",
    url: "https://www.youtube.com/embed/3c-iBn73dDE",
    category: "DevOps"
  },
  {
    id: 10,
    title: "Introducción a Machine Learning",
    description: "Conceptos básicos de Machine Learning y cómo aplicarlos.",
    url: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    category: "Machine Learning"
  },
  {
    id: 11,
    title: "Creación de Aplicaciones Móviles con Flutter",
    description: "Aprende a crear aplicaciones móviles con Flutter.",
    url: "https://www.youtube.com/embed/1gDhl4leEzA",
    category: "Desarrollo Móvil"
  },
  {
    id: 12,
    title: "Aprende Angular en 1 Hora",
    description: "Curso rápido de Angular para desarrolladores.",
    url: "https://www.youtube.com/embed/3qBXWUpoPHo",
    category: "Frameworks JavaScript"
  }]
);
    const { stateModal, handleOpen,stateModalCategory,handleOpenCategory,setOpenModal } = props;
    const [categories,setCategory]=useState(["Programación", "Tecnología", "Noticias tech"]);
    console.log(videos)
   
    const deleteVideo = (id) => {
        console.log(videos)
        const newVideos = videos.filter(video => video.id !== id);
        console.log(newVideos)
        setVideo(newVideos);
    };
    
    
    

    return (
        <>
            <main className="w-full bg-codingImg  text-center">
                {stateModal && <Form isOpen={stateModal} handleOpen={handleOpen} categories={categories} setVideo={setVideo} videos={videos} setOpenModal={setOpenModal} />}
                {stateModalCategory && <FormCategory isOpen={stateModalCategory} handleOpen={handleOpenCategory} actualCategories={categories} setCategory={setCategory}/>}
                <Banner videos={videos} />
                {categories.map((category, index) => (
                    <MultiCardCarousel key={`cat-${category}-${index}`} category={category} videos={videos} deleteVideo={deleteVideo} />
                ))}
            </main>
            <Footer />
        </>
    );
};

export default Home;
