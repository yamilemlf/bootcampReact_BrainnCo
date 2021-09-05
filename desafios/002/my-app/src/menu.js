function Menu () {
    return (
        <nav>
            <ul className="menuBar">
                <li className="menuItems"><a href="/">Sobre</a></li>
                <li className="menuItems"><a href="/contato">Contato</a></li>
                <li className="menuItems"><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Menu;