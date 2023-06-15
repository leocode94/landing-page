import { NavLink } from "react-router-dom";

export default function Header() {

    /* const navActiveStyle = {

    } */

    return (
        <nav className="header">
            <NavLink
                to="/"
            >
                Página inicial
            </NavLink>
            <NavLink
                to="/sobre"
            >
                Sobre
            </NavLink>
            <NavLink
                to="/servicos"
            >
                Serviços
            </NavLink>
            <NavLink
                to="/projetos"
            >
                Projetos
            </NavLink>
            <NavLink
                to="/contato"
            >
                Contato
            </NavLink>
        </nav>
    );
}