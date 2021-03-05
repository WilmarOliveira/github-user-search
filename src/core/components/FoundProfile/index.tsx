import './styles.css';

const FoundProfile = () => {

    return (
        <div className="found-container" >
            <div className="found-content" >
                <div className="left-found-content" >
                    <img 
                        className="image-found-content"
                        alt="founded"
                        src="https://lh6.googleusercontent.com/--b5gArieahM/VD1II8_0jlI/AAAAAAAAGlQ/Ywh-BwwwP9I/w584-h625-no/Pokemon-01-Imagem%2Bsem%2Bfundo.png" 
                    />
                    <div className="button-container" >Ver perfil</div>
                </div>
                <div className="right-found-content" >
                    <div>
                        <span className="details-small" >Relatórios públicos: 62</span>
                        <span className="details-small" >Seguidores: 127</span>
                        <span className="details-small" >Seguindo: 416</span>
                    </div>
                    <div className="information-found-container" >
                        <div className="information-found-content" >
                            <h3>Informações</h3>
                            <span className="details-medium" ><strong>Empresa: </strong>@ZupIT</span>
                            <span className="details-medium" ><strong>Website/Blog: </strong>https://thewashington.dev</span>
                            <span className="details-medium" ><strong>Localidade: </strong>Uberlândia</span>
                            <span className="details-medium" ><strong>Membro desde: </strong>19/10/2013</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoundProfile;