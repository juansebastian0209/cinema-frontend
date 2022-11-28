import { BiCoinStack, FaEdit, FaTrashAlt } from 'react-icons/all'
import { useLoaderData } from 'react-router-dom'
import React from 'react'

import { DashboardLayout } from '../../layouts/dashboard'
import { Table } from '../../components/table'

const language = navigator.language || navigator.userLanguage;

const formatter = new Intl.NumberFormat(language, {
    style: 'currency',
    currency: 'USD',
});

const columns = [
    {
        label: "Nombre del sitio",
        key: "name"
    },
    {
        label: "Dirección del sitio",
        key: "address"
    },
    {
        label: "Precio por ticket",
        render: ({ row }) => {
            return (
                <span className='badge badge-success'>
                    <BiCoinStack />
                    {formatter.format(row.costTicket)}
                </span>
            )
        }
    },
    {
        label: "Acciones",
        render: ({ row }) => {
            return [
                <button className='btn btn-info'><FaEdit /></button>,
                <button className='btn btn-warning'><FaTrashAlt /></button>
            ]
        }
    }
]

export const SitePage = (props) => {

    const rows = useLoaderData()

    return (
        <DashboardLayout page="site">
            <Table columns={columns} rows={rows} />
        </DashboardLayout>
    )
}