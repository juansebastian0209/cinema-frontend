import { useLoaderData } from 'react-router-dom'
import React from 'react'

import { DashboardLayout } from '../../layouts/dashboard'
import { Table } from '../../components/table'

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
        key: "costTicket"
    },
    {
        label: "Acciones",
        render: ({ row }) => {
            return <p>render</p>
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