import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

import { SitePage, MoviePage, PresentationPage, RoomPage, SalesPage } from '../core/pages'

const RouterBrowser = createBrowserRouter([
    {
        element: <SalesPage />,
        path: "/dashboard/sales",
        caseSensitive: true,
    },
    {
        path: "/dashboard/presentations",
        element: <PresentationPage />,
        caseSensitive: true,
    },
    {
        path: "/dashboard/movies",
        element: <MoviePage />,
        caseSensitive: true,
    },
    {
        path: "/dashboard/sites",
        element: <SitePage />,
        caseSensitive: true,
        loader: async ({ request }) => {
            return await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/site`,
                { signal: request.signal }
            )
        },
    },
    {
        path: "/dashboard/rooms",
        element: <RoomPage />,
        caseSensitive: true,
    },
])

export const RouterManager = () => {

    return (
        <RouterProvider router={RouterBrowser} />
    );

}