import React,{Component} from 'react'
import '../../assets/css/publiceheader.css'
export default class PubliceHeader extends Component{
    render(){
        return (
            <div className="PubliceHeader">
            <div className="Column_header">
                    <a href="#" className="Column_header-left" onClick={()=>window.history.go(-1)}><img src="./data/images/icon10.png"/><i></i></a>                  
                    <h3>活动列表</h3>
                    <a href="#" className="Column_header-right"><img src="/data/images/icon9.png"/></a>
                </div>

            </div>
        )
    }
}