import { useSelector,useDispatch } from 'react-redux';
import React, { useEffect } from 'react'
import { Badge } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ModalWindow from './ModalWindow';
import api from '../redux/api';
import { movieAction } from '../redux/actions/MovieAction';
import { movieVideoAction } from './Movies';
import MovieAction from '../redux/actions/MovieAction';
import MovieDetialSlide from '../component/MovieDetailSlide';
import MovieSlide from '../component/MovieSlide'
import MovieSlide2 from '../component/MovieSlide2';







const API_KEY = process.env.REACT_APP_API_KEY






const MovieDetail = () => {
  
  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upComingMovies,loading,crewImageList,recomendList, } = useSelector(state => state.movie)
  const { genreList } = useSelector((state) => state.movie);
  const items = useSelector((state) => state.movie);

  console.log('item?',items);
  console.log('test',items.itemId);

  console.log('Hello-cast!!!',crewImageList);
  console.log('crew?',items.crewImageList)
      
  useEffect(() => {
    dispatch(movieAction.getMovies(items.itemId));
  }, [])

 

  console.log('recomend',recomendList);



  let key = items.key


  


  return (
    

    <div>
            <div className='bodyColor-2'></div>

    <div className='detail-banner' style={{
          
      
      backgroundImage:
        "url(" +
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${items.itemImage}`  +
        ")",
    }}>
         <div className='detail-title'>
          {items.itemTitle}
         </div>

   </div>

   <h1 className='info'>INFO</h1>


          {/* wrapper div  */}
   <div className='wrapper-info'>
        <div className='overview'>
               <div className='modal-1'>
               <ModalWindow/>
               </div>
              
               <div className='overview-1'>
               {items.itemOverView}
               </div>
        </div>
           {/* option div  */}
        <div className='option'>
            <div>Release Date | {items.itemRelease}</div>
            <div>POPULARITY | {items.itemPopular}</div>      
            <div>VOTE AVERAGE | {items.itemVoteAverge}  </div>   
            <div>VOTE COUNT | {items.itemVoteCount} </div>                                               
          <span className='word'>  GENRES |  {items.itemGenre.map((id)=>(
                  <Badge bg='danger'>
                    {genreList.find((items) =>items.id === id).name}
                </Badge>
            ))} </span>
         </div>  
           {/* option div  */}
   </div>
          {/* wrapper div  */}

          <h1 className='info'>CAST OF CAHRACTERS</h1>
          {/* <MovieDetialSlide crew={crewImageList}/> */}
          <MovieDetialSlide crew={items.crewImageList}/>



          <h1 className='info recomend'>RECOMMENDED MOVIES</h1>
          <MovieSlide2 movies={recomendList}/>


          





     



   </div>
   
  )
}

export default MovieDetail
