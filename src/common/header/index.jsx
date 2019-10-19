import React, { Component } from 'react';
import JsLoGo from '../../static/jianshu-logo.png';
import Beta from '../../static/beta.png';
import './index.less'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            searFocus:false
        }
    }

    searchFocus = () => {
        this.setState({
            searFocus:true
        })
    }

    searchBlur = () => {
        this.setState({
            searFocus:false
        })
    }
    
    render(){
        let { searFocus } = this.state;
        return <div className='Header'>
            <h1><img src={JsLoGo} alt="简书"/></h1>
            <div className='Hea_rig'>
                <div className='Hea_zc'>注册</div>
                <div className='Hea_write'>
                    <i className="iconfont iconquill"></i>
                    写文章
                </div>
            </div>
            <div className='Hea_mid'>
                <span className='Hea_home'><a href='/'>首页</a></span>
                <span className='Hea_dowApp'><a href='/'>下载App</a></span>
                <div className={searFocus ? 'Hea_focus_search' : 'Hea_search'}>
                    <input 
                        onFocus={this.searchFocus}
                        onBlur={this.searchBlur}
                        type="text" 
                        placeholder="搜索"
                    />
                    <i className="iconfont iconfangdajing"></i>
                </div>
                <span className='Hea_doload'>登录</span>
                <img src={Beta} className="Hea_Beta" alt="Beta"/>
                <i className="iconfont iconAa"></i>
            </div>
        </div>
    }
}

export default Header;