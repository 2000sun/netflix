import React from 'react'
import { Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { compose } from 'redux'
import MovieDetail from '../pages/MovieDetail'
import MovieAction, { movieAction } from '../redux/actions/MovieAction'

const MovieCard2 = ({ item }) => {
  const items = useSelector((state) => state.movie);
  const dispatch = useDispatch()


  let itemID = 0;



  const naviGate = useNavigate()
        

   function gotoMovieDetail() {
       itemID = item.id; 
        naviGate(`/movies/${item.id}`);
        // <movieAction.getMovies item={item}/>

    dispatch({
      type:"SendMovieDetail",
      payload : {itemImage : item.poster_path , itemTitle : item.title, itemOverView : item.overview, itemRelease : item.release_date, itemGenre : item.genre_ids,itemVoteCount : item.vote_count, itemVoteAverge : item.vote_average, itemPopular : item.popularity, itemAdult : item.adult, itemId : item.id}
    })

    

   }
   

  
  return (
     <div>

      
          { (() => {      
                 
           if(item.poster_path) {
             return  <div className='card-2'
             style={{
               backgroundImage:
                 "url(" +
                 `https://image.tmdb.org/t/p/w440_and_h660_multi_faces${item.poster_path}` +
                 ")",
             }} > 
                  {/* <button className='button' onClick={gotoMovieDetail}></button> */}
             </div>
           }

           if(item.profile_path) {
             return <div className='cast-card'
            style={{
              backgroundImage:
                "url(" +
                `https://image.tmdb.org/t/p/w138_and_h175_face${item.profile_path}` +
                ")",
            }} > 

            </div>
            
            
           }
         })() } 


            
    
      
      {/* <div>
      
        if(${item.profile_path}) {
          console.log('trueMan')
        }
      </div> */}

     


      {/* <div className='overlay'>
       

            <div>
                <span>{item.vote_average}</span>
                <span>{item.adult?"청불":"under18"}</span>
            </div>


            </div> */}

      
      {/* <movieAction.getMovies itemID={itemID}/> */}
   
 


      </div>
    

  )
}
export default MovieCard2