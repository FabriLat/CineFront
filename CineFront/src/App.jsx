import "./App.css";
import Movies from "./components/movies/Movies";
import NavBar from './components/navBar/NavBar';
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  /*const initialMovies = [
    {
      id: 1,
      title: "John Wick",
      director: "director",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlMhuTYAKZHxZXA4OzjqcKaopJEjTOzLxnQ&s",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod dolor? Obcaecati vero fuga nisi quos nam?.",
    },
    {
      id: 2,
      title: "Deadpool",
      director: "director",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm5-6ZakRkAUmwJWY-o5Ysg81c8pXo8gxPoQ&s",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod dolor? Obcaecati vero fuga nisi quos nam?.",
    },
    {
      id: 3,
      title: "Spiderman",
      director: "director",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74SbjOSsWSvCRgUhOI4epfvVZ9HuhUcROOA&s",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod dolor? Obcaecati vero fuga nisi quos nam? .",
    },
  ];*/

  const [myMovies, setMyMovies] = useState([]);

  const fetchMovies = async () => {
    console.log("Renderizando en App");
    try {
      const response = await fetch("https://localhost:7183/api/Movie");
      const movieData = await response.json();
      setMyMovies(movieData);
      console.log(movieData);
    } catch (error) {
      console.log("Error al solicitar usuarios a la base de datos:", error);
    }
  };
  //Inicializacion de estado movies con montado de app
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar />
      <Movies movies={myMovies} />
      <Footer/>
    </>
  );
}

export default App;
