import React,{Component} from 'react'

import '../assets/css/column.css'
import Ltiplex from '../components/Cell/Ltiplex'
import PubliceHeader from '../components/Cell/publiceheader'
import axios from '../utils/axios';

export default class Column extends Component{
    state={
        list:[]
    };
    componentDidMount(){
        axios({
            url:'/mock/column',
            params:{_page:1,_limit:4}    
        }).then(
            res=>this.setState({list:res.data.data})
        )
    }
    render(){
        return (
           
            <div className="Column">
                
                <PubliceHeader/>
                <div className="Column_body">
                    {
                        this.state.list.map(item=>(
                            <Ltiplex
                                key={item.id}
                                data={item}
                                dataName="home"
                            />
                        ))
                    }
                    
                </div>
                
                
            </div>
        )
    }
}