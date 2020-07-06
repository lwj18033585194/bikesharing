import React, { Component } from 'react';
import {Row,Col} from 'antd'
import './index.less'
import Utils from '../../utils/utils'
import Axios from '../../axios';
class Header extends Component {
    UNSAFE_componentWillMount(){
        this.setState({
            //用户名
            userName:'lwj'
        })
        //时间设置
        setInterval(()=>{
            //获得当前时间
            let sysTime=Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000);
        this.getWeatherAPIData();
    }
    //获取时间跨域
    getWeatherAPIData(){
        let city='北京';
        Axios.jsonp({
            url:"http://api.map.baidu.com/telematics/v3/weather?location="+encodeURIComponent(city)+"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
        }).then(res=>{
            if(res.status==="success"){
                //取到今天的天气
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render() {
        let { userName, sysTime, dayPictureUrl, weather}=this.state;
        return (
            <div className="header">
                {/* 第一行欢迎 */}
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎: {userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                {/* 第二行面包屑和天气 */}
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{sysTime}</span>
                        <span className="weather-img">
                            <img src={dayPictureUrl} alt="loading" />
                        </span>
                        <span className="weather-detail">
                            {weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;