import { FaChevronRight } from 'react-icons/all'
import { useLocation } from 'react-router-dom'
import React from "react"

import './style.css'

const BreadcrumbItemComponent = ({ item, isLast }) => {
    return (
        <p className={!isLast ? "breadcrumb-container__item" : "breadcrumb-container__item_last"}>
            <b>{item}</b>
            {!isLast && <FaChevronRight />}
        </p>
    )
}

export const BreadcrumbComponent = () => {

    const getItems = () => {
        const location = useLocation();
        let items = location.pathname.split("/");
        items.shift()

        const itemsLength = (items.length - 1)
        return items.map((item, index) => {
            const isLast = (index === itemsLength);
            return <BreadcrumbItemComponent key={index} {...{ item, isLast }} />
        })
    }


    return (
        <section className='breadcrumb-container'>
            {getItems()}
        </section>
    )
}