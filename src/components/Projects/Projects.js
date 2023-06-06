import './Projects.scss';

function Projects() {
    return (
    <>
        <h1 className='project__header'>Projects</h1>
        <section className='project__container'>
            <div className='project__card'>
                <img className='project__image' alt='maze'></img>
                <div className='project__tools'></div>
                <div className='project__title'>Maze Runner</div>
                <div className='project_description'></div>
                <url className='project__url'></url>
            </div>
            <div className='project__card'>
                <img className='project__image' alt='think'></img>
                <div className='project__tools'></div>
                <div className='project__title'>Think on it by UKG</div>
                <div className='project_description'></div>
                <url className='project__url'></url>
            </div>
            <div className='project__card'>
                <img className='project__image' alt='instock'></img>
                <div className='project__tools'></div>
                <div className='project__title'>In Stock</div>
                <div className='project_description'></div>
                <url className='project__url'></url>
            </div>
        </section>
    </>
);
}
export default Projects;