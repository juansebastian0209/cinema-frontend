import { GrLocation, IoTrailSign, IoVideocam, RiMovie2Line, RiMoneyDollarCircleFill } from 'react-icons/all'
import { NavLink } from 'react-router-dom'
import React from "react"

import brandImage from '../../../assets/brand.png'
import "./style.css"

export const SidebarComponent = ({ page }) => {
    return (
        <nav className='sidebar-container'>
            <section className='sidebar-container__brand'>
                {/* 
                <img src={brandImage} alt="cinema brand image." />
                <h1>CINEMA</h1> 
                */}
                <p>
                    <span>IMAX</span>
                    <span>CINE +</span>
                </p>

            </section>

            <ul className="sidebar-container__pages">
                <li>
                    <NavLink to="/dashboard/sites">
                        <GrLocation />
                        <span>Sedes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/rooms">
                        <IoTrailSign />
                        <span>Salas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/movies">
                        <RiMovie2Line />
                        <span>Peliculas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/presentations">
                        <IoVideocam />
                        <span>Funciones</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/sales">
                        <RiMoneyDollarCircleFill />
                        <span>Ventas</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}