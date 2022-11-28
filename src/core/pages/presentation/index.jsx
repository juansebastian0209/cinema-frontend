import { FaEdit, FaTrashAlt } from 'react-icons/all'
import { useLoaderData } from 'react-router-dom'
import moment from 'moment'
import React from 'react'


import { DashboardLayout } from '../../layouts/dashboard'
import { Table } from '../../components/table'

const columns = [
    {
        label: "Pelicula",
        render: ({ row }) => {
            return [
                <b>{row.movieName}</b>,
                <p>{moment.utc(row.movieDuration * 1000).format('HH:mm:ss')}</p>
            ]
        }
    },
    {
        label: "Sede",
        render: ({ row }) => {
            return [
                <b>{row.siteName}</b>,
                <p>{row.siteAddress}</p>,
            ]
        }
    },
    {
        label: "Sala",
        render: ({ row }) => {
            return (
                <span className='badge badge-danger'>{row.roomNumber}</span>
            )

        }
    },
    {
        label: "Fecha de función",
        render: ({ row }) => {
            return moment(row.date).format("L")
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

export const PresentationPage = () => {

    const rows = useLoaderData()

    return (
        <DashboardLayout page="presentation">
            <Table columns={columns} rows={rows} />
        </DashboardLayout>
    )
}