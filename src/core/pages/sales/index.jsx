import { useLoaderData } from 'react-router-dom'
import React from 'react'

import { DashboardLayout } from '../../layouts/dashboard'
import { Table } from '../../components/table'

const columns = [
    {
        label: "Funcion",
        key: "presentationId"
    },
    {
        label: "Vendedor",
        key: "personId"
    },
    {
        label: "Documento de identidad",
        key: "document"
    },
    {
        label: "Nombre del comprador",
        key: "name"
    },
    {
        label: "Correo electronico",
        key: "email"
    },
    {
        label: "Silla",
        render: ({ row }) => {
            return `${String.fromCharCode(64 + row.x)}${row.y}`
        }
    },
    {
        label: "Acciones",
        render: ({ row }) => {
            return <p>render</p>
        }
    }
]

export const SalesPage = () => {

    const rows = useLoaderData()

    return (
        <DashboardLayout page="sales">
            <Table columns={columns} rows={rows} />
        </DashboardLayout>
    )
}