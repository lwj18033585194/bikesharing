import React, { Component } from 'react'
import './ui.less'
import { Card, Carousel } from 'antd'
class Carousels extends Component {
    render(){
        return(
            <div>
                <Card title="文字轮播图" className="card-wrapper">
                    <Carousel autoplay effect="fade">
                        <div><h3>Ant 1</h3></div>
                        <div><h3>Ant 2</h3></div>
                        <div><h3>Ant 3</h3></div>
                        <div><h3>Ant 4</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播图" className="card-wrapper slider-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="loading"/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="loading" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="loading" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}
export default Carousels