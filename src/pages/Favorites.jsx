import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContexts'
import MovieCard from '../components/MovieCard'

function Favorites(){
    const {favorites} = useMovieContext();

    if(favorites){
        return(
        <div className="favorites">
            <h2>Your Favorite Movies</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    // movie.title.toLowerCase().startsWith(searchQuery) && 
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )}

    return <div className="favorites-empty">
        <h2>No Favorite Movies added yet</h2>
        <p>Start adding movies to your favorites so that they will appear here!</p>
    </div>
}

export default Favorites