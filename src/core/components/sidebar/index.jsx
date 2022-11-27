import React from "react"

import brandImage from '../../../assets/brand.png'

export const SidebarComponent = ({ page }) => {
    return (
        <nav className='sidebar-container'>
            <section className='sidebar-container__brand'>
                <img src={brandImage} alt="cinema brand image." />
                <h1>CINEMA</h1>
            </section>
            <ul>
                <li>Sedes</li>
                <li>Salas</li>
                <li>Peliculas</li>
                <li>Funciones</li>
                <li>Ventas</li>
            </ul>

            <ul>
                <li>cerrar sesión</li>
            </ul>
        </nav>
    )
}