import "./style.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Menu from "./Menu";
import Songs from "./Songs";
import Player from "./Player";
import Search from "./Search";
import Pagination from "./Pagination";
import { useGlobalContext } from "../context";

const Layout = () =>{
    const {search, menu}=useGlobalContext();
    return (
        <>
        <div className="wrapper">
            <div className={`left-sidebar ${menu ? "active" : ""}`}>
                <Logo/>
                <Menu/>
            </div>
            <div className="right-sidebar">
                <div className="header">
                    <div className="header-left"><Pagination/></div>
                    <div className="header-right">{search ? <Search/> : <Navbar/>}</div>
                </div>
                <Songs/>
            </div>
        </div>
        <div className="player-container">
            <Player/>
        </div>
        </>
    )
}

export default Layout;