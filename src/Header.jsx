import logo from './assets/logo.svg'
import link from './assets/link.svg'
import './Header.css'
function Header() {

    return (
        <>
            <header>
                <div className='TopBanner'>
                    <a href="" >Subscribe to our Newsletter For New & latest Blogs and Resources <img src={link} alt="link" /></a>
                </div>
                <ul className='nav'>
                    <li className='full_logo'>
                        <img className='logo' src={logo} alt="logo" /> FutureTech
                    </li>
                    <li>
                        <ul className='menu'>
                            <li>Home</li>
                            <li>News</li>
                            <li>Podcasts</li>
                            <li>Resources</li>
                        </ul>
                    </li>
                    <li><button className='contact-us'>Contact Us</button></li>
                </ul>
            </header>
        </>
    );


}

export default Header