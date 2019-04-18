import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SideNav from './SideNav';
import Dashboard from './Dashboard';

export default class EducationApp extends React.Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div><SideNav /></div>
                </BrowserRouter>
                <Dashboard />
            </div>
        )
    }
}