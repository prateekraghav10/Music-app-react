import "./style.css"
import logo from "../assests/images/logo.png"
const Logo =()=> {
    return (
        <>
            <div className="logo">
                <img className="logo-image" src={logo} alt="logo" />
                <div className="logo-title">muxic</div>
            </div>
        </>
    )
}

export default Logo;