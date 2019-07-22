import React,{Component} from 'react';

import '../../assets/css/Ltiplex.css';

import {Link} from 'react-router-dom';




class Ltiplex extends Component{
    render(){
        let {data,dataName}=this.props;
        
        return (
            <div className="Ltiplex">
                <Link
                    to={{pathName:'/detail/',
                    search:`dataName=${dataName}`
                    }}
                >
                <h3>{data.id}.{data.title}</h3>
                <p className="Ltiplex_top"><img src="./data/images/icon11.png"/><span>{data.des}</span></p>
                <div className="Ltiplex_bottom">
                    <div className="Ltiplex_bottom-left">筹备中</div>
                    <p>2019年7月15日22:12:30</p>
                </div>
                </Link>

               
                
               
            </div>
        )
    }
}
export default Ltiplex;