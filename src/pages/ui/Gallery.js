import React, { Component } from 'react'
import './ui.less'
import { Card, Row, Col,Modal} from 'antd'
class Gallery extends Component {
    state={
        current:'',
        showFlag:false
    }
    //打开图片
    handleOpen=(current)=>{
        this.setState({
            current,
            showFlag:true
        })
    }
    //关闭图片
    handleCancel=()=>{
        this.setState({
            showFlag:false
        })
    }
    render(){
        // 图片数据准备
        const number = [1, 2, 3, 4]
        const imgs = []
        for (let i = 0; i < (24 / 4); i++) {
            imgs.push(number.map(num => num + (i * 4)))
        }

        const imgList=imgs.map(list=>{
            return list.map(item=>
                <Card cover={<img src={'/gallery/' + item + '.png'} alt="loading" />} onClick={() => { this.handleOpen('/gallery/' + item + '.png')}}>
                    <Card.Meta 
                        title="React Admin"
                        description="gallery"
                    />
                </Card>
            )
        })
        const imgShow = imgList.map((item, index) => <Col md={4} key={index}>{item}</Col>)
        let { showFlag,current } = this.state;
        return(
            <div class="card-wrapper">
                {/* gutter间隙 */}
                <Row gutter={10}>
                    {imgShow}
                </Row>
                <Modal
                    width={400}
                    title="图片"
                    footer={null}
                    visible={showFlag}
                    onCancel={this.handleCancel}
                >
                    <img src={current} alt="loading" style={{width:300,height:300,textAlign:'center'}}/>
                </Modal>
            </div>
        )
    }
}
export default Gallery