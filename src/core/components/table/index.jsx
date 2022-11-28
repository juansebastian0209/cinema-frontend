import React from "react"

import "./style.css"

const TableHeader = ({ columns = [] }) => {

    const columnRender = () => {
        const render = [];
        for (const { label } of columns) {
            render.push(<th key={label}>{label}</th>)
        }
        return render
    }

    return (
        <thead>
            <tr>
                {columnRender()}
            </tr>
        </thead>
    )
}

const TableContent = ({ columns = [], rows = [] }) => {

    const rowRender = (row) => {
        const render = []
        for (const column of columns) {
            if (column.render) {
                render.push(<td key={column.label}>{column.render({ row })}</td>)
                continue
            }
            render.push(<td key={column.label}>{row[column.key]}</td>)
        }
        return render
    }

    const rowsRender = (rows) => {
        const render = [];
        for (const row of rows) {
            render.push(<tr key={row.id}>{rowRender(row)}</tr>)
        }
        return render
    }

    return (
        <tbody>
            {rowsRender(rows)}
        </tbody>
    )
}

export const Table = ({ columns, rows }) => {
    return (
        <section className="table-component">
            <table className="table-container">
                <TableHeader columns={columns} />
                <TableContent columns={columns} rows={rows} />
            </table>
        </section>
    )
}