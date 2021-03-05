import axios from 'axios';
import { useEffect, useState } from 'react';
import FoundProfile from '../../core/components/FoundProfile';
import './styles.css';

const FindGitProfile = () => {
    const [data, setData] = useState({});

    const handleOnSearchProfile = () => {
        axios.get('https://api.github.com/users/WilmarOliveira')
            .then(response => setData(response))
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="search-container" >
                <div className="search-content" >
                    <h3 className="search-title" >Encontre um perfil Github</h3>
                    <input placeholder="Usuário Github" className="search-input" type="text" />
                    <div onClick={handleOnSearchProfile} className="button-container">
                        Encontrar
                </div>
                </div>
            </div>
            <FoundProfile />
        </>
    );
}

export default FindGitProfile;