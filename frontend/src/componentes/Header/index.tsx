import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="rafametas-logo-container">
                <img src={logo}/>
                <h1>Rafa Metas</h1>
                <p>
                    Desenvolvido por Rafael Marinheiro
                </p>
            </div>
        </header>);
}

export default Header