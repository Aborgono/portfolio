import "./header.css";
import ab from "../../data/images/AB.png"

function Header () {

return (
    <div className="header-container">
        <div className="header-box-left">
            <a href="#home">
            <img  className="header-logo" src={ab} alt="logo"/>
            </a>
        </div>
        <div className="header-box-right">
            <ul className="header-list">
                <li>
                    <a className="header-anchor-tag" href="#projects" > Projects </a>
                </li>
                <li>
                    <a className="header-anchor-tag" href="#skills" > Skills </a>
                </li>
                <li>
                    <a className="header-anchor-tag" href="#contact" > Contact </a>
                </li>
            </ul>
        </div>
    </div>
);
}


export default Header