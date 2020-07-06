import React, { Component } from 'react'
import { Card, Table, message, Modal,Badge } from 'antd'
import axios from './../../axios'
class HighTable extends Component {
    state={

    };
    params={
        page:1
    };
    componentDidMount() {
        this.request();
    };
    //请求mock数据
    request = () => {
        axios.ajax({
            url: '/api/high',
            data: {
                params: {
                    page: this.params.page
                },
                isShowLoading: true
            }
        }).then(res => {
            //动态添加key
            res.list.map((item, index) => {
                return item.key = (index+new Date().getTime()+Math.random()*100000000000000000);
            })
            this.setState({
                dataSource: res.list,
            })
        })
    }
    //表格变化时--升序，降序
    handleChange=(pagination,filters,sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    //删除
    handleDelete=(item)=>{
        let id=item.id;
        Modal.confirm({
            title:"删除提示",
            text:`确定要删除${id}行吗？`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    }
    render(){
        let { dataSource}=this.state;
        //表格属性
        const colums = [
            {
                title: 'id',
                dataIndex: 'id',
                width:80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width:80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    let config = {
                        '1': '我在线上',
                        '2': 'Q我吧',
                        '3': '离开',
                        '4': '忙碌',
                        '5': '请勿打扰',
                        '6': '隐身',
                        '7': '离线'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width:80,
                render(interest) {
                    let config = {
                        '1': '爬山',
                        '2': '旅游',
                        '3': '唱歌',
                        '4': '台球',
                        '5': '网球',
                        '6': '篮球',
                        '7': '足球',
                        '8': '乒乓球',
                        '9': '羽毛球',
                        '10': '游戏'
                    }
                    return config[interest]
                }
            },
            {
                title: '是否已婚',
                dataIndex: 'married',
                width: 80,
                render(married) {
                    return married === 1 ? '未婚' : '已婚'
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 120
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width:80
            }
        ];
        const colums2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                fixed:"left"
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    let config = {
                        '1': '我在线上',
                        '2': 'Q我吧',
                        '3': '离开',
                        '4': '忙碌',
                        '5': '请勿打扰',
                        '6': '隐身',
                        '7': '离线'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
                render(interest) {
                    let config = {
                        '1': '爬山',
                        '2': '旅游',
                        '3': '唱歌',
                        '4': '台球',
                        '5': '网球',
                        '6': '篮球',
                        '7': '足球',
                        '8': '乒乓球',
                        '9': '羽毛球',
                        '10': '游戏'
                    }
                    return config[interest]
                }
            },
            {
                title: '是否已婚',
                dataIndex: 'married',
                width: 80,
                render(married) {
                    return married === 1 ? '未婚' : '已婚'
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 120
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80
            }
        ];
        const colums3 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                width: 80,
                sorter:(a,b)=>{
                    return a.age-b.age;
                },
                sortOrder:this.state.sortOrder
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    let config = {
                        '1': '我在线上',
                        '2': 'Q我吧',
                        '3': '离开',
                        '4': '忙碌',
                        '5': '请勿打扰',
                        '6': '隐身',
                        '7': '离线'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
                render(interest) {
                    let config = {
                        '1': '爬山',
                        '2': '旅游',
                        '3': '唱歌',
                        '4': '台球',
                        '5': '网球',
                        '6': '篮球',
                        '7': '足球',
                        '8': '乒乓球',
                        '9': '羽毛球',
                        '10': '游戏'
                    }
                    return config[interest]
                }
            },
            {
                title: '是否已婚',
                dataIndex: 'married',
                width: 80,
                render(married) {
                    return married === 1 ? '未婚' : '已婚'
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 120
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80
            }
        ];
        const colums4 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    let config = {
                        '1': '我在线上',
                        '2': 'Q我吧',
                        '3': '离开',
                        '4': '忙碌',
                        '5': '请勿打扰',
                        '6': '隐身',
                        '7': '离线'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
                render(interest) {
                    let config = {
                        '1': <Badge status="success" text="爬山"/>,
                        '2': <Badge status="error" text="旅游"/>,
                        '3': <Badge status="warning" text="唱歌" />,
                        '4': <Badge status="warning" text="台球" />,
                        '5': <Badge status="success" text="网球" />,
                        '6': <Badge status="success" text="篮球" />,
                        '7': <Badge status="success" text="足球" />,
                        '8': <Badge status="success" text="乒乓球" />,
                        '9': <Badge status="success" text="羽毛球" />,
                        '10':<Badge status="success" text="游戏" />,
                    }
                    return config[interest]
                }
            },
            {
                title: '是否已婚',
                dataIndex: 'married',
                width: 80,
                render(married) {
                    return married === 1 ? '未婚' : '已婚'
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 120
            },
            {
                title: '操作',
                width: 80,
                render:(text,item)=>{
                    return <a href="#" onClick={(item)=>{this.handleDelete(item)}}>删除</a>
                }
            }
        ];
        return(
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={colums}
                        dataSource={dataSource}
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧固定" style={{ marginTop: 10 }}>
                    <Table
                        bordered
                        columns={colums2}
                        dataSource={dataSource}
                        pagination={false}
                        scroll={{ x: 1610 }}
                    />
                </Card>
                <Card title="排序" style={{ marginTop: 10 }}>
                    <Table
                        bordered
                        columns={colums3}
                        dataSource={dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作" style={{ marginTop: 10 }}>
                    <Table
                        bordered
                        columns={colums4}
                        dataSource={dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
export default HighTable