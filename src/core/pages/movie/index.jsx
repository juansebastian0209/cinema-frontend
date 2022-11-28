import { useLoaderData } from 'react-router-dom'
import React from 'react'

import { DashboardLayout } from '../../layouts/dashboard'
import { Table } from '../../components/table'

const columns = [
    {
        label: "Nombre",
        key: "name"
    },
    {
        label: "Duración",
        key: "duration"
    },
    {
        label: "Acciones",
        render: ({ row }) => {
            return <p>render</p>
        }
    }
]

export const MoviePage = () => {

    const rows = useLoaderData()

    return (
        <DashboardLayout page="movie">
            <Table columns={columns} rows={rows} />
        </DashboardLayout>
    )
}