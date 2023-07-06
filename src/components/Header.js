import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <nav className="header">
            <NavLink
                className="header--navlink"
                to="/"
            >
                Página inicial
            </NavLink>
            <NavLink
                className="header--navlink"
                to="/sobre"
            >
                Sobre
            </NavLink>
            <NavLink
                className="header--navlink"
                to="/servicos"
            >
                Serviços
            </NavLink>
            <NavLink
                className="header--navlink"
                to="/projetos"
            >
                Projetos
            </NavLink>
            <NavLink
                className="header--navlink"
                to="/contato"
            >
                Contato
            </NavLink>
        </nav>
    );
}