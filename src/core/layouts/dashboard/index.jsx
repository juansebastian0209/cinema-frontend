import React from 'react'
import { BreadcrumbComponent } from '../../components/breadcrumb';
import { SidebarComponent } from '../../components/sidebar';

import "./style.css"

export const DashboardLayout = ({ page, children }) => {
    return (
        <div className='dashboard-container'>
            <SidebarComponent {...{ page }} />
            <section className='main-container'>
                <BreadcrumbComponent />
                <section className='page-container'>
                    {children}
                </section>
            </section>
        </div>
    );
}