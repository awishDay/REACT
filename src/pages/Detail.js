import React,{Component} from 'react'

import Top from '../components/Cell/publiceheader'
import '../assets/css/detail.css'
import querystring from 'query-string'
import axios from '../utils/axios';

class Detail extends Component{
    state={
        data:{}
    };
    componentDidMount(){
    let {history,match,location} = this.props; 
   
    let id = match.params.id-0;
    let dataName = querystring.parse(location.search).dataName
    axios({
        url:`/mock/${dataName}/${id}`
    }).then(
        res=>this.setState({data:res.data.data})
    )
}

    render(){
        let {data} = this.state;
        
        
        return (
            <div className="Detail">
                <Top/>
                {
                    data.detail && (
                        <div className="Detail_body">
                    <div className="detail-detail">
                    <div className="Detail_body-top">
                       <img src="/data/images/a1.png"/> 
                       <h3>
                           <i>{data.detail.auth}</i>
                           <span>{data.title}</span>
                       </h3>
                    </div>
                    <div className="Detail_body-center">
                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=402704470,3269230154&fm=27&gp=0.jpg" />
                        <p>{data.detail.content}</p>
                    </div> 
                  
                    </div>
                      
                </div>

                    )
                }


            
           
            </div>
        )
    }
}
export default Detail





















