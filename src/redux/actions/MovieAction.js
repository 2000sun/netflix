import api from "../api"
import { useSelector } from 'react-redux';
import React from 'react'
import { compose } from "redux";



const API_KEY = process.env.REACT_APP_API_KEY

let movie_id =  240;
let key = '';




const MovieAction = () => {
    const items = useSelector((state) => state.movie);
    movie_id = items.itemId;
    console.log('hello',movie_id);
    

    return (
        <div>sdsdsdsdsd</div>
    )
    }


   




function getMovies(items) {
    
    //  movie_id = items.itemId;
     
    if(items) {
        console.log(items);
        console.log('정답입니다');
        movie_id = items;
    } else {
        let movie_id =  240;
        console.log('오답입니다~');
    }


    //  movie_id = items.itemId;
    return async (dispatch) => {
        console.log('Hell',movie_id);
        

        try {
            dispatch({type:"GET_MOVIES_REQUEST"})
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upCmingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            const movieIdApi = api.get(`/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`)
            const crewImageApi = api.get(`/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`)
            const recomendApi = api.get(`movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
            
            
            let [popularMovies, topRatedMovies, upComingMovies,genreList,movieIdList,crewImageList,recomendList,] = await Promise.all([popularMovieApi, topRatedApi, upCmingApi,genreApi,movieIdApi,crewImageApi,recomendApi,])
            key = movieIdList.data.results[0].key; 
            console.log('Air',recomendList);

            dispatch({  
                type: "GET_MOVIES_SUCCESS",
                payload: { popularMovies: popularMovies.data, topRatedMovies: topRatedMovies.data, upComingMovies: upComingMovies.data, genreList : genreList.data.genres, key : key, crewImageList : crewImageList.data,recomendList : recomendList.data}
            })

            console.log('인기영화',movieIdList.data.results[0].key)

            


        


        } catch (error) {
            dispatch({type:"GET_MOVIES_FAILURE"})
        }
    



    }




}

















export const movieAction = {
     getMovies,
}

export default MovieAction;


