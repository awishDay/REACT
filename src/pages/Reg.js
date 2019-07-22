import React,{Component} from 'react'
import '../assets/css/reg.css'
import PubliceHeader from '../components/Cell/publiceheader.js'
export default class Reg extends Component{
    state={
        username:'',
        password:'',
        mess:''
    };
    reg=()=>{
        axios({
            url:'/mock/reg',
            method:'POST',
            data:{
                username:this.state.username,
                password:this.state.password
            }
        }).then(
            res=>{
                if(res.data.err===0){
                    this.props.history.push('/')
                }else{
                    this.setState({mess:'注册失败'})
                }
            }
        )
    }
    render(){
      return (
           
             <div className="content">
                <PubliceHeader/>
                <p className="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
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
                    <input type="text" 
                    type="text"
                    value={this.state.username}
                    onChange={(ev)=>this.setState({username:ev.target.value})}
                    />
                    <span>帐号</span>
                </li>
                <li>
                    <input type="text"
                    type="text"
                    value={this.state.password}
                    onChange={
                        (ev)=>this.setState(
                            {password:ev.target.value}
                        )
                    }
                    />
                    <span>密码</span>
                </li>
                </ul>
                <div className="footbox">
                <input type="button" value="注 册" className="login-btn" onClick={this.reg}/>
                <a href="javascript:;" className="tishi">忘记密码？</a>
                </div>
            </div>
      )  
    }
}













