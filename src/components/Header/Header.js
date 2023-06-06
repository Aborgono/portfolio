import './Header.scss';

function Header() {
    return (
    <>
        <section className='header'>
            <div className='header__name'>
                Alberto Borgonovo
            </div>
            <div className='header__list__container'>
                <ul className='header__list__card'>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
        </section>
    </>
);
}
export default Header;