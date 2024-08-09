import "./App.css";
import Movies from "./components/movies/Movies";

function App() {
  const initialMovies = [
    {
      id: 1,
      title: "John Wick",
      director: "director",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlMhuTYAKZHxZXA4OzjqcKaopJEjTOzLxnQ&s",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod dolor? Obcaecati vero fuga nisi quos nam? Commodi magnam obcaecati animi deserunt blanditiis tempore ab sint ipsum veritatis. Aliquam, debitis.",
    },
    {
      id: 2,
      title: "Deadpool",
      director: "director",
      imageUrl: "https://pics.filmaffinity.com/Deadpool-834516798-mmed.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod dolor? Obcaecati vero fuga nisi quos nam? Commodi magnam obcaecati animi deserunt blanditiis tempore ab sint ipsum veritatis. Aliquam, debitis.",
    },
    {
      id: 3,
      title: "Spiderman",
      director: "director",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/spiderman-homecoming-poster-1551691492.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod dolor? Obcaecati vero fuga nisi quos nam? Commodi magnam obcaecati animi deserunt blanditiis tempore ab sint ipsum veritatis. Aliquam, debitis.",
    },
  ];

  return (
    <>
      <Movies movies={initialMovies} />
    </>
  );
}

export default App;
