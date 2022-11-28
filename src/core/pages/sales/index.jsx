import { FaEdit, FaTrashAlt, BiCoinStack } from 'react-icons/all'
import { useLoaderData } from 'react-router-dom'
import moment from 'moment'
import React from 'react'

import { DashboardLayout } from '../../layouts/dashboard'
import { Table } from '../../components/table'

const columns = [
    {
        label: "Funcion",
        key: "presentationId",
        render: ({ row }) => {
            return [
                <p><b>Nombre :</b>{row.movieName}</p>,
                <p><b>Fecha :</b>{moment(row.presentationDate).format("L")}</p>,
                <p><b>Duracion:</b>{moment.utc(row.movieDuration * 1000).format('HH:mm:ss')}</p>,
            ]
        }
    },
    {
        label: "Vendedor",
        render: ({ row }) => {
            return [
                <p><b>nickname:</b>{row.personUser}</p>,
                <p><b>Nombre:</b>{row.personName}</p>,
            ]
        }
    },
    {
        label: "Comprador",
        render: ({ row }) => {
            return [
                <p>
                    <b>correo electronico: </b>
                    <span>{row.email}</span>
                </p>,
                <p>
                    <b>Documento de identidad: </b>
                    <span>{row.document}</span>
                </p>,
                <p>
                    <b>nombre: </b>
                    <span>{row.name}</span>
                </p>
            ]
        }
    },
    {
        label: "Sala",
        render: ({ row }) => {
            return [
                <span className='badge badge-danger'>{row.roomNumber}</span>
            ]
        }
    },
    {
        label: "Silla",
        render: ({ row }) => {
            return (
                <span className='badge badge-info'>{`${String.fromCharCode(64 + row.x)}${row.y}`}</span>
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

export const SalesPage = () => {

    const rows = useLoaderData()

    return (
        <DashboardLayout page="sales">
            <Table columns={columns} rows={rows} />
        </DashboardLayout>
    )
}