import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

import { SitePage } from '../core/pages'

const RouterBrowser = createBrowserRouter([
    { path: "/dashboard/sites", caseSensitive: true, element: <SitePage /> }
])

export const RouterManager = () => {

    return (
        <RouterProvider router={RouterBrowser} />
    );

}