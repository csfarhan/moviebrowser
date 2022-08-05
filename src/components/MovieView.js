import Hero from './Hero';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

const MovieView = () => {
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/search/movie/${id}?api_key=171a16b6f01fd9f8820affcd7442f63c&language=en-US`)
          .then(response => response.json())
          .then(data =>{
            setMovieDetails(data)
            setIsLoading(false)
          })
      }, [id])


      function renderMovieDetails() {
        if(isLoading) {
          return <Hero text='...' />
        }
        if(movieDetails){
          const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
          return (
            <>
              <Hero text={movieDetails.original_title}/>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-3'>
                    <img src={posterPath} alt='...' className='img-fluid shadow rounded'
                    />
                  </div>
                  <div className='col-md-9'>
                    Right col
                  </div>
                </div>
              </div>
            </>
          )
        }
      }
    return renderMovieDetails()
  }

  export default MovieView;
