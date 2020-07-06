import React, { Component } from 'react';
import menuConfig from '../../config/menuConfig'
import {NavLink} from 'react-router-dom'
import { Menu} from 'antd';
import './index.less'
const { SubMenu} = Menu;

class NavLeft extends Component {

    UNSAFE_componentWillMount(){
        const menuTreeNode=this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map(item=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
        return  <Menu.Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="loading"/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                  {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft;