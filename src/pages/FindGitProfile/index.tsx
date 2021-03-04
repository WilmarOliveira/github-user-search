import Button from '../../core/components/Button';
import './styles.css';

const FindGitProfile = () => {
    return (
        <div className="search-container" >
            <div className="search-content" >
                <h3 className="search-title" >Encontre um perfil Github</h3>
                <input placeholder="Usuário Github" className="search-input" type="text" />
                <Button linkTo="/" >Encontrar</Button>
            </div>
        </div>
    );
}

export default FindGitProfile;