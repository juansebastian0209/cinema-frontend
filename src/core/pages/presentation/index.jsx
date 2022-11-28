import { useLoaderData } from 'react-router-dom'
import React from 'react'

import { DashboardLayout } from '../../layouts/dashboard'
import { Table } from '../../components/table'

const columns = [
    {
        label: "Pelicula",
        key: "movieId"
    },
    {
        label: "Sala",
        key: "roomId"
    },
    {
        label: "Fecha de función",
        key: "date"
    },
    {
        label: "Acciones",
        render: ({ row }) => {
            return <p>render</p>
        }
    }
]

export const PresentationPage = () => {

    const rows = useLoaderData()

    return (
        <DashboardLayout page="presentation">
            <Table columns={columns} rows={rows} />
        </DashboardLayout>
    )
}