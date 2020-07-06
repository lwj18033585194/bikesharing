import React, { Component } from 'react'
import './ui.less'
import {Card,Button,Modal} from 'antd'
class Modals extends Component {
    state={
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    //打开弹窗
    handleOpen=(type)=>{
        this.setState({
            [type]:true
        })
    }
    //关闭弹窗
    handleClose=(type)=>{
        this.setState({
            [type]:false
        })
    }
    //信息框
    handleConfirm=(type)=>{
        Modal[type]({
            title:"确认",
            content:"你学会react了吗",
            onOk(){
                console.log("学会了")
            },
            onCancel(){
                console.log("没有学会")
            }
        })
    }
    render(){
        let {showModal1,showModal2,showModal3,showModal4}=this.state;
        return(
           <div>
               <Card title="基础模态框" className="card-wrapper">
                    <Button type="primary" onClick={()=>{this.handleOpen('showModal1')}}>open</Button>
                    <Button type="primary" onClick={()=>{this.handleOpen('showModal2')}}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>{this.handleOpen('showModal3')}}>顶部20px弹窗</Button>
                    <Button type="primary" onClick={()=>{this.handleOpen('showModal4')}}>水平垂直居中</Button>
               </Card>
                <Card title="信息确认框" className="card-wrapper">
                    <Button type="primary" onClick={() => { this.handleConfirm('confirm') }}>confirm</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('info') }}>info</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('success') }}>success</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('warning') }}>warning</Button>
                </Card>
               <Modal title="React" visible={showModal1} onCancel={()=>{this.handleClose('showModal1')}}>
                    <p>欢迎来到共享单车1</p>
               </Modal>
                <Modal title="React" visible={showModal2} onCancel={() => { this.handleClose('showModal2') }} okText="好的" cancelText="算了">
                    <p>欢迎来到共享单车2</p>
                </Modal>
                <Modal title="React" visible={showModal3} onCancel={() => { this.handleClose('showModal3') }} style={{top:"20px"}}>
                    <p>欢迎来到共享单车3</p>
                </Modal>
                <Modal title="React" visible={showModal4} onCancel={() => { this.handleClose('showModal4') }} wrapClassName="vertical-center-modal">
                    <p>欢迎来到共享单车4</p>
                </Modal>
           </div>
        )
    }
}
export default Modals