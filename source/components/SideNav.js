import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => (
    <div className="side-nav">
        <h4 className="side-nav-title">Khalid Asgarzade</h4>
        <NavLink to="/dashboard" className="side-nav-link" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/course" className="side-nav-link" activeClassName="is-active">Course</NavLink>
        <NavLink to="/exam" className="side-nav-link" activeClassName="is-active">Exam</NavLink>
        <NavLink to="/q&a" className="side-nav-link" activeClassName="is-active">Q&A</NavLink>
        <NavLink to="/news" className="side-nav-link" activeClassName="is-active">News</NavLink>
    </div>
);

export default SideNav;
