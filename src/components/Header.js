import { Link } from 'react-router-dom';

const Header=(props) => {
    return (
        <header className="Header">
            <Link to="/shows">
                <h1>Rattlesnake Milk</h1>
            </Link>
            <nav>
                <Link>Home</Link>
                <Link>Shows</Link>
                <Link>Videos</Link>
                <Link>Merch</Link>
                <Link>Contact</Link>
            </nav>

        </header>
    );   
};


export default Header;
