import React from 'react';
import JsLoGo from '../../static/jianshu-logo.png';
import Beta from '../../static/beta.png';
import './index.less'
import { connect } from 'react-redux';
import { clickOnFocus, clickOnBlur } from '../../store/actionCreators';

const Header = (props) => {
    return <div className='Header'>
        <h1><img src={JsLoGo} alt="简书" /></h1>
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
            <div className={props.searFocus ? 'Hea_focus_search' : 'Hea_search'}>
                <input
                    onFocus={props.searchFocus}
                    onBlur={props.searchBlur}
                    type="text"
                    placeholder="搜索"
                />
                <i className="iconfont iconfangdajing"></i>
            </div>
            <span className='Hea_doload'>登录</span>
            <img src={Beta} className="Hea_Beta" alt="Beta" />
            <i className="iconfont iconAa"></i>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        searFocus: state.searFocus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchFocus() {
            dispatch(clickOnFocus);
        },
        searchBlur() {
            dispatch(clickOnBlur);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);