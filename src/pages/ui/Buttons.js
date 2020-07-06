import React, { Component } from 'react'
import './ui.less'
import {Card,Button,Radio} from 'antd'
class Buttons extends Component {
    state={
        loading:true,
        size:'default'

    }
    //点击关闭
    handleClose=()=>{
        this.setState({
            loading:false
        })
    }
    //点击切换按钮大小
    handleChange=(e)=>{
        this.setState({
            size:e.target.value
        })
    }
    render() {
        let {loading,size}=this.state;
        return (
            <div >
                <Card title="基础按钮" className="card-wrapper">
                    <Button type="primary">IMooc</Button>
                    <Button>IMooc</Button>
                    <Button type="dashed">IMooc</Button>
                    <Button type="danger">IMooc</Button>
                    <Button disabled>IMooc</Button>
                </Card>
                <Card title="图形按钮" className="card-wrapper">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="loading按钮" className="card-wrapper">
                    <Button type="primary" loading={loading}>确定</Button>
                    <Button type="primary" loading={loading} shape="circle" ></Button>
                    <Button loading={loading}>点击加载</Button>
                    <Button loading={loading} shape="circle" ></Button>
                    <Button type="primary" onClick={this.handleClose}>关闭</Button>
                </Card>
                <Card title="按钮组" style={{marginBottom:10}}>
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrapper">
                    <Radio.Group value={size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={size}>IMooc</Button>
                    <Button size>IMooc</Button>
                    <Button type="dashed"  size={size}>IMooc</Button>
                    <Button type="danger"  size={size}>IMooc</Button>
                </Card>
            </div>
        )
    }
}
export default Buttons;