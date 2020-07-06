import React, { Component } from 'react'
import './ui.less'
import { Card, Button, message } from 'antd'
class Messages extends Component {
    showMessage=(type)=>{
        message[type]('react晋级成功')
    }
    render(){
        return(
            <div>
                <Card title="全局message" className="card-wrapper">
                    <Button type="primary" onClick={() => { this.showMessage('success') }}>Success</Button>
                    <Button type="primary" onClick={() => { this.showMessage('info') }}>Info</Button>
                    <Button type="primary" onClick={() => { this.showMessage('warning') }}>Warning</Button>
                    <Button type="primary" onClick={() => { this.showMessage('error') }}>Error</Button>
                    <Button type="primary" onClick={() => { this.showMessage('loading') }}>Loading</Button>
                </Card>
            </div>
        )
    }
}
export default Messages