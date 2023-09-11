import "./header.css";
import ab from "../../data/images/AB.png"

function Header () {

return (
    <div className="header-container">
        <div className="header-box-left">
            <img className="header-logo" src={ab} alt="logo" />
        </div>
        <div className="header-box-right">
            <ul className="header-list">
                <li>
                    <a className="header-anchor-tag" href="" > Projects </a>
                </li>
                <li>
                    <a className="header-anchor-tag" href="" > Skills </a>
                </li>
                <li>
                    <a className="header-anchor-tag" href="" > Contact </a>
                </li>
            </ul>
        </div>
    </div>
);
}


export default Header