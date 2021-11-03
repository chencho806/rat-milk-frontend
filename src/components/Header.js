import { Link } from 'react-router-dom';

const Header=(props) => {
    const handleClick = () => {
        window.open("https://finesoutherngentlemen.com/search?type=product&q=rattlesnake+milk" )
    };
    return (
        <header className="Header">
            <Link className="Title" to="/shows">
                <h1>Rattlesnake Milk</h1>
            </Link>
            <nav>
                <Link className="Links" to="/">Home</Link>
                <Link className="Links" to="/shows">Shows</Link>
                <Link className="Links" to="/videos">Videos</Link>
                <Link className="Links" to="/" onClick={handleClick}>Merch</Link>
                <Link className="Links" to="/contact">Contact</Link>
            </nav>

        </header>
    );   
};


export default Header;
