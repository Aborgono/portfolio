import "./project.css"
import maze1 from "../../data/images/mazegame.png"
import maze2 from "../../data/images/Maze 2.png"
import maze3 from "../../data/images/Maze 3.png"
import maze4 from "../../data/images/Maze 4.png"

import bf1 from "../../data/images/BF1.png"
import bf2 from "../../data/images/BF2.png"
import bf3 from "../../data/images/BF3.png"
import bf4 from "../../data/images/BF4.png"
import bf5 from "../../data/images/BF5.png"

import ukg1 from "../../data/images/ukg1.png"
import ukg2 from "../../data/images/ukg2.png"
import ukg3 from "../../data/images/ukg3.png"
import ukg4 from "../../data/images/ukg4.png"
import ukg5 from "../../data/images/ukg5.png"
import ukg6 from "../../data/images/ukg6.png"

import instock from "../../data/images/instock.png"
import reelTalk from "../../data/images/Reel-Talk.jpg"
import ImageSlider from "../ImageSlide/imageSlider"

function Projects () {

    const mazeRunnerImages = [
        maze2, maze1, maze3, maze4
    ]

    const brainFlixImages = [
        bf1,bf2,bf3, bf4, bf5
    ]

    const ukgImages = [
        ukg1, ukg2, ukg3, ukg4, ukg5, ukg6
    ]

    return (
        <div id="projects" className="projects-component ">
            <h1>Projects</h1>
                <div className="project-container">
                <ImageSlider images={mazeRunnerImages} />
                <div>
                    <ul>
                        <li> React </li>
                        <li> Express.js </li>
                        <li> MongoDB </li>
                        <li> Node.js </li>
                    </ul>
                </div>
                <a href="https://maze-runner-pink.vercel.app/">
                    <h2> Maze Runner (click me) </h2>
                </a>
                <p> I developed a maze game that challenges player with differing difficultly levels and assesses their memory capabilities.
                    The game presents a series of mazes, each with unique alyouts and obstacles, requiring players to navigate through them by
                    memorizing the paths and making strategic decisions. </p>
                <a href="https://github.com/Aborgono"> Link to GitHub</a>
            </div>
            <div className="project-container">
                <ImageSlider images = {brainFlixImages} />
                <div>
                    <ul>
                        <li> React </li>
                        <li> Express.js </li>
                        <li> Node.js </li>
                    </ul>
                </div>
                <h2> Brainflix (Coming soon...) </h2>
                <p> Built out my own API service that manages video data. Built out the front end as well where users can click different videos and even upload their own video. </p>
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
                <h2>InStock (Not Available: check out my github for code!) </h2>
                <p> Project for a Fortune 500 client. An Inventory Management System involving a scalable, full-stack web application. In teams we followed an Agile approach
                    and used a JIRA Scrum board to delegate tasks and track progress. Users are able to sort through list of warehouses and list of inventory in each warehouse. 
                    As well as add, edit, or delete inventory. </p>
                <a href="https://github.com/Aborgono"> Link to GitHub</a>
            </div>
            <div className="project-container">
                <ImageSlider images={ukgImages} />
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
                <img className="image2" src={reelTalk} alt="Reel-Talk" />
                <div>
                    <ul>
                        <li> React </li>
                        <li> Express.js </li>
                        <li> Firebase </li>
                        <li> Node.js </li>
                    </ul>
                </div>
                <h2> Reel Talk (Coming soon...) </h2>
                <p> I built a simple front-end and backend to showcase proficiency in firebase. In the front-end, users have the ability to log in if they
                    already have an account or sign up if they do not. Once logged in, the user is able to like a list of movies. The likes are stored in the firestore database
                    specific to the user who liked said movie. There is also a password reset mechanism in case the user forgets their password.
                    I also created a simple backend to provide user authentication. Once a user logs in, a unique token is sent to the backend to verify the user exists in the database.
                    Otherwise they are redirected to the login screen.</p>
                <a href="https://github.com/Aborgono"> Link to GitHub</a>
            </div>
        </div>
    )
}

export default Projects