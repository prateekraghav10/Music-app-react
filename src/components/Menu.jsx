import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faFolderMinus, faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context";
const Menu = () =>{
    const {showSearch,search, showHaryanvi, showBollywood, showPunjabi, genre, showHome, showMixes} = useGlobalContext();
    return (
        <>
            <div className="btn-groups">
                <button style={(genre===0) ? {backgroundColor:"#FD6B00" , color:"white"} : {}} onClick={()=>{showHome()}} className="menu-btns"><FontAwesomeIcon icon={faHouse} /> &nbsp; Home</button>
                <button style={search ? {backgroundColor:"#FD6B00",color:"white"} : {} } className="menu-btns" onClick={()=>{showSearch()}}><FontAwesomeIcon icon={faMagnifyingGlass}/>&nbsp; Search</button>  
                {/* <br /> */}
                <h2><FontAwesomeIcon icon={faFolderMinus}></FontAwesomeIcon> Genre</h2>
                <button style={(genre===1) ? {backgroundColor:"#FD6B00" , color:"white"} : {}} onClick={()=>{showHaryanvi()}} className="menu-btns"><FontAwesomeIcon icon={faRecordVinyl}></FontAwesomeIcon>&nbsp;Haryanvi</button>
                <button style={(genre===2) ? {backgroundColor:"#FD6B00" , color:"white"} : {}} onClick={()=>{showPunjabi()}}className="menu-btns"><FontAwesomeIcon icon={faRecordVinyl}></FontAwesomeIcon>&nbsp;Punjabi</button>
                <button style={(genre===3) ? {backgroundColor:"#FD6B00" , color:"white"} : {}} onClick={()=>{showBollywood()}}className="menu-btns"><FontAwesomeIcon icon={faRecordVinyl}></FontAwesomeIcon>&nbsp;Bollywood</button>
                <h2><FontAwesomeIcon icon={faFolderMinus}></FontAwesomeIcon> More</h2>
                <button style={(genre===4) ? {backgroundColor:"#FD6B00" , color:"white"} : {}} onClick={()=>{showMixes()}} className="menu-btns"><FontAwesomeIcon icon={faRecordVinyl}></FontAwesomeIcon>&nbsp;Mixes</button>
 
            </div>          
        </>
    )
}

export default Menu;