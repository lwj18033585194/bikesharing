import React, { Component } from 'react'
import './ui.less'
import { Card, Button, notification } from 'antd'
class Notification extends Component {
    openNotification=(type,direction)=>{
        if(direction){
            //设置弹出框位置
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message:"发工资啦",
            description:"上个月考勤22天"
        })
    }
    render(){
        return(
            <div>
                <Card title="通知提醒框" className="card-wrapper">
                    <Button type="primary" onClick={()=>{this.openNotification('success')}}>Success</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('info')}}>Info</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('warning')}}>Warning</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('error')}}>Error</Button>
                </Card>
                <Card title="通知提醒框" className="card-wrapper">
                    <Button type="primary" onClick={() => { this.openNotification('success','topLeft') }}>Success</Button>
                    <Button type="primary" onClick={() => { this.openNotification('info','topRight') }}>Info</Button>
                    <Button type="primary" onClick={() => { this.openNotification('warning','bottomLeft') }}>Warning</Button>
                    <Button type="primary" onClick={() => { this.openNotification('error','bottomRight') }}>Error</Button>
                </Card>
            </div>
        )
    }
}
export default Notification