import React,{Component} from 'react';
import PublliceHeader from '../components/Cell/publiceheader.js'
import Cell from '../components/Cell/Cell.js'
import '../assets/css/user.css'
export default class User extends Component{
    state={
        list:[]
        
    };
    render(){
        return (
            <div className="User">
                <PublliceHeader/>
                <div className="User_body">
                    <div className="User_body-top">
                        <img src="./data/images/qq1.png"/>
                        <h3>AmizingUI</h3>
                        <span>中国</span>
                        <p>当你老了，头白了，睡意昏沉，炉火旁打盹，请取下这部诗歌，慢慢读，回想你过去眼神的柔和</p>
                    </div>
                    <ul>
                        <li><a href="#"><span>999</span><br/>喜欢</a></li>
                        <li><a href="#"><span>520</span><br/>关注</a></li>
                        <li><a href="#"><span>666</span><br/>文章</a></li>
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