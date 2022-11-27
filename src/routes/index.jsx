import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

const RouterBrowser = createBrowserRouter([
    { path: "/", element: <b>Hello root path</b> }
])

export const RouterManager = () => {

    return (
        <RouterProvider router={RouterBrowser} />
    );

}