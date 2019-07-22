import React,{Component} from 'react';

import ReactSwipe from 'react-swipe';

import Header from '../layouts/Header'
import {Link} from 'react-router-dom'
import Cell from '../components/Cell/Cell'
import '../assets/css/home.css'
class Home extends Component{
    state={
        list:[]
        
    };
    componentDidMount(){
        axios({
            url:'/mock/home',
            params:{_page:1,_limit:11}
        }).then(
            res=>this.setState({list:res.data.data})
        )
    }
   
    render(){
       let {list} = this.state;
     
        return (
            <div className="Home">
                <ReactSwipe
                    className="Home_top"
                    swipeOptions={{ continuous: true,auto: 1000 }
                    }
                   
                >
                    <div><Link to="/detail/1"><img src="/data/images/b1.png"/></Link></div>
                    <div><Link to="/detail/1"><img src="/data/images/b2.png"/></Link></div>
                    <div><Link to="/detail/1"><img src="/data/images/b3.png"/></Link></div>
                </ReactSwipe>
                <div className="Home_center">
                    <Header/>
                    <ul>
                        <li><a href="#"><i><img src="./data/images/icon.png"/></i><p>新鲜事</p></a></li>
                        <li className="Home_center-t"><a href="#"><i><img src="./data/images/icon1.png"/></i><p>趣闻</p></a></li>
                        <li className="Home_center-t"><a href="#"><i><img src="./data/images/icon2.png"/></i><p>阅读</p></a></li>
                        <li><a href="#"><i><img src="./data/images/icon3.png"/></i><p>专题</p></a></li>
                        <li><a href="#"><i><img src="./data/images/icon4.png"/></i><p>订阅</p></a></li>
                        <li className="Home_center-t"><a href="#"><i><img src="./data/images/icon5.png"/></i><p>专栏</p></a></li>
                        <li className="Home_center-t"><a href="#"><i><img src="./data/images/icon6.png"/></i><p>讨论</p></a></li>
                        <li><a href="#"><i><img src="./data/images/icon7.png"/></i><p>更多</p></a></li>
                        
                    </ul>
                </div>
                {
                list.map(item=>(
                    <Cell
                    key={item.id}
                    data={item}
                    dataName="home"
                    />
                ))

                }
                
                
            </div>
        )
    }
}
export default Home