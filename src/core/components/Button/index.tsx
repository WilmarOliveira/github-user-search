import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
    children: string;
    linkTo: string;
}

const Button = ({ children, linkTo }: Props) => {
    return (
        <Link className="button-container" to={linkTo} >{children}</Link>
    );
}

 export default Button;