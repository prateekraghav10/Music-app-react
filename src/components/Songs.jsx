import React from "react";
import { useGlobalContext } from "../context";
import "./style.css"

const Songs = () =>{
    const {hits, isLoading, playMusic, heading} = useGlobalContext();
    if (isLoading){
        return <>
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        </>
      }

    return (
        <>
        <div className="component">
            <div className="subHeading">{heading}</div>
            <div className="songLists">
                {hits.map((currSong)=>{
                    const {name , image, downloadUrl, primaryArtists} = currSong; 
                    return (
                        <>
                        <div className="songDetail">
                            <div className="container" onClick={()=>playMusic(downloadUrl)}>
                                <div className="col">
                                    <img className="imgIcon" src={image[1].link}/>
                                </div>
                                <div className="col">
                                    <div className="songTitle">{name}</div>
                                </div>
                                <div className="col">
                                    <div className="artistName">{primaryArtists}</div>
                                    {/* <div className="label">Label : {label}</div> */}
                                    {/* <div className="year">Year : {year}</div> */}
                                    {/* <button className="playBtn" onClick={()=>playMusic(downloadUrl)}>Play</button> */}
                                </div>
                        </div>
                    </div>
                    </>
                )})}
            </div>
        </div>

        </>
    )
}
export default Songs;