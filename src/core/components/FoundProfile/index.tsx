import { Profile } from '../../types/Profile';
import dayjs from 'dayjs'
import './styles.css';

type Props = {
    data: Profile;
}

const FoundProfile = ({ data }: Props) => {
    const formatedCreatedAt = dayjs(data.created_at).format('DD-MM-YYYY');

    return (
        <div className="found-container" >
            <div className="found-content" >
                <div className="left-found-content" >
                    <img 
                        className="image-found-content"
                        alt={data.name}
                        src={data.avatar_url} 
                    />
                    <div className="button-container" ><a target="_blank" rel="noreferrer" href={data.html_url} >Ver perfil</a></div>
                </div>
                <div className="right-found-content" >
                    <div>
                        <span className="details-small" >Relatórios públicos: {data.public_repos}</span>
                        <span className="details-small" >Seguidores: {data.followers}</span>
                        <span className="details-small" >Seguindo: {data.following}</span>
                    </div>
                    <div className="information-found-container" >
                        <div className="information-found-content" >
                            <h3>Informações</h3>
                            <span className="details-medium" ><strong>Empresa:</strong>{data.company}</span>
                            <span className="details-medium" ><strong>Website/Blog:</strong>{data.blog}</span>
                            <span className="details-medium" ><strong>Localidade:</strong>{data.location}</span>
                            <span className="details-medium" ><strong>Membro desde:</strong>{formatedCreatedAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoundProfile;