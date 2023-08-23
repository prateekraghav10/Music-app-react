import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const API = "https://saavn.me/search/songs?";
// const API = "https://hn.algolia.com/api/v1/search?"

const initialState = {
    isLoading : true,
    query : "latest english" ,
    nbpage : 1,
    page : 1,
    hits : [],
    songLink : null,
    search: false,
    heading : "Music For You",
    genre : 0,
    limit : 32,
    menu : false,
    queue : [],
    colIndex : 0,
}

    const AppProvider = ({children}) =>{
  
    const [state, dispatch] = useReducer(reducer, initialState);
//fetch api dta
    const fetchApiData = async (url) =>{
        dispatch({type:"SET_LOADING"});
        try {
        const res = await fetch(url);
        const Data = await res.json();
        console.log(Data);
            dispatch({
            type : "GET_SONGS",
            payload : {
                hits : Data.data.results,
            }
        });
        console.log(state.hits)
        // isLoading=false;
        } catch (error) {
        console.log(error);
        }
    }
//play music
    const playMusic = (link) =>{
        dispatch({type:"UPDATE_LINK", payload : link[4].link});
    };
//search music
    const searchSong = (searchQuery)=>{
        dispatch({type:"SEARCH_QUERY", payload : searchQuery});
    };

//next page
    const nextPage = () =>{
        dispatch({type:"NEXT_PAGE"});
    }  
//prev page 
const prevPage = () =>{
    dispatch({type: "PREV_PAGE"});
}
//show home
const showHome = () =>{
    dispatch({type: "SHOW_HOME"});
}
//show search
const showSearch = () => {
    dispatch({type: "SHOW_SEARCH"});
}

// show haryanvi
const showHaryanvi = () => {
    dispatch({type: "SHOW_HARYANVI"});
}
//show Punjabi
const showPunjabi = () =>{
    dispatch({type: "SHOW_PUNJABI"});
}
//show Bollywood
const showBollywood = () =>{
    dispatch({type: "SHOW_BOLLYWOOD"});
}
//show menu 
const showMenu = () =>{
    dispatch({type: "SHOW_MENU"});
}
//show playlist
const showMixes = () =>{
    dispatch({type: "SHOW_MIXES"});
}

//useEffect
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}&limit=${state.limit}`);
    },[state.query, state.page]);


    return (
        <AppContext.Provider value={{...state, playMusic, searchSong, nextPage, prevPage, showSearch, showHaryanvi, showPunjabi, showBollywood, showHome, showMenu, showMixes}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () =>{
    return useContext(AppContext);   
}
export {AppContext, AppProvider , useGlobalContext}; 