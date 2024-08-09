import "./App.css";
import Movies from "./components/movies/Movies";

function App() {
  const initialMovies = [
    {
      id: 1,
      title: "John Wick",
      director: "director",
      imageUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/04/concurso-john-wick-pacto-sangre.jpg?tf=3840x",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod dolor? Obcaecati vero fuga nisi quos nam? Commodi magnam obcaecati animi deserunt blanditiis tempore ab sint ipsum veritatis. Aliquam, debitis.",
    },
    {
      id: 2,
      title: "Deadpool",
      director: "director",
      imageUrl: "https://i.blogs.es/b0699f/deadppool-3/650_1200.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod dolor? Obcaecati vero fuga nisi quos nam? Commodi magnam obcaecati animi deserunt blanditiis tempore ab sint ipsum veritatis. Aliquam, debitis.",
    },
    {
      id: 3,
      title: "Spiderman",
      director: "director",
      imageUrl: "https://s0.smartresize.com/wallpaper/328/237/HD-wallpaper-spider-man-spider-man-far-from-home-michelle-mj-jones-mysterio-marvel-comics-nick-fury-peter-parker-tom-holland.jpg",
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
