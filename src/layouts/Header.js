import React,{Component} from 'react';

import '../assets/css/header.css'

import {NavLink} from 'react-router-dom'
export default class Header extends Component{
    render(){
        return (
            
            <div className="header_top">
           
                <ul>
                    <li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
                    <li><NavLink to="/column" activeClassName="active">活动列表</NavLink></li>
                    <li><NavLink to="/user" activeClassName="active">个人中心</NavLink></li>
                </ul>
                

            </div>
        )
    }
}