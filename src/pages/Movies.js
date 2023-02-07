import api from '../redux/api';
import { useSelector } from 'react-redux';
import React from 'react'



const API_KEY = process.env.REACT_APP_API_KEY

let movie_id =  899112;




const Movies = () => {
    return (
        <div>sdsdsdsdsd</div>
    )
    }


   




function getMoviesVideo() {

    // console.log('Who are you',movieID);


    return async (dispatch) => {
        try {
            dispatch({type:"GET_MOVIES_REQUEST"})
            const movieIdApi = api.get(`/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`)
            let [movieIdList,] = await Promise.all([movieIdApi,])
            console.log('무비는??',movieIdList);
            dispatch({  
                type: "GET_MOVIES_SUCCESS",
                payload: {}
            })


        


        } catch (error) {
            dispatch({type:"GET_MOVIES_FAILURE"})
        }
    



    }




}

















export const movieVideoAction = {
     getMoviesVideo,
}

export default Movies;


