import axios from 'axios';
import { useState } from 'react';
import FoundProfile from '../../core/components/FoundProfile';
import { Profile } from '../../core/types/Profile';
import './styles.css';

const FindGitProfile = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState<Profile>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleOnSearchProfile = () => {
        axios.get(`https://api.github.com/users/${name}`)
            .then(response => {
                setData(response.data)
            })
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
            {(data && JSON.stringify(data) !== '{}') &&
                <FoundProfile data={data} />
            }
        </>
    );
}

export default FindGitProfile;