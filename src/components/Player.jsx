
import React from 'react';
import { useGlobalContext } from "../context";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    const {songLink} = useGlobalContext();
    return (

        <>  
            <div className="download-link"><a className="download-btn" href={songLink} target="_blank"><FontAwesomeIcon icon={faCircleArrowDown}></FontAwesomeIcon></a></div>
            <div className='player'> 
            <AudioPlayer src={songLink}/>
            </div>
        </>
    )
};

export default Player;