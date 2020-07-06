import React,{Component} from 'react'
import {Card,Table, Button,message, Modal} from 'antd'
import axios from './../../axios'
import Utils from '../../utils/utils'
class BasicTable extends Component{
    state={
        dataSource2:[]
    }
    //当前页码（不需要存到state中，只是一个参数，不需要render）
    params={
        page:1
    }
    UNSAFE_componentWillMount(){
        //表格数据源
        const dataSource=[
            {
                id:'0',
                userName:'jack',
                sex:'1',
                state:'1',
                interest:'1',
                married:'1',
                birthday:'2020-01-01',
                address:'北京市',
                time:'09:00'
            },
            {
                id: '2',
                userName: 'susan',
                sex: '1',
                state: '1',
                interest: '5',
                married: '1',
                birthday: '2020-01-01',
                address: '北京市',
                time: '09:00'
            },
            {
                id: '3',
                userName: 'tom',
                sex: '1',
                state: '1',
                interest: '4',
                married: '1',
                birthday: '2020-01-01',
                address: '北京市',
                time: '09:00'
            },
        ];
        dataSource.map((item,index)=>{
            return item.key=index+new Date().getTime()+Math.random()*10000;
        })
        this.setState({
            dataSource
        })
    };
    componentDidMount(){
        this.request();
    };
    //请求mock数据
    request=()=>{
        let _this=this;
        axios.ajax({
            url:'/api/basic',
            data:{
                params:{
                    page:this.params.page
                },
                isShowLoading:true
            }
        }).then(res=>{
            //动态添加key
            res.list.map((item,index)=>{
                return item.key=index;
            })
            this.setState({
                dataSource2:res.list,
                selectedRowKeys:[],
                selectRows:null,
                pagination:Utils.pagination(res,(current)=>{ //分页
                    //把选择的当前页传过去，重新请求
                    _this.params.page = current
                    this.request()
                })
            })
        })
    }
    //点击每一行时选中这一行
    onRowClick=(record,index)=>{
        //选择哪行
        let selectKey=[index];
        this.setState({
            selectedRowKeys:selectKey,//选择哪一行
            selectedItem:record //选择的记录
        })
    }
    //删除操作
    handleDelete=()=>{
        let rows=this.state.selectRows;
        let ids=[];
        rows.map(item=>{
            return ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:`你确定要删除${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    }

    render(){
        let { dataSource, dataSource2, pagination}=this.state;
        //表格属性
        const colums=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex){
                    return sex===1?'男':'女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state){
                    let config={
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
                render(interest){
                    let config={
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
                render(married){
                    return married===1?'未婚':'已婚'
                }
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title:'早起时间',
                dataIndex:'time'
            }
        ];
        //单选
        const rowSelection = {
            type:'radio',
            selectedRowKeys:this.state.selectedRowKeys //获取当前选中值
        };
        //多选
        const rowCheckSelection={
            type:'checkbox',
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:(selectedRowKeys,selectRows)=>{
                this.setState({
                    selectedRowKeys,//选中了哪些行
                    selectRows
                })
            }
        }
        return(
            <div>
                <Card title="基础表格">
                    <Table 
                        bordered
                        columns={colums}
                        dataSource={dataSource} 
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格" style={{marginTop:10}}>
                    <Table
                        bordered
                        columns={colums}
                        dataSource={dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="mock-单选" style={{ marginTop: 10 }}>
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        columns={colums}
                        dataSource={dataSource2}
                        pagination={false}
                        onRow={(record,index) => {
                            return {
                                onClick:() => { 
                                    this.onRowClick(record,index)
                                }, // 点击行
                            };
                        }}
                    />
                </Card>
                <Card title="mock-多选" style={{ marginTop: 10 }}>
                    <div>
                        <Button onClick={this.handleDelete} style={{ marginBottom: 10 }}>删除</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={colums}
                        dataSource={dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="mock-表格分页" style={{ marginTop: 10 }}>
                    <Table
                        bordered
                        columns={colums}
                        dataSource={dataSource2}
                        pagination={pagination}
                    />
                </Card>
            </div>
        )
    }
}
export default BasicTable