import "./project.css"
import maze from "../../data/images/mazegame.png"
import brainflix from "../../data/images/Brainflix.png"
import ukg from "../../data/images/UKG.png"
import instock from "../../data/images/instock.png"
import reelTalk from "../../data/images/Reel-Talk.jpg"

function Projects () {



    return (
        <div id="projects" className="projects-component ">
            <h1>Projects</h1>
            <div className="project-container">
                <img className="image1" src={maze} alt="maze" />
                <div>
                    <ul>
                        <li> React </li>
                        <li> Express.js </li>
                        <li> MongoDB </li>
                        <li> Node.js </li>
                    </ul>
                </div>
                <h2> Maze Runner </h2>
                <p> I developed a maze game that challenges player with differing difficultly levels and assesses their memory capabilities.
                    The game presents a series of mazes, each with unique alyouts and obstacles, requiring players to navigate through them by
                    memorizing the paths and making strategic decisions. </p>
                <a href="https://github.com/Aborgono"> Link to GitHub</a>
            </div>
            <div className="project-container">
                <img className="image2" src={reelTalk} alt="Reel-Talk" />
                <div>
                    <ul>
                        <li> React </li>
                        <li> Express.js </li>
                        <li> Firebase </li>
                        <li> Node.js </li>
                    </ul>
                </div>
                <h2> Reel Talk </h2>
                <p> I built a simple front-end and backend to showcase proficiency in firebase. In the front-end, users have the ability to log in if they
                    already have an account or sign up if they do not. Once logged in, the user is able to like a list of movies. The likes are stored in the firestore database
                    specific to the user who liked said movie. There is also a password reset mechanism in case the user forgets their password.
                    I also created a simple backend to provide user authentication. Once a user logs in, a unique token is sent to the backend to verify the user exists in the database.
                    Otherwise they are redirected to the login screen.</p>
                <a href="https://github.com/Aborgono"> Link to GitHub</a>
            </div>
            <div className="project-container">
                <img className="image3" src={brainflix} alt="brainflix "/>
                <div>
                    <ul>
                        <li> React </li>
                        <li> Express.js </li>
                        <li> Node.js </li>
                    </ul>
                </div>
                <h2> Brainflix </h2>
                <p> Built out my own API service that manages video data. Built out the front end as well where users can click different videos and even upload their own video. </p>
                <a href="https://github.com/Aborgono"> Link to GitHub</a>
            </div>
            <div className="project-container">
                <img className="image4" src={ukg} alt="ukg"/>
                <div>
                    <ul>
                        <li> React </li>
                        <li> Generative AI </li>
                    </ul>
                </div>
                <h2>Think On It! </h2>
                <p> Job seeking platform using Generative AI Technology. In collaboration with engineers and UX designers in an Agile environment, 
                    leveraged Jira for project management, automated tasks, generated creative content, and made data-driven decisions by analyzing patterns. </p>
                <a href="https://github.com/Aborgono"> Link to GitHub</a>
            </div>
            <div className="project-container">
                <img className="image5" src={instock} alt="InStock" />
                <div>
                    <ul>
                        <li> React </li>
                        <li> MySQL </li>
                        <li> Node.js </li>
                        <li> Express.js </li>
                    </ul>
                </div>
                <h2>InStock </h2>
                <p> Project for a Fortune 500 client. An Inventory Management System involving a scalable, full-stack web application. In teams we followed an Agile approach
                    and used a JIRA Scrum board to delegate tasks and track progress. </p>
                <a href="https://github.com/Aborgono"> Link to GitHub</a>
            </div>
        </div>
    )
}

export default Projects