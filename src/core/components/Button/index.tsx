import './styles.css';

type Props = {
    children: string;
}

const Button = ({ children }: Props) => {
    return (
        <div className="button-container" >{children}</div>
    );
}

 export default Button;