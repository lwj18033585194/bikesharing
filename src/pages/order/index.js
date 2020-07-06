import React,{Component} from 'react'
import { Card, Button, Table, Form, Select, DatePicker, Modal} from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
const FormItem =Form.Item;
const Option=Select.Option
class Order extends Component{
    state={
        orderConfirmVisible: false
    }
    params={
        page:1
    }
    componentDidMount(){
        this.request();
    }
    request=()=>{
        let _this = this;
        axios.ajax({
            url: '/api/order/order',
            data: {
                params: this.params
            }
        }).then((res) => {
            let dataSource = res.list.map((item, index) => {
                item.key = index;
                return item;
            });
            this.setState({
                dataSource,
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current;
                    _this.request();
                })
            })
        })
    }
    //结束订单
    handleFinishOrder=()=>{
    }
    //结束订单时确认信息
    handleConfirm=()=>{

    }
    render(){
        let {dataSource,pagination,orderConfirmVisible}=this.state;
        //表格属性
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance) {
                    return distance / 1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
        return(
            <div>
                <Card>
                    <FilterForm/>
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary">订单详情</Button>
                    <Button type="primary" style={{marginLeft:10}} onClick={this.handleFinishOrder}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataSource}
                        pagination={pagination}
                    />
                </div>
                <Modal 
                    title="结束订单"
                    visible={orderConfirmVisible}
                    onCancel={()=>{
                        this.setState({
                            orderConfirmVisible:false
                        })
                    }}
                    onOk={this.handleConfirm}
                    width={600}
                >

                </Modal>
            </div>
        )
    }
}
export default Order
class FilterForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                placeholder="全部"
                                style={{ width: 80 }}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京</Option>
                                <Option value="2">杭州</Option>
                                <Option value="3">上海</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                           <DatePicker 
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="开始时间"
                           />
                        )
                    }
                    </FormItem>
                    <FormItem>
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="结束时间"
                            />
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('status')(
                            <Select
                                placeholder="全部"
                                style={{ width: 80 }}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilterForm = Form.create({})(FilterForm)