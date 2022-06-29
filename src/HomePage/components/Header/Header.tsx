import React from 'react';
import Sorter from '../Sorter/Sorter';
import { NavBar } from "../NavBar/NavBar";
import './Header.css'

export const Header = () => {

    return <div className="header">
        <NavBar/>
        <Sorter/>
    </div>
}