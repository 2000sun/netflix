import api from "../redux/api";

const API_KEY = process.env.REACT_APP_API_KEY


function getMovieId() {
    return async (dispatch) => {
      let url = api.get(`/movie/${536554}/videos?api_key=${API_KEY}&language=en-US`)
      let response = await fetch(url);
      let data = await response.json();
    //   console.log('data?????',data);
    }
  }





  export const movieIdGet = {
    getMovieId,
  }