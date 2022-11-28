import { FaEdit, FaTrashAlt } from 'react-icons/all'
import { useLoaderData } from 'react-router-dom'
import React from 'react'

import { DashboardLayout } from '../../layouts/dashboard'
import { Table } from '../../components/table'

const columns = [
    {
        label: "Sede",
        render: ({ row }) => {
            return [
                <p>{row.siteName}</p>,
                <b>{row.siteAddress}</b>
            ]
        }
    },
    {
        label: "# Sala",
        render: ({ row }) => {
            return <span className='badge badge-danger'>{row.number}</span>
        }
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
            return [
                <button className='btn btn-info'><FaEdit /></button>,
                <button className='btn btn-warning'><FaTrashAlt /></button>
            ]
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