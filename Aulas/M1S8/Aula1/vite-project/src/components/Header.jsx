import './Header.css'

function Header (){
    return (
        <header>
            <h1>Meu Site</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/"><Home></Home></a>
                    </li>
                    <li>
                        <a href="/sobre">Sobre</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;