let initialState = {
    popularMovies : {},
    topRatedMovies : {},
    upComingMovies : {},
    itemImage : {},
    itemTitle : {},
    itemOverView: {},
    itemRelease : {},
    itemGenre : {},
    itemVoteCount : {},
    itemVoteAverge : {},
    itemPopular : {},
    itemAdult : {},
    itemId : {},
    loading : true, 
    genreList : [],
    key : {},
    crewImageList : {},
    recomendList : {},
}




function movieReducer(state=initialState,action) {
    console.log(action);
    let {type,payload} = action 
    console.log('뭔데?',payload)
    switch(type) {
        case "GET_MOVIES_REQUEST" :
            return {...state,loading:true}
            

        case "GET_MOVIES_SUCCESS" :
            return {
                ...state,
                popularMovies : payload.popularMovies,
                topRatedMovies : payload.topRatedMovies,
                upComingMovies : payload.upComingMovies,
                genreList : payload.genreList,
                key : payload.key,
                crewImageList : payload.crewImageList,
                recomendList : payload.recomendList,
                loading : false 
            }

            case "SendMovieDetail" :
                return {
                    ...state,
                    itemImage : payload.itemImage,
                    itemTitle : payload.itemTitle,
                    itemOverView : payload.itemOverView,
                    itemRelease : payload.itemRelease,
                    itemGenre : payload.itemGenre,
                    itemVoteCount : payload.itemVoteCount,
                    itemVoteAverge : payload.itemVoteAverge,
                    itemPopular : payload.itemPopular,
                    itemAdult : payload.itemAdult,
                    itemId : payload.itemId,
                }


        case "GET_MOVIES_FAILURE" :
            return {...state,loading:false}

            

        default :
           return {...state};

    }
    

}



export default movieReducer