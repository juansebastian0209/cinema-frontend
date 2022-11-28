import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'

import { SitePage, MoviePage, PresentationPage, RoomPage, SalesPage } from '../core/pages'

const RouterBrowser = createBrowserRouter([
    { path: "/dashboard/sales", caseSensitive: true, element: <PresentationPage /> },
    { path: "/dashboard/presentations", caseSensitive: true, element: <SitePage /> },
    { path: "/dashboard/movies", caseSensitive: true, element: <MoviePage /> },
    { path: "/dashboard/sites", caseSensitive: true, element: <SalesPage /> },
    { path: "/dashboard/rooms", caseSensitive: true, element: <RoomPage /> },
])

export const RouterManager = () => {

    return (
        <RouterProvider router={RouterBrowser} />
    );

}