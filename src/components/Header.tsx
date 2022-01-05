import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const HeaderWebsite = () => {
    return (
        <div>
            <header>
                <div className="topnav" id="myTopnav">
                    <Link to="/">Home</Link>
                    <Link to="/admin">Shop</Link>
                    <Link to="">Contact</Link>
                    <a href="javascript:void(0);" className="icon">
                        <i className="fa fa-bars" />
                    </a>
                </div>
            </header>

        </div>
    )
}

export default HeaderWebsite
