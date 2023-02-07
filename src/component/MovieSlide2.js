import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieDetail from '../pages/MovieDetail';
import MovieCard from './MovieCard';
import MovieCard2 from './MovieCard-2';




const responsive = {

    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const MovieSlide2 = ({movies}) => {
    console.log('마우스',movies);
  return (
    <div>

 <Carousel responsive={responsive}>

{movies.results.map((item)=>(
   <MovieCard2 item={item}/>
))}




</Carousel>
    </div>
   

  
  
  )
}

export default MovieSlide2