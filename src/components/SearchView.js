import Hero from './Hero';

// api key 171a16b6f01fd9f8820affcd7442f63c

// example search https://api.themoviedb.org/3/search/movie?api_key=171a16b6f01fd9f8820affcd7442f63c&language=en-US&query=star%20wars&page=1&include_adult=false

// example movie 

const MovieCard=({movie})=>{
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return(
    <div className='col-lg-3 col-md-3 col-2 my-4'>
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title}></img>
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Show details</a>
        </div>
      </div>
    </div>
  )
}


const SearchView = ({keyword,searchResults}) => {
  
  const title = `You are searching for ${keyword}`
  const resultsHtml = searchResults.map((obj,i) =>{
    return <MovieCard movie={obj} key={i} />
  })

  return(
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className= 'container'>
          <div className='row'>
            {resultsHtml}
          </div>
        </div>
      }
    </>
  )
}
export default SearchView;