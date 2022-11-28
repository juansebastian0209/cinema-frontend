import { useLoaderData } from 'react-router-dom'
import React from 'react'

import { DashboardLayout } from '../../layouts/dashboard'
import { Table } from '../../components/table'

const columns = [
    {
        label: "Sede",
        key: "siteId"
    },
    {
        label: "# Sala",
        key: "number"
    },
    {
        label: "Cantidad de sillas",
        render: ({ row }) => {
            return `${row.totalRows * row.totalColumns}`
        }
    },
    {
        label: "Acciones",
        render: ({ row }) => {
            return <p>render</p>
        }
    }
]

export const RoomPage = () => {

    const rows = useLoaderData()

    return (
        <DashboardLayout page="room">
            <Table columns={columns} rows={rows} />
        </DashboardLayout>
    )
}