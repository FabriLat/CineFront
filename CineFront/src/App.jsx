import "./App.css";
import Movies from "./components/movies/Movies";
import NavBar from './components/navBar/NavBar';
import Footer from "./components/footer/Footer";

function App() {
  const initialMovies = [
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
  ];

  return (
    <>

      <NavBar />
      <Movies movies={initialMovies} />
      <Footer/>
    </>
  );
}

export default App;
