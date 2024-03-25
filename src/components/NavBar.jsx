import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const activeStyle = "underline underline-offset-4";
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light fondo'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to="/">
                        Dietetica Consciente
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/frutas_secas'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Frutos Secos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/lacteos'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Lacteos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/bebidas'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Bebidas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/especias'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Especies
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/category/frutas'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Frutas
                    </NavLink>
                </li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    );
}