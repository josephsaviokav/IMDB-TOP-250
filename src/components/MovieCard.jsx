import "../css/MovieCard.css"


function MovieCard({movie}) {
    
  

  
return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.primaryImage} alt={movie.title}/>
           <div className="movie-overlay">
             
            </div>
            



            
        </div>
        <div className="movie-info">
            <h3>{movie.primaryTitle}</h3>
            <p>IMDb Rating: {movie.averageRating}</p>
            <p>contentRating: {movie.contentRating}</p>
            <p>genere: {movie.genres[0]}</p>
            <p>{movie.releaseDate}</p>
            <p>{movie.description}</p>
            
        </div>
    </div>
}


export default MovieCard