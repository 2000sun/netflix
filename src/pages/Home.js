import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../component/Banner'
import MovieSlide from '../component/MovieSlide'
import { ClipLoader } from 'react-spinners';
import MovieAction from '../redux/actions/MovieAction'





const Home = () => {

  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upComingMovies,loading } = useSelector(state => state.movie)
  const items = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, [])
    
  if(loading) {
    return <ClipLoader  color={'red'}  loading={loading} size={150}/>
}

console.log('whowhowho',popularMovies);


  return (
      
    <div>
      <div className='bodyColor'></div>
      <Banner movie={popularMovies.results[0]}/>
      <h1 className='nameColor'>POPULAR MOVIE</h1>
      <MovieSlide movies={popularMovies}/>
      <h1 className='nameColor'>TOP RATED MOVIE</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1 className='nameColor'>UPCOMING MOVIE</h1>
      <MovieSlide movies={upComingMovies}/>

    </div>




  )
}

export default Home