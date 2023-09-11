import "./skills.css"
import js from "../../data/images/javascript-logo-png.png"
import html5 from "../../data/images/html5.png"
import css3 from "../../data/images/css3.png"
import react from "../../data/images/React-icon.svg.png"
import node from "../../data/images/node.png"
import sass from "../../data/images/sass.png"
import figma from "../../data/images/logo-app-figma.png"
import firebase from "../../data/images/firebase.png"
import mongodb from "../../data/images/mongodb.png"
import mysql from "../../data/images/mysql.png"
import git from "../../data/images/Git-Icon-1788C.png"

function Skills () {
    


    return (
        <div>
            <h1>Skills</h1>
            <div className="skills">
                <img className="skills-image" src={js} alt="JS" />
                <span> JS </span>
            </div>
            <div className="skills">
                <img className="skills-image" alt="HTML5" src={html5} />
                <span> HTML5 </span>
            </div>
            <div>
                <img className="skills-image" alt="CSS3" src={css3} />
                <span> CSS3  </span>
            </div>
            <div>
                <img className="skills-image" alt="React" src={react} />
                <span> React / React Native </span>
            </div>
            <div>
                <img className="skills-image" alt="Node.js" src={node} />
                <span> Node.js </span>
            </div>
            <div>
                <img className="skills-image" alt="SASS" src={sass} />
                <span> Sass </span>
            </div>
            <div>
                <img className="skills-image" alt="Git" src={git} />
                <span> Git </span>
            </div>
            <div>
                <img className="skills-image" alt="Figma" src={figma} />
                <span> Figma </span>
            </div>
            <div>
                <img className="skills-image" alt="Firebase" src={firebase} />
                <span> Firebase </span>
            </div>
            <div>
                <img className="skills-image" alt="MongoDB" src={mongodb} />
                <span> Mongo DB </span>
            </div>
            <div>
                <img className="skills-image" alt="MySQL" src={mysql} />
                <span> MySQL </span>
            </div>
        </div>
    )
}

export default Skills