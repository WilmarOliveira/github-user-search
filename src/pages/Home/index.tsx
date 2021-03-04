import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {



    return (
        <div className="home-container" >
            <div className="home-title" >
                <h1>Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
            </div>
            <div className="home-description" >
                <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
                <p>Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
                <p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com</p>
            </div>
            <div className="home-button" >
                <div className="button-container">
                    <Link to="/find" >Começar</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;