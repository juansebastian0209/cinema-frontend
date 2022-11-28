import { FaEdit, FaTrashAlt } from 'react-icons/all'
import { useLoaderData } from 'react-router-dom'
import moment from 'moment'
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
        render: ({ row }) => {
            return <p>{moment.utc(row.duration * 1000).format('HH:mm:ss')}</p>
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

export const MoviePage = () => {

    const rows = useLoaderData()

    return (
        <DashboardLayout page="movie">
            <Table columns={columns} rows={rows} />
        </DashboardLayout>
    )
}