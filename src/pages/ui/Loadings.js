import React, { Component } from 'react'
import './ui.less'
import { Card ,Spin,Icon,Alert} from 'antd'
class Loadings extends Component {
    render(){
        //定义loading图标
        const icon=<Icon type="loading" style={{fontSize:24}}/>
        return(
            <div>
                <Card title="spin用法" className="card-wrapper">
                    <Spin size="small" style={{marginLeft:10}}/>
                    <Spin style={{marginLeft:10}}/>
                    <Spin size="large"  style={{marginLeft:10}}/>
                    <Spin indicator={icon} style={{marginLeft:10}}/>
                </Card>
                <Card title="内容遮罩" className="card-wrapper">
                    <Alert 
                        message="react"
                        description="欢迎来到React高级实战课程"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="react"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="loading...">
                        <Alert
                            message="react"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                        />
                    </Spin>
                    <Spin indicator={icon} tip="loading">
                        <Alert
                            message="react"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
export default Loadings