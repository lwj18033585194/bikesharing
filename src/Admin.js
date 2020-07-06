import React, { Component } from 'react';
import { Row, Col } from 'antd'
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'
class Admin extends Component {

    render() {
        return (
            // 整体页面
            <Row className="container">
                {/* 左侧 */}
                <Col span="4" className="nav-left">
                    <NavLeft />
                </Col>
                {/* 右侧 */}
                <Col span="20" className="main">
                    {/* 头部 */}
                    <Header />
                    {/* 正文 */}
                    <Row className="content">
                        {/* 显示对应组件 */}
                       {this.props.children}
                    </Row>
                    {/* 底部 */}
                    <Footer />
                </Col>
            </Row>
        );
    }
}

export default Admin;