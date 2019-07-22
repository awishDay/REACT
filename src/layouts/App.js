import React,{Component} from 'react';

import '../assets/css/base.css'

import '../library/font'

import {Switch,Route,Redirect} from 'react-router-dom'


import User from '../pages/User'
import Home from '../pages/Home'
import Column from '../pages/Column'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Detail from '../pages/Detail'
import ErrorPage from '../pages/ErrorPages'




class App extends Component{
    componentWillReceiveProps(nextProps){
        console.log('app',nextProps.location.pathname)
      }
    
    render(){
        return (
            <div className="App">
            
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/column" component={Column} />
                <Route path="/user" component={User} />
                <Route path="/login" component={Login} />
                <Route path="/reg" component={Reg} />
                <Route path="/detail/:id" component={Detail} />
                <Redirect exact from="/" to="/home" />
                <Route component={ErrorPage}/>
            </Switch>
            </div>
        )
    }
}
export default App