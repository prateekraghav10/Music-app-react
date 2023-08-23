const reducer = (state, action) =>{
    switch(action.type){
        case "GET_SONGS" : 
            return {
                ...state,
                hits : action.payload.hits,
                isLoading : false

            }
        case "SET_LOADING" :
            return {
                ...state,
                isLoading : true
            }
        case "UPDATE_LINK" :
            return {
                ...state,
                songLink : action.payload
            }
        case "SEARCH_QUERY" :
            return {
                ...state,
                query : action.payload
            }
        case "NEXT_PAGE" :
                return {
                    ...state,
                    page : state.page +1
                }
        
        case "PREV_PAGE" :
            if(state.page === 1){
                return {
                    ...state,
                    page  :1
                }
            } else {
            return {
                ...state,
                page : state.page -1
            }
        }
        case "SHOW_SEARCH" :
            if(state.search===true){
                return {
                    ...state,
                    search : false
                } 
            } else {
                return {
                    ...state,
                    genre : 5,
                    search : true
                }
            }
        case "SHOW_HARYANVI" :
            return {
                ...state,
                genre : 1,
                query : "haryanvi",
                limit : 24,
                page : 1,
                heading : "Latest in Haryanvi"
            }
        case "SHOW_PUNJABI" :
            return {
                ...state,
                genre : 2,
                query : "punjabi",
                limit : 24,
                page : 1,
                heading : "Latest in Punjabi"
            }
        case "SHOW_BOLLYWOOD" :
            return {
                ...state,
                genre : 3,
                query : "Bollywood",
                page : 1,
                limit : 24,
                heading : "Latest Bollywood Picks"
            }
        case "SHOW_HOME" :
            return {
                ...state,
                genre : 0,
                limit : 32,
                page : 1, 
                query : "latest english ",
                heading : "Try Something New!"
            }
        case "SHOW_MENU" :
            if(state.menu===true){
                return {
                ...state,
                menu:false
            }
            }else {
                return {
                    ...state, 
                    menu : true
                }
            }
        case "SHOW_MIXES" :
            return {
                ...state,
                heading : "Non Stop Mixes",
                genre : 4,
                query : "Non Stop"
            }
        }
    return state;
};

export default reducer;
