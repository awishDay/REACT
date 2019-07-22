import React,{Component} from 'react'

import '../../assets/css/cell.css'

import {Link} from 'react-router-dom'
export default class Cell extends Component{
    render(){
        let {data,dataName}=this.props;
        return (
            <div className="Cell">
                <div className="Cell_top">
                    <div className="Cell_top-left">
                        <i><img src="/data/images/a1.png"/></i>
                        <span>王富贵儿</span>
                    </div>
                    <div className="Cell_top-right">
                        <span>新鲜事</span>
                        <i></i>
                    </div>
                </div>
                <div className="Cell_bottom">
                    <Link
                    to={
                        {pathname:'/detail/'+data.id,search:`dataName=${dataName}`}
                    }
                    >
                    <h3>{data.id}.{data.title}</h3>
                    <p>{data.des}</p>
                    </Link>

                    {/* <div className="Cell_bottom-left">
                        <h3>一二三四五六七七六五四三二一一一一</h3>
                        <p>一刹那者为一念，二十念为一瞬，二十瞬为一弹指，二十弹指为一罗预，二十罗预为一须臾</p>
                    </div> */}
                    <div className="Cell_bottom-right">
                        <img src="/data/images/a2.png"/>
                    </div>
                </div>
            </div>
        )
    }
}