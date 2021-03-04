import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <header className="header-container" >
            <h3 className="header-title" >
                <Link to="/">Bootcamp DevSuperior</Link>
            </h3>
        </header>
    );
}

export default Header;