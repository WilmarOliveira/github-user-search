import axios from 'axios';
import { useState } from 'react';
import FoundProfile from '../../core/components/FoundProfile';
import { Profile } from '../../core/types/Profile';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import './styles.css';

const FindGitProfile = () => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Profile>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleOnSearchProfile = () => {
        setLoading(true);
        axios.get(`https://api.github.com/users/${name}`)
            .then(response => {
                setData(response.data)
            })
            .finally(() => setLoading(false));
    }

    return (
        <>
            <div className="search-container" >
                <div className="search-content" >
                    <h3 className="search-title" >Encontre um perfil Github</h3>
                    <input value={name} placeholder="Usuário Github" className="search-input" type="text" onChange={handleOnChange} />
                    <div onClick={handleOnSearchProfile} className="button-container">
                        Encontrar
                </div>
                </div>
            </div>
            {loading && 
                <div className="loaders" >
                    <ImageLoader />
                    <span className="info-loader" ><InfoLoader /></span>
                </div>
            }
            {data && <FoundProfile data={data} />}
            
        </>
    );
}

export default FindGitProfile;