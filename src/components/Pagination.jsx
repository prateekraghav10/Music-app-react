import React from "react";
import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight,faBars } from "@fortawesome/free-solid-svg-icons";
const Pagination = () =>{
    const {prevPage, nextPage, page, showMenu} = useGlobalContext();
    return (
        <>
            <div className="change-page-btns">
            <button className="menu-slider" onClick={()=>{showMenu()}}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
            <button onClick={()=>prevPage()} className="change-page"><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>
            {page}
            <button onClick={()=>{nextPage()}} className="change-page"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>  &nbsp;Next</button>
            </div>
        </>
    )
}

export default Pagination;