import MovieItem from "../movieItem/MovieItem";

const Movies = ({movies}) => {

    const mappedMovies = movies.map((m)=>{
        return(
            <MovieItem 
            key={m.id}
            title={m.title}
            director={m.director}
            description={m.description}
            imageUrl={m.imageUrl}
            />
        ) 
    })
    return(
        mappedMovies
    )
}
export default Movies;