import React,{Component} from 'react'
import '../assets/css/login.css'
import Top from '../components/Cell/publiceheader'
import {Link} from 'react-router-dom'
export default class Login extends Component{
    state={
        username:'',
        password:'',
        mess:''
    };
    login = ()=>{
        axios({
            url:'/mock/login',
            method:'POST',
            data:{username:this.state.username,
                  password:this.state.password
            }
        }).then(
            res=>{
                if(res.data.err===0){
                    this.props.history.push('/user')
                }else{
                    this.setState({mess:'登陆失败'})
                }
            }
        )
    };
    render(){
      return (
          <div className="content">
            <Top/>
            <p className="fhbtn"><a href="javascript:;" onClick={()=>window.history.go(-1)}></a></p>
            <h1></h1>
            <div className="login-box">
            <p className="lsolid"></p>
            <div className="login">
                <Link to="/login">登录</Link>
                <span></span>
                <Link to="/reg">注册</Link>
            </div>
            <p className="rsolid"></p>
            </div>
            <ul>
            <li className="lifirst">
                <input 
                    type="text"
                    value={this.state.username}
                    onChange={
                        (ev)=>this.setState({username:ev.target.value})
                    } />
                <span>帐号</span>
            </li>
            <li>
                <input 
                type="text"
                value={this.state.password}
                onChange={(ev)=>this.setState({
                    password:ev.target.value
                })}
                />
                <span>密码</span>
            </li>
            </ul>
            <div className="footbox">
            <input type="button" value="登 录" className="login-btn" onClick={this.login}/>
            <a href="javascript:;" className="tishi">忘记密码？</a>
        </div>
      </div>
      )  
    }
}